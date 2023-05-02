import RequiredLogin from "@/components/RequiredLogin";
import MainLayout from "@/components/layouts/MainLayout";
import { AuthContext } from "context/AuthContext";
import React, { useContext } from "react";

const konsultasi = () => {
  const user = useContext(AuthContext);

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
      </div>
    </MainLayout>
  );
};

export default konsultasi;
