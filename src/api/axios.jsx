import axios from "axios";
import { BASE_URL } from "../utils/constant";
import Cookies from "js-cookie";
const token = Cookies.get("token");

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  // headers: { "Content-Type": "application/json" },
  withCredentials: false,
});
// Request Interceptor
axiosPrivate.interceptors.request.use(
  (config) => {
    // Retrieve token from localStorage or other storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (optional)
axiosPrivate.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized: Token may be expired");
      // Handle token expiration (e.g., redirect to login)
    }
    return Promise.reject(error);
  }
);
