import { useEffect, useState } from "react";
import { getPositions } from "../services/routes";
import { useQuery } from "@tanstack/react-query";

import "./routePositions.css";

export const RoutePositions = (props) => {
  const [shouldRefetch, setShouldRefetch] = useState(true);
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["routePositions", props.routeId],
    queryFn: () => getPositions(props.routeId),
    refetchInterval: shouldRefetch ? 2000 : false,
    enabled: shouldRefetch,
  });

  const formatPosition = (position) => `${position * 81}%`;

  useEffect(() => {
    if (data && data.myPosition >= 1 && data.peopleOnRoute.every((e) => e.position >= 1)) setShouldRefetch(false);
  }, [data]);

  if (isLoading || isFetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="route-positions">
      <div className="bar">
        <div className="person" style={{ left: formatPosition(data.myPosition) }}>
          You
        </div>

        {data.peopleOnRoute.map((person, index) => (
          <div key={index} className="person" style={{ left: formatPosition(person.position) }}>
            {person.name}
          </div>
        ))}
      </div>
    </div>
  );
};
