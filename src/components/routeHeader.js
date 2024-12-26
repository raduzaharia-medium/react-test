import { getPrettyStatus } from "../services/tools";
import { useRouteName } from "../queries/routeName";
import { useMyPosition } from "../hooks/myPosition";

export const RouteHeader = (props) => {
  const myPosition = useMyPosition(props.routeId);
  const { isLoading, error, data } = useRouteName(props.routeId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <header>
      {data}, {getPrettyStatus(myPosition)}
    </header>
  );
};
