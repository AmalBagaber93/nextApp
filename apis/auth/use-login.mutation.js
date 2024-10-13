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
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    const token = data?.data?.token;
    Cookies.set("Authorization", `Bearer ${token}`);
  } catch (error) {
    // console.error(error);
  }
};

export function useLogin() {
  return {
    handleLogin,
  };
}

// export async function authenticatePublic(_currentState, email, password) {
//   try {
//     const response = await ky
//       .post("https://api.v2hackathon.bugsbytes.com/api/v1/admin/auth")
//       .json();

//     redirect("/login");
//   } catch (error) {
//     console.error(error);
//     if (error.message.includes("CredentialsSignin")) {
//       return "Invalid credentials.";
//     }
//     return "Something went wrong.";
//   }
// }
