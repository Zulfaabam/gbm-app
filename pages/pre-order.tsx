import React from "react";
import useSWR from "swr";
import { fetcher } from "@/common/utils/fetcher";
import { BarLoader } from "react-spinners";
import MainLayout from "@/components/layouts/MainLayout";

const preOrder = () => {
  const { data, error, isLoading } = useSWR<any[], Error>(
    "/api/pre-order",
    fetcher
  );

  if (error) return <div>failed to load</div>;

  if (isLoading)
    return (
      <MainLayout>
        <BarLoader />
      </MainLayout>
    );

  console.log(data);

  return (
    <MainLayout>
      {data?.map((d) => (
        <p key={d.id}>{d.data.desc}</p>
      ))}
    </MainLayout>
  );
};

export default preOrder;
