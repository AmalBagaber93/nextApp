import { serverFatch } from "@/app/utils/ky/server-fatch";

export const getProfile = async () => {
  try { 
    const response = await serverFatch.get("competitor/me/profile");
    return await response.json();
  } catch (error) {
    // console.error(error);
  }
};
