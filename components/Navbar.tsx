import Image from "next/image";
import React from "react";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <nav className="bg-dark w-full flex items-center justify-between h-20 text-white px-16 py-3 font-sans">
      <div className="flex items-center gap-3">
        <Image src="/images/hmig.png" alt="HMIG logo" width={54} height={54} />
        <p className="font-bold">Himpunan Mahasiswa Ilmu Gizi</p>
      </div>
      <div className="flex gap-4">
        <Button content="Sign up" variant="ghost" />
        <Button content="Log in" variant="contain" />
      </div>
    </nav>
  );
};
