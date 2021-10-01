import { useContext } from "react";
import { useHistory } from "react-router";

import { useStatusMatch } from "hooks";
import { Page } from "layouts";
import { Keyboard, Loader } from "components";
import { revealString } from "utils";
import { GameContext } from "store/gameContext";
import { MAX_ATTEMPT_COUNT } from "constants/game";
import * as S from "./styles";

const Game = () => {
  const { word, isLoading, clickedKeys, attempts } = useContext(GameContext);
  const { push } = useHistory();
  const isMatched = useStatusMatch("start");

  if (!isMatched) {
    push("/");
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Page>
      <S.Word>{revealString(word, clickedKeys)}</S.Word>
      <S.Chip>
        <S.Text>Attempts Remaining</S.Text>
        <S.Text color="orange">{MAX_ATTEMPT_COUNT - attempts}</S.Text>
      </S.Chip>
      <Keyboard />
    </Page>
  );
};

export default Game;
