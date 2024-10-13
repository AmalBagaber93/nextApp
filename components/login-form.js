'use client'
import InputController from "./input-controller";
import { useForm } from "react-hook-form";
import { authenticateProtected } from '../Auth/auth';

const LoginForm = () => {
  const { control, handleSubmit, reset } = useForm();
  
  const onSubmit = async (data) => {
    const { email, password } = data;
    const result = await authenticateProtected(null, email, password);
  
    console.log(result)
  };
  return (
    <form
    className="bg-orange-500 p-5 space-y-5 container mx-auto max-w-lg"
    onSubmit={handleSubmit(onSubmit)}

  >
    <p className="text-4xl">Login</p>
    <InputController
      control={control}
      placeholder="Enter your name"
      type="email"
      name="username"
    />
    <InputController
      control={control}
      placeholder="Enter your password"
       type="password"
      name="password"
    />
    <button className="border border-white rounded-sm w-full py-2.5 text-white font-semibold hover:bg-white hover:text-orange-500">
      Login
    </button>
  </form>
  )
}

export default LoginForm
