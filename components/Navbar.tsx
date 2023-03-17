import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-dark w-full flex items-center justify-between h-20 text-white px-16 py-3">
      <div className="flex items-center gap-3">
        <Image src="/vercel.svg" alt="logo" width={100} height={100} />
        {/* <img src={hmigLogo} alt="HMIG Logo" className="w-14" /> */}
        <p className="font-bold">Himpunan Mahasiswa Ilmu Gizi</p>
      </div>
      <div>
        {/* <Button content="Sign up" variant="ghost" /> */}
        {/* <Button content="Log in" variant="contain" /> */}
      </div>
    </nav>
  );
};
