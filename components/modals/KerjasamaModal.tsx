import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { ModalProps } from "./UserProfileModal";
import MyButton from "../MyButton";
import InputField from "../InputField";

const KerjasamaModal = ({ open, onClose }: ModalProps) => {
  const fullScreen = useMediaQuery("(max-width: 500px)");

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      fullScreen={fullScreen}
    >
      <DialogTitle>Form Kerjasama</DialogTitle>
      <DialogContent className="space-y-3">
        <InputField
          label="Email"
          type="email"
          placeholder="example@mail.com"
          required
        />
        <InputField
          label="Contact Person Penanggung Jawab Kegiatan"
          placeholder="Contoh: Adi 081234567"
        />
        <InputField
          label="Nama Kegiatan"
          placeholder="Masukkan nama kegiatan dengan jelas"
        />
        <InputField
          label="Deskripsi Kegiatan"
          placeholder="Masukkan deskripsi kegiatan secara singkat"
        />
        <InputField label="Institusi atau Organisasi" />
        <InputField label="Bentuk Kerjasama" />
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
          <InputField label="Tanggal Kegiatan" type="date" />
          <InputField label="Waktu Kegiatan" placeholder="Contoh: 2 jam" />
        </div>
        <InputField
          label="Tempat/Platform Kegiatan"
          placeholder="Contoh: Gedung serbaguna atau Ms. Teams"
        />
        <InputField
          label="Jumlah dan Jenis Sasaran"
          placeholder="Contoh: 10 orang mendapatkan konseling"
        />
        <InputField
          label="Jumlah Aggota GBM yang dibutuhkan"
          placeholder="Contoh: 7 orang"
        />
      </DialogContent>
      <DialogActions className="px-6">
        <MyButton content="Tutup" onClick={onClose} />
        <MyButton content="Kirim" className="btn-purple" />
      </DialogActions>
    </Dialog>
  );
};

export default KerjasamaModal;
