import Image from "next/image";
import React from "react";
import { Button } from "@/components/Button";
import InputField from "@/components/InputField";
import { Formik, Form, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import signIn from "@/firebase/auth/signin";

export interface Values {
  email: string;
  password: string;
}

const login = () => {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    // event.preventDefault()

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/");
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
            handleLogin(values.email, values.password);
            setSubmitting(false);
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 500);
          }}
        >
          <Form className="flex flex-col gap-8 w-full px-8 sm:px-0 sm:w-1/2">
            <h1 className="font-heading text-4xl text-matcha">Login</h1>
            <InputField
              name="email"
              type="email"
              label="Email:"
              placeholder="example@email.com"
              className="border-matcha"
            />
            <InputField
              name="password"
              type="password"
              label="Kata sandi:"
              placeholder="****"
              className="border-matcha"
            />
            <a href="" className="underline">
              Lupa Password?
            </a>
            <Button type="submit" content="Masuk" className="btn-cream" />
          </Form>
        </Formik>
      </div>
      <div className="relative w-1/3 h-full bg-gbm-green-dark hidden lg:flex items-center">
        <Image src="/images/bro.svg" alt="bro" fill />
      </div>
    </div>
  );
};

export default login;
