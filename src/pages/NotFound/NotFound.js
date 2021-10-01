import { Page } from "layouts";
import { Title, Text, Link, Illustration } from "components";

const NotFound = () => {
  return (
    <Page Illustration={Illustration.NotFound}>
      <Title color="blue">Knock, Knock...</Title>
      <Text>Nobody to han... I mean, see.</Text>
      <Link to="/">Go back to start page</Link>
    </Page>
  );
};

export default NotFound;
