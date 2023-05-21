import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "common/utils/fetcher";
import { BarLoader } from "react-spinners";
import MainLayout from "components/layouts/MainLayout";
import ActionAreaCard from "components/ActionAreaCard";
import { AuthContext } from "context/AuthContext";
import RequiredLogin from "@/components/RequiredLogin";
import MyButton from "@/components/MyButton";
import SewaModal from "@/components/modals/SewaModal";
import ErrorPage from "@/components/ErrorPage";
import { numberFormatter } from "@/common/utils/formatter";
export interface Sewa {
  id: string;
  data: SewaData;
}
export interface SewaData {
  desc: string;
  iconURL: string;
  price: number;
  stock: number;
}

const sewa = () => {
  const user = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);

  const { data, error, isLoading } = useSWR<Sewa[], Error>(
    "/api/sewa",
    fetcher
  );

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  if (user == null)
    return (
      <MainLayout>
        <div className="py-7 max-w-8xl min-h-screen mx-auto flex flex-col justify-center items-center">
          <RequiredLogin />
        </div>
      </MainLayout>
    );

  if (error)
    return (
      <MainLayout>
        <div className="py-7 max-w-8xl min-h-screen mx-auto flex flex-col justify-center items-center">
          <ErrorPage />
        </div>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className="py-7 max-w-8xl mx-auto min-h-screen">
        <div className="mb-5">
          <div className="h-5 w-full bg-maroon rounded-t-lg"></div>
          <div className="bg-cream space-y-4 pb-5 pt-8 px-4 lg:px-0">
            <h1 className="font-heading text-xl lg:text-3xl xl:text-5xl text-center">
              Sewa Alat Kesehatan GBM UNDIP
            </h1>
            <div className="text-sm lg:text-xl max-w-[970px] mx-auto font-medium text-center space-y-4">
              <p>Halo! Selamat datang di sewa alat kesehatan oleh GBM Undip</p>
              <p>
                Penyewaan adalah proses, cara, pembuatan menyewa atau
                menyewakan. Yang dimaksud dengan sewa, yaitu balas jasa atas
                sewa ruang ruangan dalam keadaan kosong yang dapat ditagih
                dimuka (pada awal pemakaian mobil) atau dibelakang, sesuai
                dengan kontrak (perjanjian).
              </p>
              <p>
                Gizi Bakti Masyarakat memfasilitasi teman-teman yang mau mencari
                alat kesehatan dengan mudah dan terpercaya.
              </p>
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="py-7 max-w-8xl min-h-screen mx-auto flex justify-center items-center">
            <BarLoader />
          </div>
        ) : (
          <>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {data?.map((d) => (
                  <ActionAreaCard
                    key={d.id}
                    maxWidth={250}
                    img={d.data.iconURL}
                    title={d.data.desc}
                    desc={`Rp. ${numberFormatter.format(
                      d.data.price
                    )} | Stok: ${d.data.stock}`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-5 w-full">
              <MyButton
                content="Pesan"
                className="btn-purple block mx-auto 2xl:mx-0 2xl:ml-auto w-60"
                onClick={handleOpenModal}
              />
            </div>
          </>
        )}
        {openModal ? (
          <SewaModal open={openModal} onClose={handleCloseModal} items={data} />
        ) : null}
      </div>
    </MainLayout>
  );
};

export default sewa;
