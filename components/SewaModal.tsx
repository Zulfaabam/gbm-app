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
} from "@mui/material";
import React, { useContext } from "react";
import { ModalProps } from "./UserProfileModal";
import MyButton from "./MyButton";
import InputField from "./InputField";
import addData from "@/common/utils/addData";
import { AuthContext } from "context/AuthContext";
import { enqueueSnackbar } from "notistack";

const SewaModal = ({ open, onClose }: ModalProps) => {
  const user = useContext(AuthContext);

  function handleSubmit() {
    if (user?.uid) {
      addData("rent", user?.uid, { name: "maba", item: "banyak" })
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
        <InputField label="Nama lengkap" />
        <InputField label="Instansi" placeholder="Jurusan, Universitas" />
        <InputField label="No WhatsApp" />
        <InputField label="Alamat" placeholder="Alamat peminjam di Semarang" />
        <InputField label="Jumlah barang" />
        <div className="flex gap-4">
          <InputField label="Tanggal peminjaman" type="date" />
          <InputField label="Lama peminjaman" placeholder="1 hari" />
        </div>
        <FormControl>
          <FormLabel>Jaminan</FormLabel>
          <RadioGroup
            name="jaminan"
            // value={value}
            // onChange={handleChange}
            sx={{ my: 1 }}
          >
            <FormControlLabel value="ktm" control={<Radio />} label="KTM" />
            <FormControlLabel value="ktp" control={<Radio />} label="KTP" />
          </RadioGroup>
          <FormHelperText>
            Jaminan akan diberikan kepada pemegang inventaris dan akan diambil
            kembali setelah mengembalikan alat yang dipinjam
          </FormHelperText>
        </FormControl>
      </DialogContent>
      <DialogActions className="px-6">
        <MyButton content="Batal" onClick={onClose} />
        <MyButton
          content="Kirim"
          className="btn-purple"
          onClick={handleSubmit}
        />
      </DialogActions>
    </Dialog>
  );
};

export default SewaModal;
