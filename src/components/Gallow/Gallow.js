import { useGame } from "hooks";
import { GAME_STATUS, MAX_ATTEMPT_COUNT } from "constants/game";

import Ghosts from "./Ghosts/Ghosts";
import Woods from "./Woods/Woods";
import ManWinner from "./ManWinner/ManWinner";
import Rope from "./Rope/Rope";
import Man from "./Man/Man";

const Gallow = (props) => {
  const { attempts, status } = useGame();

  const isWinner = status === GAME_STATUS.WIN;
  const isDead = !isWinner && attempts === MAX_ATTEMPT_COUNT;
  const hasRope = !isWinner;

  return (
    <svg width={219} height={361} viewBox="0 0 219 361" fill="none" {...props}>
      <g id="gallow">
        {isDead && <Ghosts />}
        <Woods />
        <Rope hasRopeHead={hasRope} />
        {!isWinner && <Man pieces={attempts} />}
        {isWinner && <ManWinner />}
      </g>
    </svg>
  );
};

export default Gallow;
