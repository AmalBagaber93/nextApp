"use client";

import InputController from "./input-controller";
import { useForm } from "react-hook-form";
import { useLogin } from "../apis/auth/use-login.mutation";
import Cookies from "js-cookie";

const LoginForm = () => {
  const { control, handleSubmit } = useForm();

  const { handleLogin } = useLogin();

  const onSubmit = (values) => handleLogin(values);

  return (
    <form
      className="bg-orange-500 p-5 space-y-5 container mx-auto max-w-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-4xl">Login</p>
      <InputController
        control={control}
        placeholder="Enter your Email"
        type="email"
        name="email"
      />
      <InputController
        control={control}
        placeholder="Enter your Password"
        type="password"
        name="password"
      />
      <button className="border border-white rounded-sm w-full py-2.5 text-white font-semibold hover:bg-white hover:text-orange-500">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
