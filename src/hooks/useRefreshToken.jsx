import axios from "../api/axios";
import useAuth from "./useAuth";
import Cookies from "js-cookie";
const UseRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const token = Cookies.get("token");

    const response = await axios.get("/checkToken", {
      headers: { Authorization: `Bearer ${token}` },

      withCredentials: false,
    });

    const { userName, user_email, role } = response.data?.user;

    console.log("refresh");
    console.log(response.data);

    setAuth((prev) => {
      return {
        ...prev,
        accessToken: token,
        fullname: userName,
        email: user_email,
        roles: role,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default UseRefreshToken;
