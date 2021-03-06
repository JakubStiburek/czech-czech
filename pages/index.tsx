import { NextPage } from "next";
import Heading from "components/Heading";
import Layout from "components/Layout";
import { Container } from "anolis-ui";
import { x } from "@xstyled/emotion"

interface Props{}

const PageName: NextPage<Props> = () => {
  return(
    <Layout>
      <Container>
          <Heading>
            CZECH-CZECH
          </Heading>
      </Container>
    </Layout>
  );
};

export default PageName;
