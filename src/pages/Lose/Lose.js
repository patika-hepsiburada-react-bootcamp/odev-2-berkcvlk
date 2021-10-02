import { useHistory } from "react-router";

import { Page } from "layouts";
import { useStatusMatch, useGame } from "hooks";
import { Title, Link, Illustration, Text } from "components";

const Lose = () => {
  const { push } = useHistory();
  const isMatched = useStatusMatch("lose");
  const { word } = useGame();

  if (!isMatched) {
    push("/");
  }

  return (
    <Page Illustration={Illustration.Souls}>
      <Title color="red">Game Over!</Title>
      <Text color="gray600">
        The word was:
        <Text behaviour="inline" color="orange">
          {word}
        </Text>
      </Text>
      <Link to="/">Try it again</Link>
    </Page>
  );
};

export default Lose;
