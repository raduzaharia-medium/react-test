import { useQuery } from "@tanstack/react-query";
import { getRouteName } from "../services/routes";
import { useEffect, useState } from "react";

export const RouteHeader = (props) => {
  const [shouldRefetch, setShouldRefetch] = useState(true);
  const { isLoading, error, data } = useQuery({
    queryKey: ["routeName", props.routeId],
    queryFn: () => getRouteName(props.routeId),
    refetchInterval: shouldRefetch ? 2000 : false,
    enabled: shouldRefetch,
  });

  const getStatus = (position) => {
    if (position === 1) return "finished!";
    else return Math.round(position * 100) + "%";
  };

  useEffect(() => {
    if (data && data.myPosition >= 1) setShouldRefetch(false);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <header>
      {data.routeName}, {getStatus(data.myPosition)}
    </header>
  );
};
