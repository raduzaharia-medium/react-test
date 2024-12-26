import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

export const useMyPosition = (routeId) => {
  const { globalState } = useContext(AppContext);
  const myPosition = globalState.myPositions?.filter((e) => e.routeId === routeId)[0]?.position;

  return myPosition;
};
