import KerjasamaModal from "@/components/KerjasamaModal";
import MyButton from "@/components/MyButton";
import MainLayout from "@/components/layouts/MainLayout";
import { Avatar, Paper } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Receipt from "@/components/Receipt";

const dummyArr = new Array(10).fill("nama");

const companyProfile = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openPdf, setOpenPdf] = useState(false);

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

          <div className="flex justify-center">
            <button onClick={() => setOpenPdf(true)}>open pdf</button>
            {openPdf ? (
              <PDFViewer width={500} height={500}>
                <Receipt />
              </PDFViewer>
            ) : null}
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
              {dummyArr.map((d, idx) => (
                <Paper
                  className="w-32 md:w-48 xl:w-64 h-40 md:h-60 xl:h-80 flex flex-col items-center gap-2 md:gap-5 p-3 lg:p-9"
                  key={idx}
                >
                  <Avatar
                    src=""
                    alt=""
                    className="w-16 md:w-28 xl:w-44 h-16 md:h-28 xl:h-44"
                  />
                  <div className="text-center">
                    <h3 className="font-bold text-lg md:text-xl xl:text-2xl">
                      {d}
                    </h3>
                    <p className="text-base xl:text-lg">role</p>
                  </div>
                </Paper>
              ))}
            </div>
          </div>
          <div className="space-y-16 px-4 text-center mb-14">
            <h2 className="font-heading text-3xl xl:text-4xl text-dark">
              Program Kerja
            </h2>
            <div className="py-28">
              <div className="flex items-center gap-4">
                <Paper className="w-[534px] h-[310px] rounded-2xl">dsads</Paper>
                <div className="space-y-4">
                  <h3 className="text-dark font-bold text-4xl text-left">
                    OPEN RECRUITMENT & PELATIHAN 1
                  </h3>
                  <p className="max-w-3xl text-2xl text-justify">
                    Anggota GBM dalam kepengurusannya memiliki masa jabatan
                    selama 2 tahun sehingga diperlukan pergantian/pengaderan
                    pengurus untuk melanjutkan kegiatan GBM ke depannya. Para
                    anggota baru yang telah terpilih nantinya akan dibekali
                    dengan materi pengetahuan gizi serta tata cara konseling dan
                    penyuluhan agar siap terjun ke masyarakat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-16 px-4 text-center">
            <h2 className="font-heading text-3xl xl:text-4xl text-dark">
              Bentuk Kerjasama
            </h2>
            <MyButton
              content="Mulai Kerjasama"
              className="btn-light-green block mx-auto"
              onClick={handleOpenModal}
            />
          </div>
        </div>
        {openModal ? (
          <KerjasamaModal open={openModal} onClose={handleCloseModal} />
        ) : null}
      </div>
    </MainLayout>
  );
};

export default companyProfile;
