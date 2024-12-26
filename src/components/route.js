import { PositionsContextProvider } from "../contexts/positionsContext";
import { RoutePositions } from "./routePositions";
import { RouteHeader } from "./routeHeader";

import "./route.css";

export const Route = (props) => {
  return (
    <section className="route">
      <PositionsContextProvider>
        <RouteHeader routeId={props.routeId} />
        <RoutePositions routeId={props.routeId} />
      </PositionsContextProvider>
    </section>
  );
};
