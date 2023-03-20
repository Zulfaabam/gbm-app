import Image from "next/image";
import React from "react";
import { Button } from "../components/Button";
import InputField from "../components/InputField";

const login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-2/3 flex items-center justify-center">
        <form action="" className="flex flex-col gap-8 w-1/2">
          <h1 className="font-heading text-[40px] text-matcha">Login</h1>
          <InputField
            type="email"
            label="Email:"
            placeholder="example@email.com"
          />
          <InputField type="password" label="Password:" placeholder="****" />
          {/* <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div> */}
          {/* <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div> */}
          <a href="">Lupa Password?</a>
          <Button content="Masuk" variant="cream" />
        </form>
      </div>
      <div className="relative w-1/3 h-full bg-gbm-green-dark flex items-center">
        <Image src="/images/bro.svg" alt="bro" fill />
      </div>
    </div>
  );
};

export default login;
