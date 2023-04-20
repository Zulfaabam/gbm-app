import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { ModalProps } from "./UserProfileModal";
import MyButton from "./MyButton";

const PreOrderModal = ({ open, onClose }: ModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Pesan pre-order</DialogTitle>
      <DialogContent>sdadsa</DialogContent>
      <DialogActions>
        <MyButton content="Batal" onClick={onClose} />
        <MyButton content="Kirim" className="btn-purple" />
      </DialogActions>
    </Dialog>
  );
};

export default PreOrderModal;
