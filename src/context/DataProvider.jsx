import React, { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [assessorData, setAssessorData] = useState({
    data: [],
    loading: false,
    error: null,
  });

  return (
    <DataContext.Provider value={{ assessorData, setAssessorData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
