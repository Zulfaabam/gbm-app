import { fetcher } from "@/common/utils/fetcher";
import Image from "next/image";
import React from "react";
import useSWR from "swr";

interface TestimoniCardProps {
  img: string;
  title: string;
  review: string;
  reviewer: string;
}

const TestimoniCard = ({
  img,
  title,
  review,
  reviewer,
}: TestimoniCardProps) => {
  return (
    <div className="bg-base-100 shadow-xl border rounded-lg py-16 px-14 flex items-center gap-16 max-w-6xl">
      <Image
        src={img || "/images/bro.svg"}
        alt={title}
        width={300}
        height={300}
        className="rounded-lg border"
      />
      <div className="flex flex-col gap-10">
        <h2 className="text-justify font-heading text-xl text-dark">{title}</h2>
        <p className="text-justify font-bold text-lg text-paragraph-gray">
          {review}
        </p>
        <p className="ml-auto font-heading text-dark">{reviewer}</p>
      </div>
    </div>
  );
};

interface TestimoniData {
  img: string;
  title: string;
  review: string;
  reviewer: string;
}

interface Testimoni {
  id: string;
  data: TestimoniData;
}

const Testimoni = () => {
  const { data, error, isLoading } = useSWR<Testimoni[], Error>(
    "/api/testimoni",
    fetcher
  );

  return (
    <div className="py-7 w-full">
      <div className="max-w-8xl mx-auto space-y-6 pl-4 2xl:pl-0">
        <h2 className="font-heading text-gbm-green-light text-3xl md:text-4xl lg:text-5xl">
          Testimoni
        </h2>
        <div className="bg-cream carousel-scrollbar carousel-center w-full p-4 space-x-4 rounded-lg">
          {data?.map((d, idx) => (
            <div className="carousel-item" key={idx}>
              <TestimoniCard
                title={d.data.title}
                img={d.data.img}
                review={`"${d.data.review}"`}
                reviewer={`-${d.data.reviewer}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
