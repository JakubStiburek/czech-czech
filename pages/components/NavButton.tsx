import { x } from '@xstyled/styled-components';
import Link from 'next/Link';
import { Button } from "anolis-ui";

interface Props {
  label: string,
  link: string
}

const NavButton = ({label, link}: Props) => {
  return (
      <Button v="clear" s="md">
        <Link href={link} passHref>
          {label}
        </Link>
      </Button>
  )
};

export default NavButton
