import { useQuery } from "@tanstack/react-query";
import { getRoutes } from "../services/routes";

export const useRoutes = () => {
  const { isLoading, error, data } = useQuery({ queryKey: ["routes"], queryFn: getRoutes });
  return { isLoading, error, data };
};
