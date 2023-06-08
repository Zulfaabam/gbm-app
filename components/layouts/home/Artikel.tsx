import { fetcher } from "@/common/utils/fetcher";
import ActionAreaCard from "@/components/ActionAreaCard";
import React from "react";
import useSWR from "swr";

export interface Article {
  id: string;
  data: ArticleData;
}
export interface ArticleData {
  desc: string;
  iconUrl: string;
  longDesc: string;
}

const Artikel = () => {
  const { data, error, isLoading } = useSWR<Article[], Error>(
    "/api/article",
    fetcher
  );

  return (
    <div className="py-7 w-full">
      <div className="max-w-8xl mx-auto space-y-6 pl-4 2xl:pl-0">
        <h2 className="font-heading text-gbm-green-light text-3xl md:text-4xl lg:text-5xl">
          Artikel
        </h2>
        <div className="carousel-scrollbar carousel-center w-full p-4 space-x-4 bg-cream rounded-lg">
          {data?.map((d, idx) => (
            <div className="carousel-item" key={d.id}>
              <ActionAreaCard
                img={d.data.iconUrl}
                title={d.data.desc}
                // desc={d.data.longDesc}
                className="w-[250px] md:w-[400px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artikel;
