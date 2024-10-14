import { getProfile } from "@/apis/profile/server/get-profile";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
  const profile = await getProfile();

  if (!!profile) return redirect("/tracks");

  return children;
}
