import axios from "axios";
import { BASE_URL } from "../../utils/constant";

// Create an axios instance to use for assessor API calls
const assessorAPI = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // This is important if you're using cookies for authentication
});

// Fetch assessor data
export const fetchAssessorData = async () => {
  try {
    const response = await assessorAPI.get("/api/assessor/fetchlands");
    console.log(response.data.data);

    return response.data.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch assessor data"
    );
  }
};

// Create a new assessor entry (if needed)
export const createAssessor = async (assessorData) => {
  try {
    const response = await assessorAPI.post("/", assessorData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to create assessor entry"
    );
  }
};

// Update assessor data (if needed)
export const updateAssessor = async (assessorId, assessorData) => {
  try {
    const response = await assessorAPI.put(`/${assessorId}`, assessorData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to update assessor data"
    );
  }
};

// Delete assessor data (if needed)
export const deleteAssessor = async (assessorId) => {
  try {
    const response = await assessorAPI.delete(`/${assessorId}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to delete assessor entry"
    );
  }
};

export default assessorAPI;
