import ky from "ky";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const getProfile = async () => {
  const token = cookies().get("token")?.value;

  try {
    const response = await ky.get(
      "https://api.v2hackathon.bugsbytes.com/api/v1/competitor/me/profile",
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return await response.json();
  } catch (error) {
    // console.error(error);
  }
};

export default async function Layout({ children }) {
  const profile = await getProfile();

  if (!profile) return redirect("/login");

  return children;
}
