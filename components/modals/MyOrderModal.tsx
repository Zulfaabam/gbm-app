import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { AuthContext } from "context/AuthContext";
import React, { useContext, useState } from "react";
import { auth } from "@/firebase/clientApp";
import updateUserProfile from "@/common/utils/updateUserProfile";
import MyButton from "../MyButton";
import InputField from "../InputField";
import updateUserPhoneNumber from "@/common/utils/updateUserPhoneNumber";
import { MdModeEdit, MdOutlineCheck, MdPhotoCamera } from "react-icons/md";
import updateUserEmail from "@/common/utils/updateUserEmail";
import uploadUserPhoto from "@/common/utils/uploadUserPhoto";
import { getDownloadURL } from "firebase/storage";
import { enqueueSnackbar } from "notistack";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const MyOrderModal = ({ open, onClose }: ModalProps) => {
  const user = useContext(AuthContext);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Pesanan Saya</DialogTitle>
      <DialogContent className="space-y-4">pesanan</DialogContent>
      <DialogActions className="px-6">
        <MyButton content="Tutup" onClick={onClose} />
        {/* <MyButton
          content="Simpan"
          onClick={handleSubmit}
          className="btn-purple"
        /> */}
      </DialogActions>
    </Dialog>
  );
};

export default MyOrderModal;
