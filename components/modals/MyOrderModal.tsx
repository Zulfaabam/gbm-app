import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Typography,
  Stack,
  IconButton,
  Box,
  Tabs,
  Tab,
  Tooltip,
} from "@mui/material";
import { AuthContext } from "context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "@/firebase/clientApp";
import updateUserProfile from "@/common/utils/updateUserProfile";
import MyButton from "../MyButton";
import InputField from "../InputField";
import updateUserPhoneNumber from "@/common/utils/updateUserPhoneNumber";
import { BiUpload, BiSave } from "react-icons/bi";
import updateUserEmail from "@/common/utils/updateUserEmail";
import uploadPhoto from "@/common/utils/uploadPhoto";
import { getDownloadURL } from "firebase/storage";
import { enqueueSnackbar } from "notistack";
import { TabPanelProps } from "@/pages/konsultasi";
import {
  DocumentData,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { SewaFormData } from "./SewaModal";
import { PreOrderFormData } from "./PreOrderModal";
import { numberFormatter } from "@/common/utils/formatter";
import { updateData } from "@/common/utils/updateData";
import { mutate } from "swr";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const MyOrderModal = ({ open, onClose }: ModalProps) => {
  const user = useContext(AuthContext);

  const [value, setValue] = useState(0);
  const [rentedItems, setRentedItems] = useState<
    SewaFormData[] | DocumentData[] | null
  >(null);
  const [preOrderedItems, setPreOrderedItems] = useState<
    PreOrderFormData[] | DocumentData[] | null
  >(null);
  const [selectedItem, setSelectedItem] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const rentRef = collection(db, "rentTransaction");

  const poRef = collection(db, "preOrderTransaction");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function getRentTransaction() {
    const queryRent = query(rentRef, where("userId", "==", user?.uid));

    getDocs(queryRent)
      .then((res) =>
        setRentedItems(
          res.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        )
      )
      .catch((error) => enqueueSnackbar(error, { variant: "error" }));
  }

  function getPreOrderTransaction() {
    const queryPo = query(poRef, where("userId", "==", user?.uid));

    getDocs(queryPo)
      .then((res) =>
        setPreOrderedItems(
          res.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        )
      )
      .catch((error) => enqueueSnackbar(error, { variant: "error" }));
  }

  function handleUploadImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && user) {
      uploadPhoto("bukti-pembayaran", e.target.files[0], user)
        .then((res) => {
          if (res?.data?.ref) {
            enqueueSnackbar("Foto terunggah!", {
              variant: "success",
            });
            getDownloadURL(res?.data?.ref).then((url) => setImageUrl(url));
          }
        })
        .catch((err) => enqueueSnackbar(err, { variant: "error" }));
    }
  }

  function handleSave(folder: string, revalidate: () => void) {
    if (imageUrl) {
      updateData(folder, selectedItem, {
        paymentInvoice: imageUrl,
        status: "Menunggu konfirmasi",
      })
        .then(() => {
          enqueueSnackbar("Bukti pembayaran berhasil terunggah!", {
            variant: "success",
          });
          setSelectedItem("");
          revalidate();
        })
        .catch((error) => enqueueSnackbar(error, { variant: "error" }));
    }
  }

  useEffect(() => {
    if (value === 0) {
      getRentTransaction();
    } else if (value === 1) {
      getPreOrderTransaction();
    }
  }, [value]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Pesanan Saya</DialogTitle>
      <DialogContent className="space-y-4">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Sewa" {...a11yProps(0)} />
            <Tab label="Pre-Order" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {rentedItems == null ? (
            <h2>Kosong</h2>
          ) : (
            <div className="flex gap-4 flex-wrap">
              {rentedItems?.map((item, idx) => (
                <div className="card w-96 bg-base-100 shadow-xl" key={idx}>
                  <div className="card-body">
                    <h2 className="card-title">
                      {item.items?.map((i: any) => i.value)?.join(", ")}
                    </h2>
                    <div className="badge badge-primary">{item.status}</div>
                    <p>
                      Total Pembayaran: Rp.{" "}
                      {numberFormatter.format(item.totalPrice)}
                    </p>
                    <div className="card-actions">
                      {item.status === "Baru" ? (
                        <div className="flex flex-row-reverse items-center gap-2">
                          {selectedItem && selectedItem === item.id ? (
                            <Tooltip title="Simpan">
                              <IconButton
                                onClick={() =>
                                  handleSave(
                                    "rentTransaction",
                                    getRentTransaction
                                  )
                                }
                              >
                                <BiSave />
                              </IconButton>
                            </Tooltip>
                          ) : (
                            <Tooltip title="Upload Bukti Bayar">
                              <IconButton
                                onClick={() => setSelectedItem(item.id)}
                              >
                                <BiUpload />
                              </IconButton>
                            </Tooltip>
                          )}
                          {selectedItem && selectedItem === item.id && (
                            <input
                              type="file"
                              id="buktiBayar"
                              className="file-input file-input-sm w-full max-w-xs"
                              onChange={(e) => handleUploadImage(e)}
                            />
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {preOrderedItems == null ? (
            <h2>Kosong</h2>
          ) : (
            <div className="flex gap-4 flex-wrap">
              {preOrderedItems?.map((item, idx) => (
                <div className="card w-96 bg-base-100 shadow-xl" key={idx}>
                  <div className="card-body">
                    <h2 className="card-title">
                      {item.items?.map((i: any) => i.value)?.join(", ")}
                    </h2>
                    <div className="badge badge-primary">{item.status}</div>
                    <p>
                      Total Pembayaran: Rp.{" "}
                      {numberFormatter.format(item.totalPrice)}
                    </p>
                    <div className="card-actions">
                      {item.status === "Baru" ? (
                        <div className="flex flex-row-reverse items-center gap-2">
                          {selectedItem && selectedItem === item.id ? (
                            <Tooltip title="Simpan">
                              <IconButton
                                onClick={() =>
                                  handleSave(
                                    "preOrderTransaction",
                                    getPreOrderTransaction
                                  )
                                }
                              >
                                <BiSave />
                              </IconButton>
                            </Tooltip>
                          ) : (
                            <Tooltip title="Upload Bukti Bayar">
                              <IconButton
                                onClick={() => setSelectedItem(item.id)}
                              >
                                <BiUpload />
                              </IconButton>
                            </Tooltip>
                          )}
                          {selectedItem && selectedItem === item.id && (
                            <input
                              type="file"
                              id="buktiBayar"
                              className="file-input file-input-sm w-full max-w-xs"
                              onChange={(e) => handleUploadImage(e)}
                            />
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
      </DialogContent>
      <DialogActions className="px-6">
        <MyButton content="Tutup" onClick={onClose} />
      </DialogActions>
    </Dialog>
  );
};

export default MyOrderModal;
