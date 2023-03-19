import Image from "next/image";
import React from "react";
import { Button } from "../components/Button";

const login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-2/3">
        <h1>Login</h1>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <a href="">Lupa Password?</a>
        <Button content="Masuk" variant="cream" />
      </div>
      <div className="relative w-1/3 h-full bg-gbm-green-dark flex items-center">
        <Image src="/images/bro.svg" alt="bro" fill />
      </div>
    </div>
  );
};

export default login;
