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
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "@/firebase/clientApp";
import updateUserProfile from "@/common/utils/updateUserProfile";
import MyButton from "../MyButton";
import InputField from "../InputField";
import { MdModeEdit, MdOutlineCheck, MdPhotoCamera } from "react-icons/md";
import uploadUserPhoto from "@/common/utils/uploadUserPhoto";
import { getDownloadURL } from "firebase/storage";
import { useSnackbar } from "notistack";
import { updateData } from "@/common/utils/updateData";
import { doc, getDoc } from "firebase/firestore";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const UserProfileModal = ({ open, onClose }: ModalProps) => {
  const user = useContext(AuthContext);

  const { enqueueSnackbar } = useSnackbar();

  const [edit, setEdit] = useState(false);
  const [userPhotoURL, setUserPhotoURL] = useState(user?.photoURL || "");
  const [userName, setUserName] = useState(user?.displayName || "");
  const [userEmail, setUserEmail] = useState(user?.email || "");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");

  function handleSubmit() {
    if (userPhoneNumber && user?.uid) {
      updateData("users", user?.uid, { phoneNumber: userPhoneNumber })
        .then(() => {
          enqueueSnackbar("Profil berhasil diperbarui", { variant: "success" });
          onClose();
        })
        .catch((error) => enqueueSnackbar(error, { variant: "error" }));
    }
  }

  function handleUploadImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && user) {
      uploadUserPhoto(e.target.files[0], user)
        .then((res) => {
          if (res?.data?.ref) {
            enqueueSnackbar("Foto terunggah!", {
              variant: "success",
            });
            getDownloadURL(res?.data?.ref).then((url) => setUserPhotoURL(url));
          }
        })
        .catch((err) => enqueueSnackbar(err, { variant: "error" }));
    }
  }

  useEffect(() => {
    getDoc(doc(db, `users/${user?.uid}`)).then((res) => {
      setUserPhoneNumber(res.data()?.phoneNumber);
    });
  }, []);

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
              <IconButton
                onClick={() => {
                  setEdit(false);
                  if (
                    user?.displayName !== userName ||
                    user.photoURL !== userPhotoURL
                  )
                    updateUserProfile(auth, userName, userPhotoURL)
                      .then(() => {
                        if (user?.uid) {
                          updateData("users", user?.uid, { userName: userName })
                            .then()
                            .catch((error) =>
                              enqueueSnackbar(error, { variant: "error" })
                            );
                        }

                        enqueueSnackbar("Profil berhasil diperbarui!", {
                          variant: "success",
                        });
                      })
                      .catch((error) =>
                        enqueueSnackbar(error, { variant: "error" })
                      );
                }}
              >
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
          disabled
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
        <MyButton content="Tutup" onClick={onClose} />
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
