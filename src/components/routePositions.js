import "./routePositions.css";

export const RoutePositions = (props) => {
  const formatPosition = (position) => `${position * 81}%`;

  return (
    <div className="route-positions">
      <div className="bar">
        <div
          className="person"
          style={{ left: formatPosition(props.data.myPosition) }}
        >
          You
        </div>

        {props.data.peopleOnRoute.map((person, index) => (
          <div
            key={index}
            className="person"
            style={{ left: formatPosition(person.position) }}
          >
            {person.name}
          </div>
        ))}
      </div>
    </div>
  );
};
