import React, { useContext } from "react";
import useSWR from "swr";
import { fetcher } from "common/utils/fetcher";
import { BarLoader } from "react-spinners";
import MainLayout from "components/layouts/MainLayout";
import Card from "components/Card";
import { AuthContext } from "context/AuthContext";
import Link from "next/link";
import { Button } from "@/components/Button";
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
      <div className="py-7 max-w-8xl mx-auto min-h-screen flex justify-center gap-4 flex-wrap">
        {data?.map((d) => (
          <Card
            key={d.id}
            img={d.data.iconURL}
            title={d.data.desc}
            desc={d.data.longDesc}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default preOrder;
