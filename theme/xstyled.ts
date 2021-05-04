import { Theme } from "@xstyled/system";
import { defaultTheme as anolisTheme } from "anolis-ui";

export const xstyledTheme: Theme = {
  fonts: {
    ...anolisTheme.fonts,
    "heading-sans": "'Avenir', sans-serif"
  },
  colors: {
    ...anolisTheme.colors,
    robe: "#e00034",
    black: "#1e1e1e",
    gray: "#939598",
    white: "#fff",
    lightGray: "#c7cace",
    darkGray: "#5e6062",
    solidWhite: "#dee1e5",
    yellowish: "#83A838"
  }
};
