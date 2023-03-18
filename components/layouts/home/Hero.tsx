import Image from "next/image";
import React from "react";
import { Button } from "../../Button";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-cream via-gbm-green-light to-gbm-green-dark">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex justify-center bg-[url('/images/blob-hero.svg')] bg-contain bg-center bg-no-repeat w-full">
          <Image
            src="/images/gbm-logo.svg"
            alt="GBM Logo"
            width={542}
            height={454}
            priority
          />
        </div>
        <div>
          <h1 className="text-5xl text-gbm-green-dark font-bold font-heading">
            Gizi Bakti Masyarakat
          </h1>
          <p className="py-6 font-semibold pr-40">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button isLink path="/" content="Selengkapnya" variant="green" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
