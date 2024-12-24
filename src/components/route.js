import { useQuery } from "@tanstack/react-query";
import { getRoute } from "../services/routes";
import { RoutePositions } from "./routePositions";
import { useEffect, useState } from "react";

import "./route.css";

export const Route = () => {
  const [shouldRefetch, setShouldRefetch] = useState(true);
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["route"],
    queryFn: getRoute,
    refetchInterval: shouldRefetch ? 2000 : false,
    enabled: shouldRefetch,
  });

  const getStatus = () => {
    if (data.myPosition === 1) return "finished!";
    else return Math.round(data.myPosition * 100) + "%";
  };

  useEffect(() => {
    if (data && data.myPosition >= 1) setShouldRefetch(false);
  }, [data]);

  if (isLoading || isFetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="route">
      <header>
        {data.routeName}, {getStatus()}
      </header>

      <RoutePositions data={data} />
    </section>
  );
};
