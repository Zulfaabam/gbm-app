import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Button } from "./Button";
import Image from "next/image";

const RequiredLogin = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image
        src="/images/gbm-logo.svg"
        alt="GBM Logo"
        width={124}
        height={109}
      />
      <Typography className="font-bold text-2xl font-sans">MAAF!</Typography>
      <Typography className="mb-5 font-sans font-medium">
        Untuk langkah selanjutnya harap login atau lengkapi data terlebih dahulu
      </Typography>
      <Link href="/login">
        <Button content="Log In" className="btn-light-green w-40" />
      </Link>
    </div>
  );
};

export default RequiredLogin;
