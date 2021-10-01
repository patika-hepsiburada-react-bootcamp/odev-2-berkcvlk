import { useContext } from "react";

import { GameContext } from "store/gameContext";
import { GAME_STATUS } from "constants/game";

/**
 * Hook to check if route does match with the
 * game status. If doesn't, redirect home page.
 * @param {"lose" | "win" | "start"} path Path to check
 * @return {boolean} If match returns true
 */
const useStatusMatch = (path) => {
  const { status } = useContext(GameContext);

  if (status === GAME_STATUS[path.toUpperCase()]) {
    return true;
  }

  return false;
};

export default useStatusMatch;
