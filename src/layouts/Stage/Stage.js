import { Logo } from "components";
import * as S from "./styles";

const Stage = ({ children }) => {
  return (
    <S.Stage>
      <S.Upper>
        <Logo />
        {children}
      </S.Upper>
      <S.Lower />
    </S.Stage>
  );
};

export default Stage;
