import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
  useMediaQuery,
} from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { ModalProps } from "./UserProfileModal";
import MyButton from "../MyButton";
import InputField from "../InputField";
import { AuthContext } from "context/AuthContext";
import addData from "@/common/utils/addData";
import { enqueueSnackbar } from "notistack";
import ReceiptPO from "../receipt/ReceiptPO";
import { PreOrder } from "@/pages/pre-order";
import { Items } from "./SewaModal";

interface PreOrderModalProps extends ModalProps {
  items: PreOrder[] | undefined;
}

export interface PreOrderFormData {
  name: string;
  year: string;
  phoneNumber: string;
  items: Items[] | undefined;
  delivery: string;
  paymentInvoice: File | null | undefined;
}

const PreOrderModal = ({ open, onClose, items }: PreOrderModalProps) => {
  const user = useContext(AuthContext);

  const fullScreen = useMediaQuery("(max-width: 500px)");

  const [preOrder, setPreOrder] = useState<PreOrderFormData>({
    name: "",
    year: "",
    phoneNumber: "",
    items: [
      {
        value: "",
        total: 0,
      },
    ],
    delivery: "",
    paymentInvoice: null,
  });

  const [checked, setChecked] = useState(false);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  console.log(preOrder);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPreOrder({ ...preOrder, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (user?.uid) {
      const body = {
        ...preOrder,
        userId: user?.uid,
        items: preOrder.items?.filter((item) => item.total > 0),
      };

      addData("preOrderTransaction", body)
        .then(() =>
          enqueueSnackbar("Pesanan telah dibuat", {
            variant: "orderMade",
            anchorOrigin: { horizontal: "right", vertical: "top" },
            persist: true,
            pdf: <ReceiptPO preOrder={body} />,
          })
        )
        .catch((error) => enqueueSnackbar(error, { variant: "error" }));
    }
  }

  useEffect(() => {
    setPreOrder({
      ...preOrder,
      items: items?.map((item) => ({
        value: item.data.desc,
        total: 0,
      })),
    });
  }, [items]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      fullScreen={fullScreen}
    >
      <DialogTitle className="font-sans">Pre-order Alat Kesehatan</DialogTitle>
      <DialogContent>
        <InputField
          name="name"
          label="Nama lengkap"
          value={preOrder.name}
          onChange={(e) => handleChange(e)}
          required
        />
        <InputField
          name="year"
          label="Angkatan"
          placeholder="ex: 2019"
          value={preOrder.year}
          onChange={(e) => handleChange(e)}
          required
        />
        <InputField
          name="phoneNumber"
          label="No WhatsApp"
          value={preOrder.phoneNumber}
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="label">
          <span className="label-text">Jumlah barang yang dipesan *</span>
        </label>
        {preOrder.items?.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 mb-1">
            <label className="label w-1/2">
              <span className="label-text">{item.value}</span>
            </label>
            <InputField
              type="number"
              placeholder="Jumlah"
              className="w-28"
              min={0}
              value={item.total}
              onChange={(e) => {
                let arr = preOrder.items;

                if (arr) {
                  arr[idx]["total"] = parseInt(e.target.value);
                  setPreOrder({ ...preOrder, items: arr });
                }
              }}
            />
          </div>
        ))}
        <FormControl required>
          <FormLabel className="mt-2">
            <span className="label-text font-sans">Opsi Pengiriman</span>
          </FormLabel>
          <FormHelperText sx={{ margin: 0 }}>
            <label className="m-0">
              <span className="label-text font-sans text-xs">
                Untuk kemudahan, pemesanan hanya dapat dilakukan di Shopee. Jika
                Anda kesulitan dalam menggunakan marketplace tersebut, harap
                hubungi CP. Terima kasih
              </span>
            </label>
          </FormHelperText>
          <RadioGroup
            name="delivery"
            value={preOrder.delivery}
            onChange={(e) => handleChange(e)}
            className="px-1"
            row
          >
            <FormControlLabel
              value="cod"
              control={<Radio size="small" className="py-0" />}
              label={
                <label className="label pl-0">
                  <span className="label-text font-sans">COD (Di kampus)</span>
                </label>
              }
            />
            <FormControlLabel
              value="shopee"
              control={<Radio size="small" className="py-0" />}
              label={
                <label className="label pl-0">
                  <span className="label-text font-sans">Shopee</span>
                </label>
              }
            />
          </RadioGroup>
        </FormControl>
        <div className="flex gap-2 mt-6">
          <Checkbox
            size="small"
            checked={checked}
            onChange={handleCheck}
            inputProps={{ "aria-label": "controlled" }}
            sx={{ margin: 0, padding: 0 }}
          />
          <p className="font-semibold">
            Check kotak di samping apabila sudah yakin dengan pesanan Anda.
          </p>
        </div>
      </DialogContent>
      <DialogActions>
        <MyButton content="Batal" onClick={onClose} />
        <MyButton
          content="Kirim"
          className="btn-purple mr-6"
          onClick={handleSubmit}
          disabled={!checked}
        />
      </DialogActions>
    </Dialog>
  );
};

export default PreOrderModal;
