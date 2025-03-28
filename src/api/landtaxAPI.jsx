import { BASE_URL } from "../utils/constant";
import axios, { axiosPrivate } from "./axios";

// Fetch function using REST API
export const fetchOrdersFn = async () => {
  try {
    const response = await axiosPrivate.get("/api/cashier/fetchOrders");
    console.log("api/cashier/fetchOrders");
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
