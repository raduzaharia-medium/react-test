import { useQuery } from "@tanstack/react-query";
import { getRouteName } from "../services/routes";

export const useRouteName = (routeId) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["routeName", routeId],
    queryFn: () => getRouteName(routeId),
  });

  return { isLoading, error, data };
};
