import React from "react";

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <img src={gmbLogo} className="max-w-sm rounded-lg" alt="" /> */}
        <div>
          <h1 className="text-5xl text-gbm-green font-bold font-heading">
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
