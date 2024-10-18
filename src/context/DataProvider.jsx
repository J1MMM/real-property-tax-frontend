import React, { createContext } from "react";
import { fetchInitialData, fetchPendingData } from "../api/assessorAPI";
import { useQuery } from "react-query";
import { fetchCancelsData } from "../api/cancelsAPI";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const {
    data: assessorData,
    isLoading: isAssessorLoading,
    isError: isAssessorError,
  } = useQuery("assessorData", fetchInitialData);

  const {
    data: cancelsData,
    isLoading: isCancelsLoading,
    isError: isCancelsError,
  } = useQuery("cancelsData", fetchCancelsData);
  const {
    data: pendingData,
    isLoading: isPendingLoading,
    isError: isPendingError,
  } = useQuery("pendingData", fetchPendingData);

  return (
    <DataContext.Provider
      value={{
        assessorData,
        isAssessorLoading,
        isAssessorError,
        cancelsData,
        isCancelsLoading,
        isCancelsError,
        pendingData,
        isPendingError,
        isPendingLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
