import { Page } from "layouts";
import { Title, Link, Illustration } from "components";

const Win = () => {
  return (
    <Page Illustration={Illustration.Reaper}>
      <Title color="gold">Congratulations!</Title>
      <Link to="/">Try it again</Link>
    </Page>
  );
};

export default Win;
