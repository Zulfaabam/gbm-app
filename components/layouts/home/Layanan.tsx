import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../../Button";

const Layanan = () => {
  let imgWidth = 540;
  let imgHeight = 454;

  return (
    <div className="py-12 w-full">
      <div className="max-w-8xl mx-auto space-y-12">
        <div className="flex justify-between items-center">
          <Image
            src="/images/rect-1.png"
            alt=""
            width={imgWidth}
            height={imgHeight}
            className="rounded-tl-[200px] rounded-br-[200px]"
          />
          <div className="flex flex-col items-start max-w-2xl px-24">
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
              <Button content="Selengkapnya" className="btn-maroon" />
            </Link>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between items-center">
          <Image
            src="/images/rect-1.png"
            alt=""
            width={imgWidth}
            height={imgHeight}
            className="rounded-tl-[200px] rounded-br-[200px]"
          />
          <div className="flex flex-col items-start max-w-2xl px-24">
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
              <Button content="Selengkapnya" className="btn-purple" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Image
            src="/images/rect-1.png"
            alt=""
            width={imgWidth}
            height={imgHeight}
            className="rounded-tl-[200px] rounded-br-[200px]"
          />
          <div className="flex flex-col items-start max-w-2xl px-24">
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
              <Button content="Selengkapnya" className="btn-light-green" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
