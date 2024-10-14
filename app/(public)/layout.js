import { serverFatch } from "../utils/server-fatch";
import { redirect } from "next/navigation";

const getProfile = async () => {
  try {
    const response = await serverFatch.get('https://api.v2hackathon.bugsbytes.com/api/v1/competitor/me/profile');
    return await response.json();
  } catch (error) {
     console.error(error);
  }
};

export default async function Layout({ children }) {
  const profile = await getProfile();

  if (!!profile) return redirect("/tracks");

  return children;
}
