import { usePositions } from "../contexts/positionsContext";

export const useMyPosition = (routeId) => {
  const [positions] = usePositions();
  const myPosition = positions?.find((e) => e.routeId === routeId)?.position;

  return myPosition;
};
