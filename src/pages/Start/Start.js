import { Page } from "layouts";
import { Link, Illustration } from "components";
import * as S from "./styles";

const Start = () => {
  return (
    <Page Illustration={Illustration.ManSide}>
      <Link size="large" to="/game">
        Start
      </Link>
      <S.Text>You know, just try not to hang the man.</S.Text>
    </Page>
  );
};

export default Start;
