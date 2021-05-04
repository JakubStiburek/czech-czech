import NavButton from "./NavButton";
import { x } from '@xstyled/styled-components'
import { FC } from "react";
import { Container } from "anolis-ui";

const NavBar: FC = () => {
  return (
    <x.div
      as="header"
      h="4rem"
      boxShadow="0 0.5rem 1rem 0 rgba(30, 30, 30, 0.1), 0 1rem 2rem 0 rgba(30, 30, 30, 0.1)"
    >
      <Container
        v="fluid"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        h="100%"
      >
        <x.div as="nav" display="flex" spaceX="4rem" h="100%" mx="auto">
          <NavButton>
            HOME
          </NavButton>
          <NavButton>
            ARTICLES
          </NavButton>
          <NavButton>
            LESSONS
          </NavButton>
          <NavButton>
            EXERCISES
          </NavButton>
        </x.div>
      </Container>
    </x.div>
  );
};

export default NavBar
