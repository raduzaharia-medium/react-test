import React, { createContext, useContext, useState } from "react";

const PositionsContext = createContext();

export const PositionsContextProvider = ({ children }) => {
  const [positions, setPositions] = useState([]);

  return <PositionsContext.Provider value={[positions, setPositions]}>{children}</PositionsContext.Provider>;
};

export const usePositions = () => {
  return useContext(PositionsContext);
};
