import React, { useState } from "react";

import "./routeProgress.css";

export default function RouteProgress() {
  const [positions, setPositions] = useState([
    { name: "Lex", position: 0.4 },
    { name: "Frikkie", position: 0.25 },
    { name: "Ronald", position: 0.75 },
    { name: "You", position: 0.6 },
  ]);

  return (
    <div className="route-progress">
      <div className="timeline">
        {positions.map((element) => (
          <div
            className="participant"
            style={{ left: element.position * 100 + "%" }}
          >
            {element.name}
          </div>
        ))}
      </div>
    </div>
  );
}
