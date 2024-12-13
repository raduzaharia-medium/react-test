import { useEffect, useState } from "react";
import { getRoute } from "./services/routes";
import Route from "./components/route";

import "./app.css";

function App() {
  const [route, setRoute] = useState(null);

  useEffect((e) => {
    const interval = setInterval(async () => {
      const data = await getRoute();
      setRoute({ ...data });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {route && (
        <div className="App">
          <Route data={route} />
        </div>
      )}
    </>
  );
}

export default App;
