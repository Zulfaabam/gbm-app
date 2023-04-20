import React, { useContext } from "react";
import useSWR from "swr";
import { fetcher } from "common/utils/fetcher";
import { BarLoader } from "react-spinners";
import MainLayout from "components/layouts/MainLayout";
import ActionAreaCard from "components/ActionAreaCard";
import { AuthContext } from "context/AuthContext";
import RequiredLogin from "@/components/RequiredLogin";
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

  if (error) return <div>failed to load</div>;

  if (user == null)
    return (
      <MainLayout>
        <div className="py-7 max-w-8xl min-h-screen mx-auto flex flex-col justify-center items-center gap-4 flex-wrap">
          <RequiredLogin />
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
          <div className="bg-cream space-y-4 pb-5 pt-8">
            <h1 className="font-heading text-5xl text-center">
              Sewa Alat Kesehatan GBM UNDIP
            </h1>
            <div className="text-xl max-w-[970px] mx-auto font-medium text-center space-y-4">
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
        <div className="flex justify-center">
          <div className="grid grid-cols-5 gap-4">
            {data?.map((d) => (
              <ActionAreaCard
                key={d.id}
                maxWidth={250}
                img={d.data.iconURL}
                title={d.data.desc}
                desc={d.data.longDesc}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default sewa;
