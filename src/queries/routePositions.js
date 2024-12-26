import { useState, useEffect, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { getPositions } from "../services/routes";
import { AppContext } from "../contexts/appContext";

export const useRoutePositions = (routeId) => {
  const [shouldRefetch, setShouldRefetch] = useState(true);
  const { globalState, setGlobalState } = useContext(AppContext);

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["routePositions", routeId],
    queryFn: () => getPositions(routeId),
    refetchInterval: shouldRefetch ? 2000 : false,
    enabled: shouldRefetch,
  });

  useEffect(() => {
    if (data) {
      const myPositions = globalState.myPositions || [];
      const selection = myPositions.filter((e) => e.routeId === routeId);

      if (selection.length === 0) myPositions.push({ routeId, position: data.myPosition });
      else selection[0].position = data.myPosition;

      setGlobalState((state) => ({ ...state, myPositions }));
      if (data.myPosition >= 1 && data.peopleOnRoute.every((e) => e.position >= 1)) setShouldRefetch(false);
    }
  }, [data, routeId, globalState.myPositions, setGlobalState]);

  return { isLoading, error, data, isFetching };
};
