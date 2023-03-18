import Image from "next/image";
import React from "react";
import { RiLineLine } from "react-icons/ri";
import { FiInstagram, FiTwitter, FiPhone, FiMail } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="w-full bg-dark px-16 py-7">
      <div className="flex gap-4">
        <Image
          src="/images/undip.png"
          alt="Undip Logo"
          width={75}
          height={89}
        />
        <Image
          src="/images/acu-white.png"
          alt="ACU Logo"
          width={75}
          height={89}
        />
        <Image
          src="/images/acfk-white.png"
          alt="ACFK Logo"
          width={75}
          height={89}
        />
        <Image src="/images/hmig.png" alt="HMIG Logo" width={75} height={89} />
      </div>
      <div className="text-white">
        <p>Narahubung:</p>
        <div>
          <RiLineLine />
          <FiInstagram />
          <FiTwitter />
          <FiPhone />
          <FiMail />
        </div>
      </div>
      <div className="divider text-white"></div>
    </footer>
  );
};
