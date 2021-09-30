import Ghosts from "./Ghosts/Ghosts";
import Woods from "./Woods/Woods";
import ManWinner from "./ManWinner/ManWinner";
import Rope from "./Rope/Rope";
import Man from "./Man/Man";

const Gallow = (props) => {
  const { isWinner, man } = {
    isWinner: false,
    man: {
      status: false,
      pieces: 5,
    },
  };

  const isDead = man.status && man.pieces === 5;
  const hasRope = !isWinner;

  return (
    <svg width={219} height={361} viewBox="0 0 219 361" fill="none" {...props}>
      <g id="gallow">
        {isDead && <Ghosts />}
        <Woods />
        <Rope hasRopeHead={hasRope} />
        {man.status && <Man pieces={man.pieces} />}
        {isWinner && <ManWinner />}
      </g>
    </svg>
  );
};

export default Gallow;
