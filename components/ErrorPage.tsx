import { Typography } from "@mui/material";
import React from "react";
import MyButton from "./MyButton";
import Image from "next/image";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image
        src="/images/gbm-logo.svg"
        alt="GBM Logo"
        width={124}
        height={109}
      />
      <Typography className="font-bold text-xl md:text-2xl font-sans">
        MAAF!
      </Typography>
      <Typography className="mb-5 font-sans font-medium text-sm md:text-base text-center">
        Terjadi kesalahan saat mengakses halaman ini
      </Typography>
      <div className="flex gap-4">
        <MyButton
          content="Reload"
          className="btn-light-green w-32 md:w-40"
          onClick={() => location.reload()}
        />
        <Link href="/">
          <MyButton
            content="Kembali ke beranda"
            className="btn-light-green w-32 md:w-40"
          />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
