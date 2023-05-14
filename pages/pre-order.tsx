import React, { useContext, useState } from "react";
import useSWR from "swr";
import { fetcher } from "common/utils/fetcher";
import { BarLoader } from "react-spinners";
import MainLayout from "components/layouts/MainLayout";
import ActionAreaCard from "components/ActionAreaCard";
import { AuthContext } from "context/AuthContext";
import RequiredLogin from "@/components/RequiredLogin";
import { numberFormatter } from "@/common/utils/formatter";
import MyButton from "@/components/MyButton";
import PreOrderModal from "@/components/modals/PreOrderModal";
import ErrorPage from "@/components/ErrorPage";
export interface PreOrder {
  id: string;
  data: PreOrderData;
}
export interface PreOrderData {
  desc: string;
  iconURL: string;
  price: number;
}

const preOrder = () => {
  const user = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);

  const { data, error, isLoading } = useSWR<PreOrder[], Error>(
    "/api/pre-order",
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
              Pre-Order Alat Kesehatan GBM UNDIP
            </h1>
            <div className="text-sm lg:text-xl max-w-[970px] mx-auto font-medium text-center space-y-4">
              <p>
                Halo! Selamat datang di Pre-Order alat kesehatan oleh GBM Undip
              </p>
              <p>
                Produk Pre-order adalah produk yang memiliki masa pengemasan
                yang lebih lama, yaitu tujuh hari atau lebih. Produk Pre-order
                umumnya adalah produk custom atau produk yang membutuhkan
                penanganan khusus. Masa pengemasan untuk produk Pre-order adalah
                7-30 hari kerja.
              </p>
              <p>
                Gizi Bakti Masyarakat memfasilitasi teman-teman yang mau mencari
                alat kesehatan dengan mudah dan terpercaya.
              </p>
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center">
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
                    desc={`Rp. ${numberFormatter.format(d.data.price)}`}
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
          <PreOrderModal
            open={openModal}
            onClose={handleCloseModal}
            items={data}
          />
        ) : null}
      </div>
    </MainLayout>
  );
};

export default preOrder;
