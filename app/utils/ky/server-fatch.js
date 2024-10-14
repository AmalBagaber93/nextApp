import { cookies } from "next/headers";
import ky from "ky";

export const serverFatch = ky.create({
  prefixUrl: "https://api.v2hackathon.bugsbytes.com/api/v1",
  hooks: {
    beforeRequest: [
      (request) => {
        const token = cookies().get("token")?.value;
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
  },
});
