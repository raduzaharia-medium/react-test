import { useRoutePositions } from "../queries/routePositions";
import "./routePositions.css";

export const RoutePositions = (props) => {
  const { isLoading, error, data, isFetching } = useRoutePositions(props.routeId);

  const formatPosition = (position) => `${position * 81}%`;

  if (isLoading || isFetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="route-positions">
      <div className="bar">
        <div className="person" style={{ left: formatPosition(data.myPosition) }}>
          You
        </div>

        {data.peopleOnRoute.map((person, index) => (
          <div key={index} className="person" style={{ left: formatPosition(person.position) }}>
            {person.name}
          </div>
        ))}
      </div>
    </div>
  );
};
