import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { AuthContext } from "context/AuthContext";
import React, { useContext } from "react";
import { auth } from "@/firebase/clientApp";
import { updateUserProfile } from "@/common/utils/updateUserProfile";
import { Button } from "./Button";

interface ModalProps {
  open: boolean;
  onClose: (value: string) => void;
}

const UserProfileModal = ({ open, onClose }: ModalProps) => {
  const user = useContext(AuthContext);

  console.log(user);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Profil Saya</DialogTitle>
      <DialogContent>dsadsad</DialogContent>
      <DialogActions>
        <Button
          content="Save"
          onClick={() => updateUserProfile(auth, "example1", "")}
        />
      </DialogActions>
    </Dialog>
  );
};

export default UserProfileModal;
