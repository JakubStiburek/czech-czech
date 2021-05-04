import { FC } from "react";
import { Txt } from "anolis-ui";
import styled, { SystemProps } from "@xstyled/emotion";

type HeadingProps = {
  t?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "lead";
} & SystemProps;

const Heading: FC<HeadingProps> = ({children, t = 'h1', ...props}) => {
  return (
    <HeadingStyle>
      <Txt t={t} textAlign="left" {...props as any}>
        {children}
      </Txt>
    </HeadingStyle>

  )
};

export default Heading;

const HeadingStyle = styled.div`
  & > * {
    &:after {
      content: ".";
      color: robe;
    }
  }
`;
