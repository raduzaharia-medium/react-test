import React, { useState } from "react";
import RouteProgress from "./routeProgress";

import "./route.css";

export default function Route(props) {
  const [name, setName] = useState("To the dunes and back");
  const [completion, setCompletion] = useState("22%");

  return (
    <div className="route">
      <header>
        {name}, {completion}
      </header>

      <RouteProgress />
    </div>
  );
}
