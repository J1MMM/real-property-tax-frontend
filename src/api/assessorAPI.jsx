import { BASE_URL } from "../utils/constant";
import axios from "./axios";

// Fetch function using REST API
export const fetchInitialData = async () => {
  try {
    const response = await axios.get("/api/assessor/fetchLands");
    console.log("inita");
    console.log(response);

    return response.data?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// Fetch function using REST API
export const fetchPendingData = async () => {
  try {
    const response = await axios.get("/api/assessor/fetchIncomplete");
    console.log("pending");
    console.log(response);

    return response.data?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getLatestArp = async (Brgy) => {
  try {
    const response = await axios.post("/api/assessor/maxArp", { Brgy });

    return response.data?.maxArp;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
