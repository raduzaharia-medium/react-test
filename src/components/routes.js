import { Route } from "./route";
import { useRoutes } from "../queries/routes";

import "./routes.css";

export const Routes = () => {
  const { isLoading, error, data } = useRoutes();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="routes">
      <h1>Routes</h1>

      <div className="route-list">
        {data.map((route) => (
          <Route key={route.id} routeId={route.id} />
        ))}
      </div>
    </section>
  );
};
