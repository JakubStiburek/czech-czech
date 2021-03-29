import React from "react";
import { x } from '@xstyled/styled-components';
import Link from 'next/Link';

interface Props {
  caption: string,
  link: string
}

const NavButton = ({caption, link}: Props) => {
  return (
    <x.li
    fontSize="1.5rem"
    p="5px"
    bg="blue-gray-300"
    hoverBg="blue-gray-400"
    >
      <Link href={link}>
        <a>
          {caption}
        </a>
      </Link>
    </x.li>
  )
};

export default NavButton