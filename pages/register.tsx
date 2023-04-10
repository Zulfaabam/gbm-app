import { Form, Formik, FormikHelpers } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "components/Button";
import InputField from "components/InputField";
import signUp from "@/firebase/auth/signup";
import { Values } from "./login";
import Link from "next/link";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";

const register = () => {
  const router = useRouter();

  const [passwordType, setPasswordType] = useState("password");

  async function handleRegister(email: string, password: string) {
    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push("/login");
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
            handleRegister(values.email, values.password);
            console.log(values);
            setSubmitting(false);
          }}
        >
          <Form className="flex flex-col gap-8 w-full px-8 sm:px-0 sm:w-1/2">
            <Link href="/" className="flex items-center gap-2 self-start">
              <BsArrowLeft size="1.25rem" /> Beranda
            </Link>
            <h1 className="font-heading text-4xl text-matcha">Register</h1>
            <InputField
              name="email"
              type="email"
              label="Email:"
              placeholder="example@email.com"
              className="border-matcha"
            />
            <div className="relative">
              <InputField
                name="password"
                type={passwordType}
                label="Password:"
                placeholder="******"
                className="border-matcha"
              />
              <Button
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
            <Button type="submit" content="Daftar" className="btn-cream mt-4" />
          </Form>
        </Formik>
        <p className="font-medium mt-12">
          Anda sudah memiliki akun?{" "}
          <Link href="/login" className="font-semibold underline">
            Masuk
          </Link>
        </p>
      </div>
      <div className="relative w-1/3 h-full bg-gbm-green-dark hidden lg:flex items-center">
        <Image src="/images/bro.svg" alt="bro" fill />
      </div>
    </div>
  );
};

export default register;
