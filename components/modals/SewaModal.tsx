import {
  Checkbox,
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
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { ModalProps } from "./UserProfileModal";
import MyButton from "../MyButton";
import InputField from "../InputField";
import addData from "@/common/utils/addData";
import { AuthContext } from "context/AuthContext";
import { enqueueSnackbar } from "notistack";
import ReceiptSewa from "../receipt/ReceiptSewa";
import { Sewa } from "@/pages/sewa";

interface SewaModalProps extends ModalProps {
  items: Sewa[] | undefined;
}

export interface Items {
  value: string;
  total: number;
  price: number;
  stock: number;
}

export interface SewaFormData {
  name: string;
  school: string;
  phoneNumber: string;
  address: string;
  items: Items[] | undefined;
  date: string;
  duration: number;
  guarantee: string;
  paymentInvoice: File | null | undefined;
  totalPrice: number | undefined;
  status: string;
  id?: string;
}

const SewaModal = ({ open, onClose, items }: SewaModalProps) => {
  const user = useContext(AuthContext);

  const fullScreen = useMediaQuery("(max-width: 500px)");

  const [sewa, setSewa] = useState<SewaFormData>({
    name: "",
    school: "",
    phoneNumber: "",
    address: "",
    items: [
      {
        value: "",
        total: 0,
        price: 0,
        stock: 0,
      },
    ],
    date: "",
    duration: 0,
    guarantee: "",
    paymentInvoice: null,
    totalPrice: 0,
    status: "Baru",
  });

  const [checked, setChecked] = useState(false);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSewa({ ...sewa, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (user?.uid) {
      const body = {
        ...sewa,
        userId: user?.uid,
        items: sewa.items?.filter((item) => item.total > 0),
        totalPrice: sewa.items
          ?.filter((item) => item.total > 0)
          ?.map((item) => item.price)
          ?.reduce((a, b) => a + b, 0),
      };

      addData("rentTransaction", body)
        .then(() => {
          enqueueSnackbar("Pesanan telah dibuat", {
            variant: "orderMade",
            anchorOrigin: { horizontal: "right", vertical: "top" },
            persist: true,
            pdf: <ReceiptSewa sewa={body} />,
          });
          onClose();
        })
        .catch((error) => enqueueSnackbar(error, { variant: "error" }));
    }
  }

  useEffect(() => {
    setSewa({
      ...sewa,
      items: items?.map((item) => ({
        value: item.data.desc,
        price: item.data.price,
        total: 0,
        stock: item.data.stock,
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
      <DialogTitle className="font-sans">Sewa Alat Kesehatan</DialogTitle>
      <DialogContent>
        <InputField
          name="name"
          label="Nama lengkap"
          value={sewa.name}
          onChange={(e) => handleChange(e)}
          required
        />
        <InputField
          name="school"
          label="Instansi"
          placeholder="Jurusan, Universitas"
          value={sewa.school}
          onChange={(e) => handleChange(e)}
          required
        />
        <InputField
          name="phoneNumber"
          label="No WhatsApp"
          value={sewa.phoneNumber}
          onChange={(e) => handleChange(e)}
          required
        />
        <InputField
          name="address"
          label="Alamat"
          placeholder="Alamat peminjam di Semarang"
          value={sewa.address}
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="label">
          <span className="label-text">Jumlah barang yang dipesan *</span>
        </label>
        {sewa.items?.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 mb-1">
            <label className="label w-1/2">
              <span className="label-text">{item.value}</span>
            </label>
            <InputField
              type="number"
              placeholder="Jumlah"
              className="w-28"
              min={0}
              max={item.stock}
              value={item.total}
              onChange={(e) => {
                if (parseInt(e.target.value) > item.stock) return;

                let arr = sewa.items;

                if (arr) {
                  arr[idx]["total"] = parseInt(e.target.value);
                  setSewa({ ...sewa, items: arr });
                }
              }}
            />
          </div>
        ))}
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
          <InputField
            name="date"
            label="Tanggal peminjaman"
            type="date"
            value={sewa.date}
            onChange={(e) => handleChange(e)}
            required
          />
          <InputField
            name="duration"
            type="number"
            label="Lama peminjaman (hari)"
            placeholder="1 hari"
            value={sewa.duration}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <FormControl required>
          <FormLabel className="mt-2">
            <span className="label-text font-sans">Jaminan</span>
          </FormLabel>
          <FormHelperText sx={{ margin: 0 }}>
            <label className="m-0">
              <span className="label-text font-sans text-xs">
                Jaminan akan diberikan kepada pemegang inventaris dan akan
                diambil kembali setelah mengembalikan alat yang dipinjam.
              </span>
            </label>
          </FormHelperText>
          <RadioGroup
            name="guarantee"
            value={sewa.guarantee}
            onChange={(e) => handleChange(e)}
            sx={{ margin: 0 }}
            className="px-1"
            row
          >
            <FormControlLabel
              value="ktm"
              control={<Radio size="small" />}
              label={
                <label className="label pl-0">
                  <span className="label-text font-sans">KTM</span>
                </label>
              }
            />
            <FormControlLabel
              value="ktp"
              control={<Radio size="small" />}
              label={
                <label className="label pl-0">
                  <span className="label-text font-sans">KTP</span>
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

export default SewaModal;
