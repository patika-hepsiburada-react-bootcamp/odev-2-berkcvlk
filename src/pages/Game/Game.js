import { useContext } from "react";
import { useHistory } from "react-router";

import { Page } from "layouts";
import { Keyboard, Loader } from "components";
import { revealString } from "utils";
import { GameContext } from "store/gameContext";
import { GAME_STATUS, MAX_ATTEMPT_COUNT } from "constants/game";
import * as S from "./styles";

const Game = () => {
  const { status, word, isLoading, clickedKeys, attempts } =
    useContext(GameContext);
  const { push } = useHistory();

  if (status === GAME_STATUS.LOSE) {
    push("/lose");
  }

  if (status === GAME_STATUS.WIN) {
    push("/win");
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
