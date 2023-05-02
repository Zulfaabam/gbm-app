

import React from "react";
import useForm from "react-hook-form";

const RegisterForm = () => {
    
    const { register, handleSubmit } = useForm()
    const getFormData = data => {
        console.log(data)
    }
    return (
        <Form onSubmit={handleSubmit(getFormData)}
        className="flex flex-col gap-8 w-full px-8 sm:px-0 sm:w-1/2">
            <Link href="/" className="flex items-center gap-2 self-start">
              <BsArrowLeft size="1.25rem" /> Beranda
            </Link>
            <h1 className="font-heading text-4xl text-matcha">Register</h1>
            <InputField
              ref={register}
              name="email"
              type="email"
              label="Email:"
              placeholder="example@email.com"
              className="border-matcha"
            />
            <div className="relative">
              <InputField
                ref={register}
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
    )
}

export default RegisterForm