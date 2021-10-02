import { useHistory } from "react-router";

import { useStatusMatch, useGame } from "hooks";
import { Page } from "layouts";
import { Keyboard, Loader, Text } from "components";
import { revealString } from "utils";
import { MAX_ATTEMPT_COUNT } from "constants/game";
import * as S from "./styles";

const Game = () => {
  const { word, isLoading, clickedKeys, attempts } = useGame();
  const isMatched = useStatusMatch("start");
  const { push } = useHistory();

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
      <Text size="small">You can use your keyboard!</Text>
    </Page>
  );
};

export default Game;
