import { BASE_URL } from "../utils/constant";
import axios, { axiosPrivate } from "./axios";

// Fetch function using REST API
export const fetchInitialData = async () => {
  try {
    const response = await axiosPrivate.get("/api/assessor/fetchLands");

    const res = response.data?.data.map((data) => {
      const oldArp = data?.oldArp ? JSON.parse(data?.oldArp) : null;
      const previousOwner = data?.previousOwner
        ? JSON.parse(data?.previousOwner)
        : null;

      return {
        ...data,
        paymentList: [],
        prevArp:
          Array.isArray(oldArp) && oldArp.length > 0 ? oldArp[0] : oldArp,
        prevOwner:
          Array.isArray(previousOwner) && previousOwner.length > 0
            ? previousOwner[0]
            : previousOwner,
        oldArp:
          Array.isArray(oldArp) && oldArp.length > 0
            ? oldArp?.map((v) => ` ${v}`)
            : oldArp,
        previousOwner:
          Array.isArray(previousOwner) && previousOwner.length > 0
            ? previousOwner?.map((v) => ` ${v}`)
            : previousOwner,
      };
    });
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
