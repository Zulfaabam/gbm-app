import KerjasamaModal from "@/components/modals/KerjasamaModal";
import MyButton from "@/components/MyButton";
import MainLayout from "@/components/layouts/MainLayout";
import { Avatar, Paper } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Mou from "@/components/receipt/Mou";
import { fetcher } from "@/common/utils/fetcher";
import useSWR from "swr";

export interface Anggota {
  desc: string;
  iconURL: string;
  id: string;
  name: string;
  seqNo: number;
}
export interface Event {
  title: string;
  id: string;
  desc: string;
  imageUrl: string;
}

const companyProfile = () => {
  const [openModal, setOpenModal] = useState(false);

  const { data, error, isLoading } = useSWR<Anggota[], Error>(
    "/api/anggota",
    fetcher
  );

  const {
    data: event,
    error: eventError,
    isLoading: isEventLoading,
  } = useSWR<Event[], Error>("/api/event", fetcher);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <MainLayout>
      <div className="py-7 min-h-screen">
        <div className="max-w-8xl mx-auto">
          <div className="bg-cream rounded-t-lg p-4 xl:p-16 relative mb-10">
            <div className="flex flex-col-reverse xl:flex-row justify-between items-center">
              <div className="space-y-4">
                <h2 className="font-heading text-gbm-green-dark text-3xl md:text-4xl lg:text-5xl text-center xl:text-left">
                  Gizi Bakti Masyarakat
                </h2>
                <p className="text-base xl:text-lg max-w-2xl text-justify">
                  Gizi Bakti Masyarakat (GBM) dibentuk pada tanggal 21 Februari
                  2008 dan merupakan sebuah mandat dari ILMAGI (Ikatan Lembaga
                  Mahasiswa Gizi Indonesia). <br /> Gizi Bakti Masyarakat
                  Universitas Diponegoro merupakan biro yang bertanggung jawab
                  pada Himpunan Mahasiswa Ilmu Gizi (HMIG). GBM berada di berada
                  di bawah pembinaan Program Studi S-1 Gizi Fakultas Kedokteran
                  Universitas Diponegoro dan Dekan Fakultas Kedokteran
                  Universitas Diponegoro.
                </p>
              </div>
              <Image
                src="/images/gbm-logo.svg"
                alt="GBM Logo"
                width={418}
                height={341}
                priority
              />
            </div>
            <div className="flex justify-center gap-4 mt-14 mb-28">
              <div className="rounded-full w-10 aspect-square bg-dark"></div>
              <div className="rounded-full w-10 aspect-square bg-dark"></div>
              <div className="rounded-full w-10 aspect-square bg-dark"></div>
              <div className="rounded-full w-10 aspect-square bg-dark"></div>
              <div className="rounded-full w-10 aspect-square bg-dark"></div>
            </div>
            <div className="relative bg-dark rounded-lg flex gap-14 pt-9 pb-20 px-4 xl:px-28">
              <div className="absolute w-[242px] h-[300px] xl:w-[384px] xl:h-[411px] -top-20 left-1/2 -translate-x-1/2 xl:-translate-x-0 xl:left-16 2xl:left-24">
                <Image src="/images/compro-tujuan.png" alt="Tujuan" fill />
              </div>
              <div className="text-white pt-[200px] xl:pt-0 sm:mx-auto xl:mx-0 xl:ml-auto">
                <h2 className="font-heading text-center text-3xl xl:text-4xl mb-4 xl:mb-8">
                  Tujuan
                </h2>
                <div className="max-w-3xl xl:max-w-xl sm:mx-auto space-y-4 text-justify px-4 xl:px-0">
                  <p>GBM bertujuan untuk:</p>
                  <ol className="list-decimal list-outside">
                    <li>
                      Meningkatkan rasa kepedulian sosial mahasiswa S-1 Ilmu
                      Gizi FK Undip.
                    </li>
                    <li>
                      Menjadi wadah bagi mahasiswa Program Studi Ilmu Gizi FK
                      Undip untuk mengabdi pada masyarakat.
                    </li>
                    <li>
                      Membantu meningkatkan status gizi pada masyarakat melalui
                      cek kesehatan, penentuan status gizi, konseling, dan
                      penyuluhan yang mendalam dan menyeluruh kepada masyarakat
                      seputar ilmu gizi.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-12 mb-24 px-4">
            <div className="flex flex-col gap-4 items-center text-center">
              <h2 className="font-heading text-3xl xl:text-4xl text-dark">
                Visi
              </h2>
              <p className="max-w-[630px] bg-gbm-green text-base xl:text-lg py-3 px-12 text-white rounded-2xl">
                Gizi Bakti Masyarakat yang maju, mengabdi, menginspirasi untuk
                Universitas Diponegoro dan Indonesia
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center text-center">
              <h2 className="font-heading text-3xl xl:text-4xl text-dark">
                Misi
              </h2>
              <div className="flex flex-wrap gap-4 xl:gap-24 justify-center xl:justify-between">
                <p className="text-white bg-dark max-w-xs py-9 px-6 rounded-2xl">
                  Membangun rasa kekeluargaan internal Gizi Bakti Masyarakat
                  dengan sistem kerja profesional.
                </p>
                <p className="text-white bg-dark max-w-xs py-9 px-6 rounded-2xl">
                  Mengoptimalkan fungsi tiap bidang dengan prinsip sinergisme
                  positif dan kreatif.
                </p>
                <p className="text-white bg-dark max-w-xs py-9 px-6 rounded-2xl">
                  Membangun komunikasi efektif dan terbukti dengan mitra kerja
                  Gizi Bakti Masyarakat.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-16 px-4 mb-14">
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-heading text-3xl xl:text-4xl text-center xl:text-left text-dark">
                Anggota Gizi Bakti Masyarakat 2022
              </h2>
              <p className="max-w-3xl text-center">
                Dalam keberjalanannya, GBM memiliki suatu perencanaan dan
                pengorganisasian untuk mencapai target yang sudah ditetapkan.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {data
                ?.sort((a, b) => a.seqNo - b.seqNo)
                ?.map((item, idx) => (
                  <Paper
                    className="w-32 md:w-48 h-40 md:h-60 flex flex-col items-center gap-2 md:gap-5 px-1 py-3 md:p-9"
                    key={idx}
                  >
                    <div className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24">
                      <Avatar
                        src={item.iconURL}
                        alt={item.name}
                        sx={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-sm md:text-base">
                        {item.name}
                      </h3>
                      <p className="text-xs md:text-sm">{item.desc}</p>
                    </div>
                  </Paper>
                ))}
            </div>
          </div>
          <div id="event-gbm" className="space-y-8 px-4 text-center mb-16">
            <h2 className="font-heading text-3xl xl:text-4xl text-dark">
              Program Kerja
            </h2>
            <div className="carousel-scrollbar carousel-center w-full p-4 space-x-4 bg-cream rounded-lg">
              {event?.map((d, idx) => (
                <div className="carousel-item" key={idx}>
                  <div className="bg-base-100 shadow-xl border rounded-lg py-4 md:py-16 px-2 md:px-14 flex flex-col md:flex-row items-center gap-2 md:gap-8 max-w-xs md:max-w-6xl">
                    <img
                      src={d.imageUrl || "/images/bro.svg"}
                      alt={d.title}
                      className="rounded-lg border w-[200px] md:w-[300px] aspect-video object-cover"
                    />
                    <div className="flex flex-col items-center md:items-start gap-2 md:gap-10 md:max-w-lg">
                      <h2 className="text-justify font-heading text-base md:text-xl text-dark">
                        {d.title}
                      </h2>
                      <p className="text-justify font-bold text-xs md:text-sm lg:text-lg text-paragraph-gray">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="event-partnership" className="space-y-8 px-4 text-center">
            <h2 className="font-heading text-3xl xl:text-4xl text-dark">
              Bentuk Kerjasama
            </h2>
            <div className="carousel-scrollbar carousel-center w-full p-4 space-x-4 bg-cream rounded-lg">
              <div className="carousel-item">
                <div className="bg-base-100 shadow-xl border rounded-lg py-4 md:py-16 px-2 md:px-14 flex flex-col md:flex-row items-center gap-2 md:gap-8 max-w-xs md:max-w-6xl">
                  <img
                    src="/images/bro.svg"
                    alt="paretnership"
                    className="rounded-lg border w-[200px] md:w-[300px] aspect-video object-cover"
                  />
                  <div className="flex flex-col items-center md:items-start gap-2 md:gap-10 md:max-w-lg">
                    <h2 className="text-justify font-heading text-base md:text-xl text-dark">
                      PENYULUHAN
                    </h2>
                    <p className="text-justify font-bold text-xs md:text-sm lg:text-lg text-paragraph-gray">
                      Kegiatan menyampaikan materi seputar Gizi dan Kesehatan
                      sesuai dengan kompetensi yang dimiliki oleh anggota GBM,
                      dibantu dengan beberapa jenis media yang menarik dan
                      praktis seperti PPT, leaflet, ataupun booklet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <MyButton
              content="Mulai Kerjasama"
              className="btn-light-green block mx-auto"
              onClick={handleOpenModal}
            />
          </div>
        </div>
        {openModal ? (
          <KerjasamaModal open={openModal} onClose={handleCloseModal} />
        ) : // <PDFViewer width={600} height={600}>
        //   <Mou />
        // </PDFViewer>
        null}
      </div>
    </MainLayout>
  );
};

export default companyProfile;
