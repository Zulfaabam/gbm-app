import { numberFormatter } from "@/common/utils/formatter";
import { updateData } from "@/common/utils/updateData";
import uploadPhoto from "@/common/utils/uploadPhoto";
import InputField from "@/components/InputField";
import MyButton from "@/components/MyButton";
import RequiredLogin from "@/components/RequiredLogin";
import Chat from "@/components/chat";
import MainLayout from "@/components/layouts/MainLayout";
import KonsultasiOnlineModal, {
  KonsulFormData,
} from "@/components/modals/KonsultasiOnlineModal";
import { db } from "@/firebase/clientApp";
import { Box, IconButton, Tab, Tabs, Tooltip } from "@mui/material";
import { AuthContext } from "context/AuthContext";
import {
  DocumentData,
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
import moment from "moment";
import { enqueueSnackbar } from "notistack";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BiSave, BiUpload } from "react-icons/bi";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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

const konsultasi = () => {
  const user = useContext(AuthContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(0);
  const [room, setRoom] = useState<string | null>("");
  const [openModal, setOpenModal] = useState(false);
  const [consultItems, setConsultItems] = useState<
    KonsulFormData[] | DocumentData[] | null
  >(null);
  const [selectedItem, setSelectedItem] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [chatRooms, setChatRooms] = useState<string[] | null>(null);

  const messagesRef = collection(db, "messages");

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function getConsult() {
    const queryConsult = query(
      collection(db, "consult"),
      where("userId", "==", user?.uid)
    );

    getDocs(queryConsult)
      .then((res) =>
        setConsultItems(
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

  async function handleEnterRoom(room: string) {
    if (room === "") return;

    const findRoom = chatRooms?.find((item) => item === room);

    if (user && findRoom) {
      sessionStorage.setItem("chat-room", room);

      setRoom(room);

      await addDoc(messagesRef, {
        text: "Mulai Konsultasi",
        createdAt: serverTimestamp(),
        userName: user.displayName,
        userId: user.uid,
        room: room,
      });
    } else if (!findRoom) {
      enqueueSnackbar("Ruangan chat tidak ditemukan", { variant: "error" });
    } else {
      return;
    }
  }

  function handleLeaveChat() {
    if (room === "") return;

    sessionStorage.removeItem("chat-room");
    setRoom("");
  }

  useEffect(() => {
    if (sessionStorage.getItem("chat-room")) {
      setRoom(sessionStorage.getItem("chat-room"));
    }
  }, []);

  useEffect(() => {
    if (value === 0 && user?.uid) {
      getConsult();
    }
  }, [value, user]);

  useEffect(() => {
    getDocs(messagesRef)
      .then((res) => {
        const allRooms = res.docs.map((data) => data.data().room);

        const uniqueRooms = [...new Set(allRooms)];

        setChatRooms([...uniqueRooms]);
      })
      .catch((error) => enqueueSnackbar(error, { variant: "error" }));
  }, [value]);

  if (user == null)
    return (
      <MainLayout>
        <div className="py-7 max-w-8xl min-h-screen mx-auto flex flex-col justify-center items-center">
          <RequiredLogin />
        </div>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className="py-7 max-w-8xl min-h-screen mx-auto">
        <div className="mb-5">
          <div className="h-5 w-full bg-maroon rounded-t-lg"></div>
          <div className="bg-cream space-y-4 pb-5 pt-8 px-4 lg:px-0">
            <h1 className="font-heading text-xl lg:text-3xl xl:text-5xl text-center">
              Konsultasi Gizi Online
            </h1>
            <div className="text-sm lg:text-xl max-w-[970px] mx-auto font-medium text-center space-y-4">
              <p>
                Halo! Selamat datang di Konsultasi Gizi Online oleh GBM Undip
              </p>
              <p>
                Konsultasi Kesehatan GBM dapat dilakukan secara online, dengan
                ketentuan: ▶️ Konsultasi dilakukan didalam sistem informasi Gizi
                Bakti Masyarakat ▶️ Konsultasi online berlangsung persesi selama
                30 menit dengan biaya 5k per sesi ▶️ Terlambatnya pengguna tetap
                terhitung sebagai durasi konsultasi ▶️ Pembahasan yang
                diperbolehkan selama konsultasi adalah mengenai gizi dan
                kesehatan, selain itu konsultan berhak tidak menjawab atau
                mengakhiri sesi jika sudah melanggar privasi dan norma
                kesopanan.
              </p>
            </div>
          </div>
        </div>
        <div className="my-5 w-full">
          <MyButton
            content="Buat Janji"
            className="btn-purple block ml-auto w-60"
            onClick={handleOpenModal}
          />
        </div>
        <div className="w-full">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="proses" {...a11yProps(0)} />
              <Tab label="Berlangsung" {...a11yProps(1)} />
              <Tab label="Selesai" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="flex gap-4 flex-wrap">
              {consultItems
                ?.filter((item) => item.status !== "Selesai")
                ?.map((item, idx) => (
                  <div className="card w-96 bg-base-100 shadow-xl" key={idx}>
                    <div className="card-body">
                      <div className="flex gap-2 items-center">
                        <h2 className="card-title">{item.name}</h2>
                        <div className="badge badge-primary">{item.status}</div>
                      </div>
                      <div>
                        <p>
                          Tanggal: {moment(item.date).format("DD-MM-YYYY")} (
                          {item.session} sesi)
                        </p>
                        <p>
                          Total Pembayaran: Rp.{" "}
                          {numberFormatter.format(item.totalPrice)}
                        </p>
                        {item.status === "Dikonfirmasi" ||
                        item.status === "Berlangsung" ||
                        item.status === "Selesai" ? (
                          <p>Kode Ruangan Chat: {item.roomCode}</p>
                        ) : null}
                      </div>
                      <div className="card-actions">
                        {item.status === "Baru" ? (
                          <div className="flex flex-row-reverse items-center gap-2">
                            {selectedItem && selectedItem === item.id ? (
                              <Tooltip title="Simpan">
                                <IconButton
                                  onClick={() =>
                                    handleSave("consult", getConsult)
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
            {!consultItems || consultItems.length === 0 ? (
              <div className="flex flex-col justify-center items-center gap-4 pt-16">
                <h2>Tidak ada konsultasi yang sedang diproses</h2>
              </div>
            ) : null}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {room ? (
              <Chat room={room} onLeaveChat={handleLeaveChat} />
            ) : consultItems?.find((item) => item.status === "Berlangsung") ? (
              <div className="flex flex-col justify-center items-center gap-4 pt-16">
                <input
                  type="text"
                  placeholder="Masukkan kode chat room di sini"
                  ref={inputRef}
                  className="input input-bordered w-full max-w-xs mx-auto"
                />
                <MyButton
                  content="Masuk"
                  className="btn-purple"
                  onClick={() => {
                    if (inputRef.current?.value) {
                      handleEnterRoom(inputRef.current.value);
                    }
                  }}
                />
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-4 pt-16">
                <h2>Tidak ada konsultasi yang sedang berlangsung</h2>
              </div>
            )}
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="flex gap-4 flex-wrap">
              {consultItems
                ?.filter((item) => item.status === "Selesai")
                ?.map((item, idx) => (
                  <div className="card w-96 bg-base-100 shadow-xl" key={idx}>
                    <div className="card-body">
                      <div className="flex gap-2 items-center">
                        <h2 className="card-title">{item.name}</h2>
                        <div className="badge badge-primary">{item.status}</div>
                      </div>
                      <div>
                        <p>
                          Tanggal: {moment(item.date).format("DD-MM-YYYY")} (
                          {item.session} sesi)
                        </p>
                        <p>
                          Total Pembayaran: Rp.{" "}
                          {numberFormatter.format(item.totalPrice)}
                        </p>
                        {item.status === "Dikonfirmasi" ||
                        item.status === "Berlangsung" ||
                        item.status === "Selesai" ? (
                          <p>Kode Ruangan Chat: {item.roomCode}</p>
                        ) : null}
                      </div>
                      <div className="card-actions">
                        {item.status === "Baru" ? (
                          <div className="flex flex-row-reverse items-center gap-2">
                            {selectedItem && selectedItem === item.id ? (
                              <Tooltip title="Simpan">
                                <IconButton
                                  onClick={() =>
                                    handleSave("consult", getConsult)
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
            {!consultItems ||
            consultItems.length === 0 ||
            !consultItems.find((item) => item.status === "Selesai") ? (
              <div className="flex flex-col justify-center items-center gap-4 pt-16">
                <h2>Tidak ada konsultasi yang sudah selesai</h2>
              </div>
            ) : null}
          </TabPanel>
        </div>
        {openModal ? (
          <KonsultasiOnlineModal
            open={openModal}
            onClose={() => {
              handleCloseModal();
              getConsult();
            }}
          />
        ) : null}
      </div>
    </MainLayout>
  );
};

export default konsultasi;
