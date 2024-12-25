import { useQuery } from "@tanstack/react-query";
import { getRouteName } from "../services/routes";

export const RouteHeader = (props) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["routeName", props.routeId],
    queryFn: () => getRouteName(props.routeId),
  });

  const getStatus = () => {
    if (data.myPosition === 1) return "finished!";
    else return Math.round(data.myPosition * 100) + "%";
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <header>
      {data}, {getStatus()}
    </header>
  );
};
