import { useHistory } from "react-router";

import { useStatusMatch } from "hooks";
import { Page } from "layouts";
import { Title, Link, Illustration } from "components";

const Win = () => {
  const { push } = useHistory();
  const isMatched = useStatusMatch("win");

  if (!isMatched) {
    push("/");
  }

  return (
    <Page Illustration={Illustration.Reaper}>
      <Title color="gold">Congratulations!</Title>
      <Link to="/">Try it again</Link>
    </Page>
  );
};

export default Win;
