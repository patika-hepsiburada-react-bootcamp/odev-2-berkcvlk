import { useContext } from "react";
import { GameContext } from "store/gameContext";

// To avoid import context every time on related file.
const useGame = () => useContext(GameContext);

export default useGame;
