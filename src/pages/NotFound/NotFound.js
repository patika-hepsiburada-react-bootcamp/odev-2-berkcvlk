import { Page } from "layouts";
import { Title, Link, Illustration } from "components";

const NotFound = () => {
  return (
    <Page Illustration={Illustration.NotFound}>
      <Title color="blue">Knock, Knock...</Title>
      <Link to="/">Go back to start page</Link>
    </Page>
  );
};

export default NotFound;
