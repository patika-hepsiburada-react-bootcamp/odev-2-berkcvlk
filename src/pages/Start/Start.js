import { useContext } from "react";

import { Page } from "layouts";
import { Link, Illustration } from "components";
import { GameContext } from "store/gameContext";
import * as S from "./styles";

const Start = () => {
  const { reset } = useContext(GameContext);

  return (
    <Page Illustration={Illustration.ManSide}>
      <Link onClick={reset} size="large" to="/game">
        Start
      </Link>
      <S.Text>You know, just try not to hang the man.</S.Text>
    </Page>
  );
};

export default Start;
