import Image from "next/image";
import React from "react";
import { Button } from "../../Button";

const Layanan = () => {
  let imgWidth = 540;
  let imgHeight = 454;

  return (
    <div className="px-16 py-12 space-y-12">
      <div className="flex justify-evenly items-center">
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
          <Button isLink path="/" content="Selengkapnya" variant="red" />
        </div>
      </div>
      <div className="flex flex-row-reverse justify-evenly items-center">
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
          <Button isLink path="/" content="Selengkapnya" variant="purple" />
        </div>
      </div>
      <div className="flex justify-evenly items-center">
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
          <Button
            isLink
            path="/"
            content="Selengkapnya"
            variant="light-green"
          />
        </div>
      </div>
    </div>
  );
};

export default Layanan;
