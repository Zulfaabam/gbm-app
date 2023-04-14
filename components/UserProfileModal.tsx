import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { AuthContext } from "context/AuthContext";
import React, { useContext } from "react";
import { auth } from "@/firebase/clientApp";
import updateUserProfile from "@/common/utils/updateUserProfile";
import MyButton from "./MyButton";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const UserProfileModal = ({ open, onClose }: ModalProps) => {
  const user = useContext(AuthContext);

  console.log(user);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Profil Saya</DialogTitle>
      <DialogContent>dsadsad</DialogContent>
      <DialogActions>
        <MyButton content="Batal" onClick={onClose} />
        <MyButton
          content="Simpan"
          onClick={() => updateUserProfile(auth, "example1", "")}
          className="btn-purple"
        />
      </DialogActions>
    </Dialog>
  );
};

export default UserProfileModal;
