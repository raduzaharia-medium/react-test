import { useEffect, useState } from "react";
import { getRoute } from "./services/routes";
import { Route } from "./components/route";

import "./app.css";

export const App = () => {
  const [route, setRoute] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRoute = () => {
    const data = getRoute();

    setRoute({ ...data });
    setLoading(false);
  };

  useEffect(() => {
    fetchRoute();

    const interval = setInterval(fetchRoute, 2000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="App">
      <Route data={route} />
    </div>
  );
};
