import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function PublicLayout({ children }) {
  const token = cookies().get("Authorization")?.value;

  if (!!token) return redirect("/tracks");

  return children;
}
