import { useQuery } from "@tanstack/react-query";
import { getRoutes } from "../services/routes";
import { Route } from "./route";

export const Routes = () => {
  const { isLoading, error, data } = useQuery({ queryKey: ["routes"], queryFn: getRoutes });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section>
      <h1>Routes</h1>

      {data.map((route) => (
        <Route key={route.id} routeId={route.id} />
      ))}
    </section>
  );
};
