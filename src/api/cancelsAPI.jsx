import { BASE_URL } from "../utils/constant";
import axios, { axiosPrivate } from "./axios";

// Fetch function using REST API
export const fetchCancelsData = async () => {
  try {
    const response = await axiosPrivate.get(
      `${BASE_URL}/api/assessor/fetchArchives`
    );

    return response.data?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
