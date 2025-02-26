import { BASE_URL } from "../utils/constant";
import axios, { axiosPrivate } from "./axios";

// Fetch function using REST API
export const fetchInitialData = async () => {
  try {
    const response = await axiosPrivate.get("/api/assessor/fetchLands");
    const res = response.data?.data.map((data) => ({
      ...data,
      paymentList: [],
    }));
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// Fetch function using REST API
export const fetchPendingData = async () => {
  try {
    const response = await axiosPrivate.get("/api/assessor/fetchIncomplete");

    return response.data?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getLatestArp = async (Brgy) => {
  try {
    const response = await axiosPrivate.post("/api/assessor/maxArp", { Brgy });

    return response.data?.maxArp;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
