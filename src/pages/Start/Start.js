import { useContext } from "react";

import { Page } from "layouts";
import { Link, Text, Illustration } from "components";
import { GameContext } from "store/gameContext";

const Start = () => {
  const { reset } = useContext(GameContext);

  return (
    <Page Illustration={Illustration.ManSide}>
      <Link onClick={reset} size="large" to="/game">
        Start
      </Link>
      <Text>You know, just try not to hang the man.</Text>
    </Page>
  );
};

export default Start;
