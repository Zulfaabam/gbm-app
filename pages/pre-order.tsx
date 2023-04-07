import React, { useContext } from "react";
import useSWR from "swr";
import { fetcher } from "common/utils/fetcher";
import { BarLoader } from "react-spinners";
import MainLayout from "components/layouts/MainLayout";
import Card from "components/Card";
import { AuthContext } from "context/AuthContext";

const preOrder = () => {
  const user = useContext(AuthContext);

  const { data, error, isLoading } = useSWR<any[], Error>(
    "/api/pre-order",
    fetcher
  );

  if (error) return <div>failed to load</div>;

  if (isLoading)
    return (
      <MainLayout>
        <div className="py-7 max-w-8xl min-h-screen mx-auto flex justify-center items-center gap-4 flex-wrap">
          <BarLoader />
        </div>
      </MainLayout>
    );

  console.log(data);
  console.log("user", user);

  return (
    <MainLayout>
      <div className="py-7 max-w-8xl mx-auto flex justify-center gap-4 flex-wrap">
        {data?.map((d) => (
          <Card
            key={d.id}
            img={d.data.iconURL}
            title={d.data.desc}
            desc={d.data.longdesc}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default preOrder;
