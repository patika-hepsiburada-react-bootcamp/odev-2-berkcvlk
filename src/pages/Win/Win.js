import { useHistory } from "react-router";

import { useStatusMatch, useGame } from "hooks";
import { Page } from "layouts";
import { Title, Link, Illustration, Text } from "components";

const Win = () => {
  const { push } = useHistory();
  const isMatched = useStatusMatch("win");
  const { word } = useGame();

  if (!isMatched) {
    push("/");
  }

  return (
    <Page Illustration={Illustration.Reaper}>
      <Title color="gold">Congratulations!</Title>
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

export default Win;
