import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { ModalProps } from "./UserProfileModal";
import MyButton from "../MyButton";
import InputField from "../InputField";
import { AuthContext } from "context/AuthContext";
import addData from "@/common/utils/addData";
import { enqueueSnackbar } from "notistack";

export interface PartnershipForm {
  email: string;
  contactPerson: string;
  eventName: string;
  desc: string;
  org: string;
  cooperation: string;
  date: string;
  duration: string;
  platform: string;
  goals: string;
  gbmMembers: number;
}

const KerjasamaModal = ({ open, onClose }: ModalProps) => {
  const user = useContext(AuthContext);

  const fullScreen = useMediaQuery("(max-width: 500px)");

  const [value, setValue] = useState<PartnershipForm>({
    email: "",
    contactPerson: "",
    eventName: "",
    desc: "",
    org: "",
    cooperation: "",
    date: "",
    duration: "",
    platform: "",
    goals: "",
    gbmMembers: 1,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (user?.uid) {
      const body = {
        ...value,
        userId: user?.uid,
      };

      addData("partnershipProposal", body)
        .then(() => {
          enqueueSnackbar("Proposal kerjasama telah dibuat!", {
            variant: "success",
            anchorOrigin: { horizontal: "right", vertical: "top" },
          });
        })
        .catch((error) => enqueueSnackbar(error, { variant: "error" }));
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      fullScreen={fullScreen}
    >
      <DialogTitle>Form Kerjasama</DialogTitle>
      <DialogContent className="space-y-3">
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="example@mail.com"
          required
          value={value.email}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          name="contactPerson"
          label="Contact Person Penanggung Jawab Kegiatan"
          placeholder="Contoh: Adi 081234567"
          required
          value={value.contactPerson}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          name="eventName"
          label="Nama Kegiatan"
          placeholder="Masukkan nama kegiatan dengan jelas"
          required
          value={value.eventName}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          name="desc"
          label="Deskripsi Kegiatan"
          placeholder="Masukkan deskripsi kegiatan secara singkat"
          required
          value={value.desc}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          name="org"
          label="Institusi atau Organisasi"
          required
          value={value.org}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          name="cooperation"
          label="Bentuk Kerjasama"
          required
          value={value.cooperation}
          onChange={(e) => handleChange(e)}
        />
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
          <InputField
            name="date"
            label="Tanggal Kegiatan"
            type="date"
            required
            value={value.date}
            onChange={(e) => handleChange(e)}
          />
          <InputField
            name="duration"
            label="Waktu Kegiatan"
            placeholder="Contoh: 2 jam"
            required
            value={value.duration}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <InputField
          name="platform"
          label="Tempat/Platform Kegiatan"
          placeholder="Contoh: Gedung serbaguna atau Ms. Teams"
          required
          value={value.platform}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          name="goals"
          label="Jumlah dan Jenis Sasaran"
          placeholder="Contoh: 10 orang mendapatkan konseling"
          required
          value={value.goals}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          type="number"
          min={1}
          name="gbmMembers"
          label="Jumlah Aggota GBM yang dibutuhkan"
          placeholder="Contoh: 7 orang"
          required
          value={value.gbmMembers}
          onChange={(e) => handleChange(e)}
        />
      </DialogContent>
      <DialogActions className="px-6">
        <MyButton content="Tutup" onClick={onClose} />
        <MyButton
          content="Kirim"
          className="btn-purple"
          onClick={handleSubmit}
        />
      </DialogActions>
    </Dialog>
  );
};

export default KerjasamaModal;
