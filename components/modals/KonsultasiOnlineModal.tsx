import {
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { ModalProps } from "./UserProfileModal";
import MyButton from "../MyButton";
import InputField from "../InputField";
import addData from "@/common/utils/addData";
import { AuthContext } from "context/AuthContext";
import { enqueueSnackbar } from "notistack";

export interface KonsulFormData {
  name: string;
  email: string;
  phoneNumber: string;
  date: string;
  session: string;
  invoice: string;
  status: string;
}

const KonsultasiOnlineModal = ({ open, onClose }: ModalProps) => {
  const user = useContext(AuthContext);

  const [konsul, setKonsul] = useState<KonsulFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    date: "",
    session: "",
    invoice: "",
    status: "New",
  });

  const [checked, setChecked] = useState(false);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  console.log(konsul);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKonsul({ ...konsul, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (user?.uid) {
      addData("consult", user?.uid, konsul)
        .then(() => {
          enqueueSnackbar("Janji telah dibuat", {
            variant: "success",
          });
        })
        .catch((error) => enqueueSnackbar(error, { variant: "error" }));
    }
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle className="font-sans">
        Buat Janji Konsultasi Gizi Online
      </DialogTitle>
      <DialogContent>
        <InputField
          name="name"
          label="Nama lengkap"
          value={konsul.name}
          onChange={(e) => handleChange(e)}
          required
        />
        <InputField
          name="email"
          type="email"
          label="Email"
          placeholder="example@mail.com"
          value={konsul.email}
          onChange={(e) => handleChange(e)}
          required
        />
        <InputField
          name="phoneNumber"
          label="No WhatsApp"
          value={konsul.phoneNumber}
          onChange={(e) => handleChange(e)}
          required
        />
        <div className="flex gap-4">
          <InputField
            name="date"
            label="Tanggal konsultasi"
            type="date"
            value={konsul.date}
            onChange={(e) => handleChange(e)}
            required
          />
          <InputField
            name="session"
            label="Lama durasi konsultasi"
            placeholder="1 sesi"
            value={konsul.session}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="flex gap-2 mt-6">
          <Checkbox
            size="small"
            checked={checked}
            onChange={handleCheck}
            inputProps={{ "aria-label": "controlled" }}
            sx={{ margin: 0, padding: 0 }}
          />
          <p className="font-semibold">
            Check kotak di samping untuk konfirmasi data Anda.
          </p>
        </div>
      </DialogContent>
      <DialogActions>
        <MyButton content="Batal" onClick={onClose} />
        <MyButton
          content="Kirim"
          className="btn-purple mr-6"
          onClick={handleSubmit}
          disabled={!checked}
        />
      </DialogActions>
    </Dialog>
  );
};

export default KonsultasiOnlineModal;
