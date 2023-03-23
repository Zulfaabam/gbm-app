import Image from "next/image";
import React from "react";
import { Button } from "../components/Button";
import InputField from "../components/InputField";

const register = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-2/3 flex items-center justify-center">
        <form action="" className="flex flex-col gap-2 w-1/2">
          <h1 className="font-heading text-4xl text-matcha">Register</h1>
          <InputField
            type="email"
            label="Email:"
            placeholder="example@email.com"
            className="border-matcha"
          />
          <InputField
            type="text"
            label="Nama pengguna:"
            placeholder="Nama"
            className="border-matcha"
          />
          <InputField
            type="number"
            label="Nomor Handphone"
            placeholder="021020120"
            className="border-matcha"
          />
          <InputField
            type="password"
            label="Password:"
            placeholder="****"
            className="border-matcha"
          />
          <InputField
            type="password"
            label="Konfirmasi password:"
            placeholder="****"
            className="border-matcha"
          />
          <Button content="Daftar" className="btn-cream" />
        </form>
      </div>
      <div className="relative w-1/3 h-full bg-gbm-green-dark flex items-center">
        <Image src="/images/bro.svg" alt="bro" fill />
      </div>
    </div>
  );
};

export default register;
