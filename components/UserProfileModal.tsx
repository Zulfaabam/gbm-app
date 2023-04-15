import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Typography,
  Stack,
  TextField,
  IconButton,
} from "@mui/material";
import { AuthContext } from "context/AuthContext";
import React, { useContext, useState } from "react";
import { auth } from "@/firebase/clientApp";
import updateUserProfile from "@/common/utils/updateUserProfile";
import MyButton from "./MyButton";
import InputField from "./InputField";
import updateUserPhoneNumber from "@/common/utils/updateUserPhoneNumber";
import { MdModeEdit, MdOutlineCheck, MdPhotoCamera } from "react-icons/md";
import updateUserEmail from "@/common/utils/updateUserEmail";
import uploadImage from "@/common/utils/uploadImage";
import { getDownloadURL } from "firebase/storage";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const UserProfileModal = ({ open, onClose }: ModalProps) => {
  const user = useContext(AuthContext);

  const [edit, setEdit] = useState(false);
  // const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [userPhotoURL, setUserPhotoURL] = useState(user?.photoURL || "");
  const [userName, setUserName] = useState(user?.displayName || "");
  const [userEmail, setUserEmail] = useState(user?.email || "");
  const [userPhoneNumber, setUserPhoneNumber] = useState(
    user?.phoneNumber || ""
  );

  console.log(user);

  function handleSubmit() {
    updateUserProfile(auth, userName, userPhotoURL);

    // updateUserEmail(auth, userEmail);

    // updateUserPhoneNumber(auth, userPhoneNumber);
    console.log("submit success");
  }

  function handleUploadImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && user) {
      uploadImage(e.target.files[0], user)
        .then((res) => {
          if (res?.data?.ref) {
            getDownloadURL(res?.data?.ref).then((url) => setUserPhotoURL(url));
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Profil Saya</DialogTitle>
      <DialogContent className="space-y-4">
        <Stack spacing={2} direction="row" alignItems="center">
          {edit ? (
            <>
              <div className="relative">
                <Avatar
                  src={userPhotoURL}
                  alt={`${userName} photo`}
                  className="w-20 h-20"
                />
                <IconButton
                  aria-label="upload picture"
                  component="label"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                >
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => handleUploadImage(e)}
                  />
                  <MdPhotoCamera />
                </IconButton>
              </div>
              <InputField
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <IconButton onClick={() => setEdit(false)}>
                <MdOutlineCheck />
              </IconButton>
            </>
          ) : (
            <>
              <Avatar
                src={userPhotoURL}
                alt={`${userName} photo`}
                className="w-20 h-20"
              />
              <Typography>{userName}</Typography>
              <IconButton onClick={() => setEdit(true)}>
                <MdModeEdit />
              </IconButton>
            </>
          )}
        </Stack>
        <InputField
          label="Email"
          type="email"
          placeholder="example@mail.com"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <InputField
          label="Nomor WhatsApp"
          // type="number"
          placeholder="0812345678"
          value={userPhoneNumber}
          onChange={(e) => setUserPhoneNumber(e.target.value)}
        />
      </DialogContent>
      <DialogActions className="px-6">
        <MyButton content="Batal" onClick={onClose} />
        <MyButton
          content="Simpan"
          onClick={handleSubmit}
          className="btn-purple"
        />
      </DialogActions>
    </Dialog>
  );
};

export default UserProfileModal;
