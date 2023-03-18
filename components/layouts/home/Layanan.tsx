import Image from "next/image";
import React from "react";
import { Button } from "../../Button";

const Layanan = () => {
  let imgWidth = 540;
  let imgHeight = 454;

  return (
    <div className="px-16 py-7">
      <div className="flex justify-center gap-11">
        <Image
          src="/images/urokodaki.png"
          alt=""
          width={imgWidth}
          height={imgHeight}
          className="rounded-tl-[200px] rounded-br-[200px]"
        />
        <div>
          <h3>layanan gbm</h3>
          <h2 className="font-heading text-maroon">Pre-order Alat Kesehatan</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Egestas lorem semper ac
            tristique imperdiet sodales amet donec. Orci tellus et auctor
            adipiscing ultrices integer id. Enim diam.
          </p>
          <Button isLink path="/" content="Selengkapnya" variant="red" />
        </div>
      </div>
    </div>
  );
};

export default Layanan;
