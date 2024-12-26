import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

import { getPrettyStatus } from "../services/tools";
import { useRouteName } from "../queries/routeName";

export const RouteHeader = (props) => {
  const { globalState } = useContext(AppContext);
  const myPosition = globalState.myPositions?.filter((e) => e.routeId === props.routeId)[0]?.position;

  const { isLoading, error, data } = useRouteName(props.routeId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <header>
      {data}, {getPrettyStatus(myPosition)}
    </header>
  );
};
