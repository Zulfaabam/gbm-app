import Image from "next/image";
import Link from "next/link";
import React from "react";
import MyButton from "../../MyButton";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-cream from-40 via-gbm-green-lighter via-60 to-gbm-green-dark to-90">
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
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-gbm-green-dark font-bold font-heading">
            Gizi Bakti Masyarakat
          </h1>
          <p className="py-6 font-semibold md:px-12 lg:pl-0 lg:pr-40">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link href="/company-profile">
            <MyButton content="Selengkapnya" className="btn-dark-green" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
