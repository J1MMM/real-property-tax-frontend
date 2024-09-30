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

    console.log(response.data);
    setAuth((prev) => {
      return {
        ...prev,
        accessToken: token,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default UseRefreshToken;
