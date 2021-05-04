import { TextLink, TextLinkProps } from "anolis-ui";
import React, { FC } from "react";

const NavButton: FC<TextLinkProps> = ({ children, ...props }) => {
  return (
    <TextLink
      fontWeight="700"
      textTransform="uppercase"
      hoverColor="robe"
      h="100%"
      display="flex"
      alignItems="center"
      {...props}
    >
      {children}
    </TextLink>
  )
};

export default NavButton
