import "./routePositions.css";

export default function RoutePositions(props) {
  return (
    <div className="route-positions">
      <div className="bar">
        <div
          className="person"
          style={{ left: props.data.myPosition * 100 + "%" }}
        >
          You
        </div>

        {props.data.peopleOnRoute.map((e, index) => (
          <div
            key={index}
            className="person"
            style={{ left: e.position * 100 + "%" }}
          >
            {e.name}
          </div>
        ))}
      </div>
    </div>
  );
}
