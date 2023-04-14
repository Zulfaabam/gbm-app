import Image from "next/image";
import Link from "next/link";
import React from "react";
import MyButton from "../../MyButton";

const Layanan = () => {
  let imgWidth = 540;
  let imgHeight = 454;

  return (
    <div className="py-12 w-full">
      <div className="max-w-8xl mx-auto space-y-12">
        <div className="flex justify-between items-center">
          <div className="relative hidden xl:block w-[600px] h-[490px]">
            <Image
              src="/images/rect-1.png"
              alt=""
              width={imgWidth}
              height={imgHeight}
              className="absolute top-0 right-0 rounded-tl-[200px] rounded-br-[200px]"
            />
            <div className="absolute bottom-0 left-0 -z-10 rounded-br-[200px] xl:w-[540px] xl:h-[418px] bg-maroon"></div>
          </div>
          <div className="flex flex-col items-start max-w-2xl px-4 lg:px-12 xl:px-24">
            <h3 className="text-paragraph-dark font-semibold mb-4">
              Layanan gbm
            </h3>
            <h2 className="font-heading text-maroon text-5xl mb-6">
              Pre-order Alat Kesehatan
            </h2>
            <p className="text-paragraph-gray text-lg mb-14">
              Lorem ipsum dolor sit amet consectetur. Egestas lorem semper ac
              tristique imperdiet sodales amet donec. Orci tellus et auctor
              adipiscing ultrices integer id. Enim diam.
            </p>
            <Link href="/pre-order">
              <MyButton content="Selengkapnya" className="btn-maroon" />
            </Link>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between items-center">
          <div className="relative hidden xl:block w-[600px] h-[490px]">
            <Image
              src="/images/rect-1.png"
              alt=""
              width={imgWidth}
              height={imgHeight}
              className="absolute bottom-0 left-0 rounded-tr-[200px] rounded-bl-[200px]"
            />
            <div className="absolute top-0 right-0 -z-10 rounded-tl-[200px] xl:w-[540px] xl:h-[418px] bg-gbm-purple"></div>
          </div>
          <div className="flex flex-col items-start max-w-2xl px-4 lg:px-12 xl:px-24">
            <h3 className="text-paragraph-dark font-semibold mb-4">
              Layanan gbm
            </h3>
            <h2 className="font-heading text-gbm-purple text-5xl mb-6">
              Sewa Alat Kesehatan
            </h2>
            <p className="text-paragraph-gray text-lg mb-14">
              Lorem ipsum dolor sit amet consectetur. Egestas lorem semper ac
              tristique imperdiet sodales amet donec. Orci tellus et auctor
              adipiscing ultrices integer id. Enim diam.
            </p>
            <Link href="/sewa">
              <MyButton content="Selengkapnya" className="btn-purple" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="relative hidden xl:block w-[600px] h-[490px]">
            <Image
              src="/images/rect-1.png"
              alt=""
              width={imgWidth}
              height={imgHeight}
              className="absolute top-0 right-0 rounded-tl-[200px] rounded-br-[200px]"
            />
            <div className="absolute bottom-0 left-0 -z-10 rounded-br-[200px] xl:w-[540px] xl:h-[418px] bg-gbm-green-light"></div>
          </div>
          <div className="flex flex-col items-start max-w-2xl px-4 lg:px-12 xl:px-24">
            <h3 className="text-paragraph-dark font-semibold mb-4">
              Layanan gbm
            </h3>
            <h2 className="font-heading text-gbm-green-light text-5xl mb-6">
              Konsultasi Online Gizi dan Kesehatan
            </h2>
            <p className="text-paragraph-gray text-lg mb-14">
              Lorem ipsum dolor sit amet consectetur. Egestas lorem semper ac
              tristique imperdiet sodales amet donec. Orci tellus et auctor
              adipiscing ultrices integer id. Enim diam.
            </p>
            <Link href="/konsultasi">
              <MyButton content="Selengkapnya" className="btn-light-green" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
