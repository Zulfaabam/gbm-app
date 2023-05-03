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
} from "@mui/material";
import React, { useContext, useState } from "react";
import { ModalProps } from "./UserProfileModal";
import MyButton from "./MyButton";
import InputField from "./InputField";
import addData from "@/common/utils/addData";
import { AuthContext } from "context/AuthContext";
import { enqueueSnackbar } from "notistack";

interface SewaFormData {
  name: string;
  school: string;
  phoneNumber: string;
  address: string;
  items: [];
  date: string;
  duration: string;
  guarantee: string;
  status: string;
}

const SewaModal = ({ open, onClose }: ModalProps) => {
  const user = useContext(AuthContext);

  const [sewa, setSewa] = useState<SewaFormData>({
    name: "",
    school: "",
    phoneNumber: "",
    address: "",
    items: [],
    date: "",
    duration: "",
    guarantee: "",
    status: "New",
  });

  const [checked, setChecked] = useState(false);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  console.log(sewa);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSewa({ ...sewa, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (user?.uid) {
      addData("rent", user?.uid, sewa)
        .then(() =>
          enqueueSnackbar("Pesanan telah dibuat", { variant: "success" })
        )
        .catch((error) => enqueueSnackbar(error, { variant: "error" }));
    }
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Sewa Alat Kesehatan</DialogTitle>
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
        <InputField
          name="items"
          label="Jumlah barang"
          value={sewa.items}
          onChange={(e) => handleChange(e)}
          required
        />
        <div className="flex gap-4">
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
            label="Lama peminjaman"
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
          <RadioGroup
            name="guarantee"
            value={sewa.guarantee}
            onChange={(e) => handleChange(e)}
            sx={{ margin: 0 }}
          >
            <FormControlLabel
              value="ktm"
              control={<Radio size="small" />}
              label={
                <label className="label">
                  <span className="label-text font-sans">KTM</span>
                </label>
              }
            />
            <FormControlLabel
              value="ktp"
              control={<Radio size="small" />}
              label={
                <label className="label">
                  <span className="label-text font-sans">KTP</span>
                </label>
              }
            />
          </RadioGroup>
          <FormHelperText sx={{ margin: 0 }}>
            <label className="m-0">
              <span className="label-text font-sans">
                Jaminan akan diberikan kepada pemegang inventaris dan akan
                diambil kembali setelah mengembalikan alat yang dipinjam.
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

export default SewaModal;
