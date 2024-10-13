"use client";

import ky from "ky";
import Cookies from "js-cookie";

const handleLogin = async (values) => {
  try {
    const response = await ky.post(
      "https://api.v2hackathon.bugsbytes.com/api/v1/auth/login",
      {
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
