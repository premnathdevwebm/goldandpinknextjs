import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#F7ADC0",
  secondary: "#D6B34A",
  primaryAccent: "white",
};

const styles = {
  global: {
    "html, body": {
      height: "100%",
      bg: "white.50",
    },

    "#__next": {
      height: "100%",
      bg: "white.50",
    },
  },
};

export const theme = extendTheme({ colors, styles });

