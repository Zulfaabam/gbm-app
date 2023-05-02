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
import React from "react";
import { ModalProps } from "./UserProfileModal";
import MyButton from "./MyButton";
import InputField from "./InputField";

const SewaModal = ({ open, onClose }: ModalProps) => {
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
        <MyButton content="Kirim" className="btn-purple" />
      </DialogActions>
    </Dialog>
  );
};

export default SewaModal;
