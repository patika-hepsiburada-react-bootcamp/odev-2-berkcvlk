import { Page } from "layouts";
import { Title, Link, Illustration } from "components";

const Lose = () => {
  return (
    <Page Illustration={Illustration.Souls}>
      <Title color="red">Game Over!</Title>
      <Link to="/">Try it again</Link>
    </Page>
  );
};

export default Lose;
