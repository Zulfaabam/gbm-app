import { Form, Formik, FormikHelpers } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "@/components/Button";
import InputField from "@/components/InputField";
import signUp from "@/firebase/auth/signup";
import { Values } from "./login";

const register = () => {
  const router = useRouter();

  const handleRegister = async (email: string, password: string) => {
    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/login");
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full lg:w-2/3 flex items-center justify-center">
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
          <Form className="flex flex-col gap-2 w-full px-8 sm:px-0 sm:w-1/2">
            <h1 className="font-heading text-4xl text-matcha">Register</h1>
            <InputField
              name="email"
              type="email"
              label="Email:"
              placeholder="example@email.com"
              className="border-matcha"
            />
            {/* <InputField
            type="text"
            label="Nama pengguna:"
            placeholder="Nama"
            className="border-matcha"
          /> */}
            {/* <InputField
            type="number"
            label="Nomor Handphone"
            placeholder="021020120"
            className="border-matcha"
          /> */}
            <InputField
              name="password"
              type="password"
              label="Password:"
              placeholder="****"
              className="border-matcha"
            />
            {/* <InputField
            type="password"
            label="Konfirmasi password:"
            placeholder="****"
            className="border-matcha"
          /> */}
            <Button type="submit" content="Daftar" className="btn-cream mt-4" />
          </Form>
        </Formik>
      </div>
      <div className="relative w-1/3 h-full bg-gbm-green-dark hidden lg:flex items-center">
        <Image src="/images/bro.svg" alt="bro" fill />
      </div>
    </div>
  );
};

export default register;
