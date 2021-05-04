import NavButton from "./NavButton";
import { x } from '@xstyled/styled-components'
import { FC } from "react";
import { Container } from "anolis-ui";

const NavBar: FC = () => {
  return (
    <x.div
    h="max-content"
    borderBottom="1"
    position="sticky" //sticks to top, TODO test it
    top="0"
    >
      <x.div
      w="max-content"
      mx="auto"
      >
        <NavButton label="HOME" link="/" />
        <NavButton label="SECOND PAGE" link="/" />
        <NavButton label="THIRD PAGE" link="/" />
      </x.div>
    </x.div>
  )
};

export default NavBar
