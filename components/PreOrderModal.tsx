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

const PreOrderModal = ({ open, onClose }: ModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Pre-order Alat Kesehatan</DialogTitle>
      <DialogContent>
        <InputField label="Nama lengkap" />
        <InputField label="Angkatan" />
        <InputField label="No WhatsApp" />
      </DialogContent>
      <DialogActions className="px-6">
        <MyButton content="Batal" onClick={onClose} />
        <MyButton content="Kirim" className="btn-purple" />
      </DialogActions>
    </Dialog>
  );
};

export default PreOrderModal;
