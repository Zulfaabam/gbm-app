import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import React from "react";

interface ModalProps {
  open: boolean;
  onClose: (value: string) => void;
}

const Modal = ({ open, onClose }: ModalProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Profil Saya</DialogTitle>
      <DialogContent>dsadsad</DialogContent>
      <DialogActions>sdadsad</DialogActions>
    </Dialog>
  );
};

export default Modal;
