"use client";

import ky from "ky";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await ky.post("https://api.v2hackathon.bugsbytes.com/api/v1/auth/logout", {
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    Cookies.remove("token");
    router.refresh();
  };

  return <button onClick={handleLogout}>LogOut</button>;
};

export default LogoutButton;
