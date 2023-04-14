import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Typography,
  Stack,
  TextField,
} from "@mui/material";
import { AuthContext } from "context/AuthContext";
import React, { useContext } from "react";
import { auth } from "@/firebase/clientApp";
import updateUserProfile from "@/common/utils/updateUserProfile";
import MyButton from "./MyButton";
import InputField from "./InputField";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const UserProfileModal = ({ open, onClose }: ModalProps) => {
  const user = useContext(AuthContext);

  console.log(user);

  function handleSubmit() {
    console.log("submit success");
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Profil Saya</DialogTitle>
      <DialogContent>
        <Stack spacing={2} direction="row" alignItems="center">
          <Avatar
            src={user?.photoURL || "/images/gbm-logo.svg"}
            alt={`${user?.displayName} photo`}
            className="w-14 h-14"
          />
          <Typography>{user?.displayName || user?.email}</Typography>
        </Stack>
        <InputField
          label="Email"
          type="email"
          placeholder="example@mail.com"
          value={user?.email || ""}
        />
        <InputField
          label="Nomor WhatsApp"
          // type="number"
          placeholder="0812345678"
          value={user?.phoneNumber || ""}
        />
      </DialogContent>
      <DialogActions className="px-6">
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
