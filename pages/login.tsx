import Image from "next/image";
import React from "react";
import { Button } from "../components/Button";
import InputField from "../components/InputField";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  email: string;
  password: string;
}

const login = () => {
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
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
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
              onChange={(e) => console.log(e.target.value)}
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
            <Button content="Masuk" className="btn-cream" />
          </Form>
        </Formik>
        {/* <form
          action=""
          className="flex flex-col gap-8 w-full px-8 sm:px-0 sm:w-1/2"
        ></form> */}
      </div>
      <div className="relative w-1/3 h-full bg-gbm-green-dark hidden lg:flex items-center">
        <Image src="/images/bro.svg" alt="bro" fill />
      </div>
    </div>
  );
};

export default login;
