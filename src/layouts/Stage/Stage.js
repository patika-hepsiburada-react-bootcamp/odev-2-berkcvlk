import { useEffect } from "react";
import { useHistory } from "react-router";

import { useGame } from "hooks";
import { GAME_STATUS } from "constants/game";
import { Logo, Gallow } from "components";
import * as S from "./styles";

const Stage = ({ children }) => {
  const { status } = useGame();
  const { push } = useHistory();

  /**
   * Redirects
   * According to game status
   */
  useEffect(() => {
    switch (status) {
      case GAME_STATUS.WIN:
        push("/win");
        break;
      case GAME_STATUS.LOSE:
        push("/lose");
        break;
      default:
    }
  }, [status, push]);

  return (
    <S.Stage>
      <S.Upper>
        <Logo />
        <S.Container>
          {children}
          <S.GallowStage>
            <Gallow />
          </S.GallowStage>
        </S.Container>
      </S.Upper>
      <S.Lower>
        <S.MadeWithLove>
          Made with love by <a href="https://github.com/berkcvlk">Berk</a>
        </S.MadeWithLove>
      </S.Lower>
    </S.Stage>
  );
};

export default Stage;
