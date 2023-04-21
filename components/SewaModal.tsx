import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
        <InputField label="Angkatan" />
        <InputField label="No WhatsApp" />
      </DialogContent>
      <DialogActions>
        <MyButton content="Batal" onClick={onClose} />
        <MyButton content="Kirim" className="btn-purple" />
      </DialogActions>
    </Dialog>
  );
};

export default SewaModal;
