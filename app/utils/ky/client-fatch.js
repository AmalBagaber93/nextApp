
import ky from "ky";

export const clientFatch = ky.create({
  prefixUrl: "https://api.v2hackathon.bugsbytes.com/api/v1",
  headers:{
    "Content-Type": "application/json",
  },
});
