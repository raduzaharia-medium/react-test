import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getPositions } from "../services/routes";
import { usePositions } from "../contexts/positionsContext";

export const useRoutePositions = (routeId) => {
  const [shouldRefetch, setShouldRefetch] = useState(true);
  const [positions, setPositions] = usePositions();

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["routePositions", routeId],
    queryFn: () => getPositions(routeId),
    refetchInterval: shouldRefetch ? 2000 : false,
    enabled: shouldRefetch,
  });

  useEffect(() => {
    if (data) {
      const updatedPositions = positions.map((pos) => (pos.routeId === routeId ? { ...pos, position: data.myPosition } : pos));

      if (!updatedPositions.some((pos) => pos.routeId === routeId)) {
        updatedPositions.push({ routeId, position: data.myPosition });
      }

      setPositions(updatedPositions);
      if (data.myPosition >= 1 && data.peopleOnRoute.every((e) => e.position >= 1)) setShouldRefetch(false);
    }
  }, [data, routeId]);

  return { isLoading, error, data, isFetching };
};
