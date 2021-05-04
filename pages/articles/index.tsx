import { NextPage } from "next";
import Heading from "components/Heading";
import Layout from "components/Layout";
import { Container } from "anolis-ui";

interface Props{}

const PageName: NextPage<Props> = () => {
  return(
    <Layout>
      <Container>
        <Heading>
          This is heading
        </Heading>
      </Container>
    </Layout>
  );
};

export default PageName;
