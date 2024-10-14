import React, { createContext, useState } from "react";
import { fetchInitialData } from "../api/assessorAPI";
import { useQuery } from "react-query";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // const [assessorData, setAssessorData] = useState({
  //   data: [],
  //   loading: false,
  //   error: null,
  // });

  const { data, isLoading, isError } = useQuery(
    "assessorData",
    fetchInitialData
  );

  return (
    <DataContext.Provider value={{ data, isLoading, isError }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
