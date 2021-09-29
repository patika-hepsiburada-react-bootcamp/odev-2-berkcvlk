import { Logo, Gallow } from "components";
import * as S from "./styles";

const Stage = ({ children }) => {
  return (
    <S.Stage>
      <S.Upper>
        <Logo />
        <S.Main>
          <S.PageContainer>{children}</S.PageContainer>
          <S.GallowStage>
            <Gallow />
          </S.GallowStage>
        </S.Main>
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
