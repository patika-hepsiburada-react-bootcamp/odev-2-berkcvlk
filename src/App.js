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

/**
 * Sayfalar -> Start, Win, Lose, Game
 * Oyun Durumu (Game Status)
 * Yanlış sayısı (max 5)
 * Yanlış sayısına göre -> SVG Manipülasyon
 * Oyun Durumuna göre -> SVG Render
 * Oyun -> Tıklanan harfin olup olmaması, varsa açılması yoksa deactive edilmesi
 * olmadığı durumlarda yanlış sayısının düşürülmesi
 */
