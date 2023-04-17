import MainLayout from "@/components/layouts/MainLayout";
import Image from "next/image";
import React from "react";

const companyProfile = () => {
  return (
    <MainLayout>
      <div className="py-7 min-h-screen">
        <div className="bg-cream rounded-t-lg max-w-8xl mx-auto p-16">
          <div className="flex justify-between items-center">
            <div className="space-y-4">
              <h2 className="font-heading text-gbm-green-dark text-5xl">
                Gizi Bakti Masyarakat
              </h2>
              <p className="text-lg max-w-2xl text-justify">
                Gizi Bakti Masyarakat (GBM) dibentuk pada tanggal 21 Februari
                2008 dan merupakan sebuah mandat dari ILMAGI (Ikatan Lembaga
                Mahasiswa Gizi Indonesia). <br /> Gizi Bakti Masyarakat
                Universitas Diponegoro merupakan biro yang bertanggung jawab
                pada Himpunan Mahasiswa Ilmu Gizi (HMIG). GBM berada di berada
                di bawah pembinaan Program Studi S-1 Gizi Fakultas Kedokteran
                Universitas Diponegoro dan Dekan Fakultas Kedokteran Universitas
                Diponegoro.
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
            <div className="rounded-full w-10 h-10 bg-dark"></div>
            <div className="rounded-full w-10 h-10 bg-dark"></div>
            <div className="rounded-full w-10 h-10 bg-dark"></div>
            <div className="rounded-full w-10 h-10 bg-dark"></div>
            <div className="rounded-full w-10 h-10 bg-dark"></div>
          </div>
          <div className="relative bg-dark rounded-lg flex gap-14 pt-9 pb-20 px-28">
            <Image
              src="/images/compro-tujuan.png"
              alt="Tujuan"
              width={384}
              height={412}
              className="absolute -top-20 left-24"
            />
            <div className="text-white ml-auto">
              <h2 className="font-heading text-center text-4xl mb-8">Tujuan</h2>
              <div className="max-w-xl mx-auto space-y-4">
                <p>GBM bertujuan untuk:</p>
                <ol className="list-decimal list-outside">
                  <li>
                    Meningkatkan rasa kepedulian sosial mahasiswa S-1 Ilmu Gizi
                    FK Undip.
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
      </div>
    </MainLayout>
  );
};

export default companyProfile;
