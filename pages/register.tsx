import Image from "next/image";
import React from "react";

const register = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-2/3">Register</div>
      <div className="relative w-1/3 h-full bg-gbm-green-dark flex items-center">
        <Image src="/images/bro.svg" alt="bro" fill />
      </div>
    </div>
  );
};

export default register;
