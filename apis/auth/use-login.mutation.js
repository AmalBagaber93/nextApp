"use client";

import { clientFatch } from "@/app/utils/ky/client-fatch";
import Cookies from "js-cookie";



const handleLogin = async (values) => {
  try {
    const response = await clientFatch.post(('auth/login'), {body: JSON.stringify(values)});
    const data = await response.json();
    const token = data?.data?.token;
    Cookies.set("token", `Bearer ${token}`);
  } catch (error) {
    // console.error(error);
  }
};

export function useLogin() {
  return {
    mutate: handleLogin,
  };
}
