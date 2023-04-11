import React, { useContext } from "react";
import useSWR from "swr";
import { fetcher } from "common/utils/fetcher";
import { BarLoader } from "react-spinners";
import MainLayout from "components/layouts/MainLayout";
import ActionAreaCard from "components/ActionAreaCard";
import { AuthContext } from "context/AuthContext";
import Link from "next/link";
import { Button } from "components/Button";
import { Typography } from "@mui/material";
export interface PreOrder {
  id: string;
  data: PreOrderData;
}
export interface PreOrderData {
  desc: string;
  iconURL: string;
  longDesc: string;
  price: number;
  seqNo: number;
}

const preOrder = () => {
  const user = useContext(AuthContext);

  const { data, error, isLoading } = useSWR<PreOrder[], Error>(
    "/api/pre-order",
    fetcher
  );

  console.log(data);

  if (error) return <div>failed to load</div>;

  if (user == null)
    return (
      <MainLayout>
        <div className="py-7 max-w-8xl min-h-screen mx-auto flex flex-col justify-center items-center gap-4 flex-wrap">
          <Typography className="font-bold">
            Oops... Anda harus Log In terlebih dahulu untuk mengakses halaman
            ini
          </Typography>
          <Link href="/login">
            <Button content="Log In" className="btn-light-green" />
          </Link>
        </div>
      </MainLayout>
    );

  if (isLoading)
    return (
      <MainLayout>
        <div className="py-7 max-w-8xl min-h-screen mx-auto flex justify-center items-center gap-4 flex-wrap">
          <BarLoader />
        </div>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className="py-7 max-w-8xl mx-auto min-h-screen">
        <div className="mb-5">
          <div className="h-5 w-full bg-maroon rounded-t-lg"></div>
          <div className="bg-cream space-y-3 pb-5 pt-8">
            <h1 className="font-heading text-5xl text-center">
              Pre-Order Alat Kesehatan GBM UNDIP
            </h1>
            <p className="text-xl max-w-[970px] mx-auto font-medium text-justify">
              Halo! Selamat datang di Pre-Order kesehatan oleh GBM Undip 2023
              Produk Pre-order adalah produk yang memiliki masa pengemasan yang
              lebih lama, yaitu tujuh hari atau lebih. Produk Pre-order umumnya
              adalah produk custom atau produk yang membutuhkan penanganan
              khusus. Masa pengemasan untuk produk Pre-order adalah 7-30 hari
              kerja. Gizi Bakti Masyarakat memfasilitasi teman-teman yang mau
              mencari alat kesehatan dengan mudah dan terpercaya.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {data?.map((d) => (
            <ActionAreaCard
              key={d.id}
              maxWidth={300}
              img={d.data.iconURL}
              title={d.data.desc}
              desc={d.data.longDesc}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default preOrder;
