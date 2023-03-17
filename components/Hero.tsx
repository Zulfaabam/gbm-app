import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-cream via-gbm-green-light to-gbm-green-dark">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/images/gbm-logo.png"
          alt="GBM Logo"
          width={542}
          height={454}
        />
        <div>
          <h1 className="text-5xl text-gbm-green-dark font-bold font-heading">
            Gizi Bakti Masyarakat
          </h1>
          <p className="py-6 font-semibold pr-40">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};
