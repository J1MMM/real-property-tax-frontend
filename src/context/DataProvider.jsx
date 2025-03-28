import React, { createContext } from "react";
import { fetchInitialData, fetchPendingData } from "../api/assessorAPI";
import { useQuery } from "react-query";
import { fetchCancelsData } from "../api/cancelsAPI";
import { fetchOrdersFn } from "../api/landtaxAPI";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const {
    data: assessorData,
    isLoading: isAssessorLoading,
    isError: isAssessorError,
    refetch: refetchAssessorData,
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

  const {
    data: fetchOrders,
    isLoading: fetchOrdersLoading,
    isError: fetchOrdersError,
  } = useQuery("fetchOrders", fetchOrdersFn);

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
        refetchAssessorData,
        fetchOrders,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
