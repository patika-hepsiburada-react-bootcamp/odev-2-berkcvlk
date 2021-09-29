import * as P from "pages";

export const routes = [
  { component: P.Start, path: "/", exact: true },
  { component: P.Game, path: "/game" },
  { component: P.Lose, path: "/lose" },
  { component: P.Win, path: "/win" },
  { component: P.NotFound, path: "*" },
];
