import Image from "next/image";
import React, { useState } from "react";
import MyButton from "@/components/MyButton";
import FormikInputField from "@/components/FormikInputField";
import { Formik, Form, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { signIn, signInWithGoogle } from "@/firebase/auth/signin";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import ForgetPasswordModal from "@/components/modals/ForgetPasswordModal";
import { useSnackbar } from "notistack";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export interface Values {
  email: string;
  password: string;
}

const login = () => {
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const [passwordType, setPasswordType] = useState("password");
  const [forgetPassword, setForgetPassword] = useState(false);

  async function handleLogin(email: string, password: string) {
    const { result, error } = await signIn(email, password);

    if (error) {
      return enqueueSnackbar(
        error instanceof Error ? error.toString() : "Login gagal!",
        { variant: "error" }
      );
    }

    cookies.set("auth-token", result?.user.refreshToken);

    enqueueSnackbar("Login berhasil!", { variant: "success" });
    return router.push("/");
  }

  async function handleLoginWithGoogle() {
    const { result, error } = await signInWithGoogle();

    if (error) {
      return enqueueSnackbar(
        error instanceof Error ? error.toString() : "Login gagal!",
        { variant: "error" }
      );
    }

    cookies.set("auth-token", result?.user.refreshToken);

    enqueueSnackbar("Login berhasil!", { variant: "success" });
    return router.push("/");
  }

  function handleShowPassword(event: React.FormEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  }

  return (
    <div className="flex w-full h-screen">
      <div className="w-full lg:w-2/3 flex flex-col items-center justify-center">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            handleLogin(values.email, values.password);
            setSubmitting(false);
          }}
        >
          <Form className="flex flex-col gap-8 w-full px-8 sm:px-0 sm:w-1/2">
            <Link href="/" className="flex items-center gap-2 self-start">
              <BsArrowLeft size="1.25rem" /> Beranda
            </Link>
            <h1 className="font-heading text-4xl text-matcha">Login</h1>
            <FormikInputField
              name="email"
              type="email"
              label="Email:"
              placeholder="example@email.com"
              className="border-matcha"
            />
            <div className="relative">
              <FormikInputField
                name="password"
                type={passwordType}
                label="Kata sandi:"
                placeholder="******"
                className="border-matcha"
              />
              <MyButton
                content={
                  passwordType === "password" ? (
                    <RiEyeCloseLine size="24px" />
                  ) : (
                    <RiEyeLine size="24px" />
                  )
                }
                className="absolute top-[50px] right-[15px]"
                onClick={(e) => handleShowPassword(e)}
              />
            </div>
            <MyButton
              content="Lupa Password?"
              className="underline w-max"
              onClick={(e) => {
                e.preventDefault();
                setForgetPassword(true);
              }}
            />
            <MyButton type="submit" content="Masuk" className="btn-cream" />
          </Form>
        </Formik>
        <p className="mt-12 mb-3 font-medium">atau masuk melalui</p>
        <MyButton
          content={<FcGoogle size="40px" />}
          className="border rounded-lg px-4 py-1 mb-6"
          onClick={handleLoginWithGoogle}
        />
        <p className="font-medium">
          Anda belum memiliki akun?{" "}
          <Link href="/register" className="font-semibold underline">
            Buat akun
          </Link>
        </p>
      </div>
      <div className="relative w-1/3 h-full bg-gbm-green-dark hidden lg:flex items-center">
        <Image src="/images/bro.svg" alt="bro" fill />
      </div>
      {forgetPassword ? (
        <ForgetPasswordModal
          open={forgetPassword}
          onClose={() => setForgetPassword(false)}
        />
      ) : null}
    </div>
  );
};

export default login;
