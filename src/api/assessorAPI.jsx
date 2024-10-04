import { BASE_URL } from "../utils/constant";
import axios from "./axios";

// Fetch function using REST API
export const fetchInitialData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/assessor/fetchLands`);
    console.log("inita");
    console.log(response);

    return response.data?.data;
  } catch (error) {
    console.log(error);
  }
};

// Fetch function using REST API
export const addAssessorData = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/api/assessor/fetchLands`);
    console.log("post");
    console.log(response);

    return response.data?.data;
  } catch (error) {
    console.log(error);
  }
};
