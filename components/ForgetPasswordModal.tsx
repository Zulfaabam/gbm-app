import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import MyButton from "./MyButton";
import { ModalProps } from "./UserProfileModal";
import InputField from "./InputField";
import sendResetPasswordReq from "@/common/utils/sendResetPasswordReq";
import { auth } from "@/firebase/clientApp";

const ForgetPasswordModal = ({ open, onClose }: ModalProps) => {
  const [email, setEmail] = useState("");

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Lupa Password</DialogTitle>
      <DialogContent>
        <InputField
          label="Masukkan Email untuk melakukan reset password"
          type="email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions className="px-6">
        <MyButton content="Batal" onClick={onClose} />
        <MyButton
          disabled={!email}
          content="Kirim"
          className="btn-purple"
          onClick={() => sendResetPasswordReq(auth, email)}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ForgetPasswordModal;
