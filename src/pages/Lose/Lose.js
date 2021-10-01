import { useHistory } from "react-router";

import { Page } from "layouts";
import { useStatusMatch } from "hooks";
import { Title, Link, Illustration } from "components";

const Lose = () => {
  const { push } = useHistory();
  const isMatched = useStatusMatch("lose");

  if (!isMatched) {
    push("/");
  }

  return (
    <Page Illustration={Illustration.Souls}>
      <Title color="red">Game Over!</Title>
      <Link to="/">Try it again</Link>
    </Page>
  );
};

export default Lose;
