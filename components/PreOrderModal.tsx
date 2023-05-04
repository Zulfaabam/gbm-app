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
} from "@mui/material";
import React, { useState, useContext } from "react";
import { ModalProps } from "./UserProfileModal";
import MyButton from "./MyButton";
import InputField from "./InputField";
import { AuthContext } from "context/AuthContext";
import addData from "@/common/utils/addData";
import { enqueueSnackbar } from "notistack";
import ReceiptPO from "./ReceiptPO";

export interface PreOrderFormData {
  name: string;
  year: string;
  phoneNumber: string;
  items: [];
  delivery: string;
}

const PreOrderModal = ({ open, onClose }: ModalProps) => {
  const user = useContext(AuthContext);

  const [preOrder, setPreOrder] = useState<PreOrderFormData>({
    name: "",
    year: "",
    phoneNumber: "",
    items: [],
    delivery: "",
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
      addData("preOrder", user?.uid, preOrder)
        .then(() =>
          enqueueSnackbar("Pesanan telah dibuat", {
            variant: "orderMade",
            persist: true,
            pdf: <ReceiptPO preOrder={preOrder} />,
          })
        )
        .catch((error) => enqueueSnackbar(error, { variant: "error" }));
    }
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Pre-order Alat Kesehatan</DialogTitle>
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
        <InputField
          name="items"
          label="Jumlah barang"
          value={preOrder.items}
          onChange={(e) => handleChange(e)}
          required
        />
        <FormControl required>
          <FormLabel className="mt-2">
            <span className="label-text font-sans">Opsi Pengiriman</span>
          </FormLabel>
          <RadioGroup
            name="delivery"
            value={preOrder.delivery}
            onChange={(e) => handleChange(e)}
            sx={{ margin: 0 }}
          >
            <FormControlLabel
              value="cod"
              control={<Radio size="small" />}
              label={
                <label className="label">
                  <span className="label-text font-sans">COD (Di kampus)</span>
                </label>
              }
            />
            <FormControlLabel
              value="shopee"
              control={<Radio size="small" />}
              label={
                <label className="label">
                  <span className="label-text font-sans">Shopee</span>
                </label>
              }
            />
          </RadioGroup>
          <FormHelperText sx={{ margin: 0 }}>
            <label className="m-0">
              <span className="label-text font-sans">
                Untuk kemudahan, pemesanan hanya dapat dilakukan di Shopee. Jika
                Anda kesulitan dalam menggunakan marketplace tersebut, harap
                hubungi CP. Terima kasih
              </span>
            </label>
          </FormHelperText>
        </FormControl>
        <div className="flex gap-2 mt-4">
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
