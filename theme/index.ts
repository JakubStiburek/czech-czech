import { buttonTheme, cardTheme, createTheme, tagTheme, textLinkTheme, typographyTheme } from "anolis-ui";

export const theme = createTheme({
  ...typographyTheme({
    baseStyle: {
      fontFamily: "heading-sans",
      _h1: {
        fontSize: "5rem",
        lineHeight: "5rem",
        fontWeight: 700,
        color: "#1D0A1F",
        fontFamily: "heading-sans"
      },
      _h2: {
        fontSize: "2.625rem",
        lineHeight: "3.5rem",
        fontWeight: 700,
        color: "#1D0A1F",
        fontFamily: "heading-sans"
      },
      _h3: {
        fontSize: "1.5rem",
        lineHeight: "2rem",
        fontWeight: 700,
        color: "#1D0A1F",
        fontFamily: "heading-sans"
      },
      _h4: {
        fontFamily: "heading-sans"
      },
      _h5: {
        fontFamily: "heading-sans"
      },
      _h6: {
        fontFamily: "heading-sans"
      },
      _p: {
        color: "#1D0A1F",
        fontFamily: "heading-sans"
      },
      _lead: {
        fontFamily: "heading-sans"
      }
    }
  }),
  ...tagTheme({
  }),
  ...buttonTheme({
    variants: {
      solid: {
        bg: "robe",
      }
    }
  }),
  ...textLinkTheme({
  }),
  ...cardTheme({
    variants: {
      elevated: {
        borderRadius: 0,
        boxShadow: "0 0.5rem 1rem 0 rgba(30, 30, 30, 0.1), 0 1rem 2rem 0 rgba(30, 30, 30, 0.1)",
        hoverBoxShadow: "0 1rem 2rem 0 rgba(30, 30, 30, 0.5)",
        transition: "box-shadow 300ms"
      }
    }
  })
});
