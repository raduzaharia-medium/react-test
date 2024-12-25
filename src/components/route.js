import { RoutePositions } from "./routePositions";
import { RouteHeader } from "./routeHeader";

import "./route.css";

export const Route = (props) => {
  return (
    <section className="route">
      <RouteHeader routeId={props.routeId} />
      <RoutePositions routeId={props.routeId} />
    </section>
  );
};
