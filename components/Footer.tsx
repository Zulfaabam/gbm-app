import Image from "next/image";
import React from "react";
import { RiLineLine } from "react-icons/ri";
import { FiInstagram, FiTwitter, FiPhone, FiMail } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";

interface ContactProps {
  icon: React.ReactNode;
  link: string;
  content: string;
}

export const Footer = () => {
  let iconSize = 30;

  const Contact = ({ icon, link, content }: ContactProps) => (
    <div className="flex items-center gap-2">
      {icon}
      <a href={link} className="underline">
        {content}
      </a>
    </div>
  );

  // const contacts = [
  //   {
  //     icon: <RiLineLine size={iconSize} />,
  //     link: "",
  //     content: "@ntp5446u",
  //   },
  //   {
  //     icon: <FiInstagram size={iconSize} />,
  //     link: "",
  //     content: "@gbm_undip",
  //   },
  //   {
  //     icon: <FiTwitter size={iconSize} />,
  //     link: "",
  //     content: "@gbm_undip",
  //   },
  //   {
  //     icon: <FiPhone size={iconSize} />,
  //     link: "",
  //     content: "+62 838-3873-4981",
  //   },
  //   {
  //     icon: <FiMail size={iconSize} />,
  //     link: "",
  //     content: "gbmundip@gmail.com",
  //   },
  // ]

  return (
    <footer className="w-full flex justify-between bg-dark px-16 py-7">
      <div>
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
          <Image
            src="/images/hmig.png"
            alt="HMIG Logo"
            width={75}
            height={89}
          />
        </div>
        <div className="text-white mt-4 flex flex-col gap-2">
          <p>Narahubung:</p>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <Contact
                icon={<RiLineLine size={iconSize} />}
                link=""
                content="@ntp5446u"
              />
              <Contact
                icon={<FiInstagram size={iconSize} />}
                link=""
                content="@gbm_undip"
              />
              <Contact
                icon={<FiTwitter size={iconSize} />}
                link=""
                content="@gbm_undip"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Contact
                icon={<FiPhone size={iconSize} />}
                link=""
                content="+62 838-3873-4981"
              />
              <Contact
                icon={<FiMail size={iconSize} />}
                link=""
                content="gbmundip@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-3">
        <div className="flex items-center gap-2">
          <p className="text-white text-2xl font-heading">
            Gizi Bakti Masyarakat
          </p>
          <Image
            src="/images/gbm-logo.svg"
            alt="GBM logo"
            width={128}
            height={107}
          />
        </div>
        <p className="max-w-md text-right text-white">
          Gizi Bakti Masyarakat (GBM) dibentuk pada tanggal 21 Februari 2008
          dimana merupakan sebuah mandat dari ILMAGI (Ikatan Lembaga Mahasiswa
          Gizi Indonesia).
        </p>
        <div className="flex items-center gap-2 text-white">
          <TfiLocationPin size={iconSize} />
          <a href="" className="underline">
            Jalan Prof. H. Soedarto, S.H., Tembalang, Semarang, Jawa Tengah.
            50275
          </a>
        </div>
      </div>
    </footer>
  );
};
