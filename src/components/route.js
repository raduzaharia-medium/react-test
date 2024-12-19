import { RoutePositions } from "./routePositions";

import "./route.css";

export const Route = (props) => {
  const getStatus = () => {
    if (props.data.myPosition === 1) return "finished!";
    else return props.data.myPosition * 100 + "%";
  };

  return (
    <section className="route">
      <header>
        {props.data.routeName}, {getStatus()}
      </header>

      <RoutePositions data={props.data} />
    </section>
  );
};
