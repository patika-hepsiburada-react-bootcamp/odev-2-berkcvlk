import * as P from "pages";

export const routes = [
  { component: P.Game, path: "/game" },
  { component: P.Lose, path: "/lose" },
  { component: P.Win, path: "/win" },
  { component: P.Start, path: "/", exact: true },
];
