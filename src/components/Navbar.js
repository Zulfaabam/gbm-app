import React from "react";
import hmigLogo from "../assets/hmig.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-dark w-full flex items-center justify-between h-20 text-white px-16 py-3">
      <div className="flex items-center gap-3">
        <img src={hmigLogo} alt="HMIG Logo" className="w-14" />
        <p className="font-bold">Himpunan Mahasiswa Ilmu Gizi</p>
      </div>
      <div>
        <Button content="Sign up" variant="ghost" />
        <Button content="Log in" variant="contain" />
      </div>
    </nav>
  );
};

export default Navbar;
