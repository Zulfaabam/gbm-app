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
export interface Sewa {
  id: string;
  data: SewaData;
}
export interface SewaData {
  avail: boolean;
  desc: string;
  iconURL: string;
  longDesc: string;
  price: number;
  seqNo: number;
}

const sewa = () => {
  const user = useContext(AuthContext);

  const { data, error, isLoading } = useSWR<Sewa[], Error>(
    "/api/sewa",
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
      <div className="py-7 max-w-8xl mx-auto min-h-screen grid grid-cols-4 gap-4">
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
    </MainLayout>
  );
};

export default sewa;
