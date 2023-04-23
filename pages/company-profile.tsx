import MainLayout from "@/components/layouts/MainLayout";
import { Avatar, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const companyProfile = () => {
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
          <div className="space-y-16 px-4">
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-heading text-3xl xl:text-4xl text-center xl:text-left text-dark">
                Anggota Gizi Bakti Masyarakat 2022
              </h2>
              <p className="max-w-3xl text-center">
                Dalam keberjalanannya, GBM memiliki suatu perencanaan dan
                pengorganisasian untuk mencapai target yang sudah ditetapkan.
              </p>
            </div>
            <div>
              <Paper className="w-64 h-80 flex flex-col items-center gap-5 py-9 px-9">
                <Avatar src="" alt="" className="w-44 h-44" />
                <div className="text-center">
                  <h3 className="font-bold text-2xl">nama</h3>
                  <p className="text-lg">role</p>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default companyProfile;
