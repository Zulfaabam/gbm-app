import InputField from "@/components/InputField";
import MyButton from "@/components/MyButton";
import RequiredLogin from "@/components/RequiredLogin";
import Chat from "@/components/chat";
import MainLayout from "@/components/layouts/MainLayout";
import KonsultasiOnlineModal from "@/components/modals/KonsultasiOnlineModal";
import { Box, Tab, Tabs } from "@mui/material";
import { AuthContext } from "context/AuthContext";
import React, { useContext, useEffect, useRef, useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const konsultasi = () => {
  const user = useContext(AuthContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(0);
  const [room, setRoom] = useState<string | null>("");
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (sessionStorage.getItem("chat-room")) {
      setRoom(sessionStorage.getItem("chat-room"));
    }
  }, []);

  if (user == null)
    return (
      <MainLayout>
        <div className="py-7 max-w-8xl min-h-screen mx-auto flex flex-col justify-center items-center">
          <RequiredLogin />
        </div>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className="py-7 max-w-8xl min-h-screen mx-auto">
        <div className="mb-5">
          <div className="h-5 w-full bg-maroon rounded-t-lg"></div>
          <div className="bg-cream space-y-4 pb-5 pt-8 px-4 lg:px-0">
            <h1 className="font-heading text-xl lg:text-3xl xl:text-5xl text-center">
              Konsultasi Gizi Online
            </h1>
            <div className="text-sm lg:text-xl max-w-[970px] mx-auto font-medium text-center space-y-4">
              <p>
                Halo! Selamat datang di Konsultasi Gizi Online oleh GBM Undip
              </p>
              <p>
                Konsultasi Kesehatan GBM dapat dilakukan secara online, dengan
                ketentuan: ▶️ Konsultasi dilakukan didalam sistem informasi Gizi
                Bakti Masyarakat ▶️ Konsultasi online berlangsung persesi selama
                30 menit dengan biaya 5k per sesi ▶️ Terlambatnya pengguna tetap
                terhitung sebagai durasi konsultasi ▶️ Pembahasan yang
                diperbolehkan selama konsultasi adalah mengenai gizi dan
                kesehatan, selain itu konsultan berhak tidak menjawab atau
                mengakhiri sesi jika sudah melanggar privasi dan norma
                kesopanan.
              </p>
            </div>
          </div>
        </div>
        <div className="my-5 w-full">
          <MyButton
            content="Buat Janji"
            className="btn-purple block ml-auto w-60"
            onClick={handleOpenModal}
          />
        </div>
        <div className="w-full">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Berlangsung" {...a11yProps(0)} />
              <Tab label="Selesai" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {room ? (
              <Chat room={room} />
            ) : (
              <div className="flex flex-col justify-center items-center gap-4 pt-16">
                <input
                  type="text"
                  placeholder="Masukkan kode chat room di sini"
                  ref={inputRef}
                  className="input input-bordered w-full max-w-xs mx-auto"
                />
                <MyButton
                  content="Kirim"
                  className="btn-purple"
                  onClick={() => {
                    if (inputRef.current?.value) {
                      sessionStorage.setItem(
                        "chat-room",
                        inputRef.current.value
                      );
                      setRoom(inputRef.current.value);
                    }
                  }}
                />
              </div>
            )}
          </TabPanel>
          <TabPanel value={value} index={1}>
            History Konsultasi Online
          </TabPanel>
        </div>
        {openModal ? (
          <KonsultasiOnlineModal open={openModal} onClose={handleCloseModal} />
        ) : null}
      </div>
    </MainLayout>
  );
};

export default konsultasi;
