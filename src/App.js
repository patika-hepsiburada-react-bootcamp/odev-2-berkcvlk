import { Switch, Route } from "react-router-dom";

import { Stage } from "layouts";
import { routes } from "routes";

const App = () => {
  return (
    <Stage>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </Stage>
  );
};

export default App;
