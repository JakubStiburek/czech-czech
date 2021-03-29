import React from 'react';
import NavButton from "./NavButton";
import { x } from '@xstyled/styled-components'

const NavBar = () => {
  return (
    <x.div
    h="max-content"
    bg="blue-gray-200"
    borderBottom={2}
    borderColor="blue-gray-400"
    position="sticky" //sticks to top, TODO test it
    top={0}
    >
      <x.ul
      listStyleType="none"
      display="flex"
      gap={0.5}
      m="auto"
      w="max-content"
      >
          <NavButton caption="HOME" link="/" />
          <NavButton caption="SECOND PAGE" link="/" />
          <NavButton caption="THIRD PAGE" link="/" />
      </x.ul>
    </x.div>
  )
};

export default NavBar