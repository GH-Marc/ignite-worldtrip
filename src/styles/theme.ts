import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "900": "#FFBA08",
    },
    white: {
      "600": "#FFFFFF",
      "400": "#F5F8FA",
    },
    light: {
      "800": "#47585B",
    },
    gray: {
      "300": "#DADADA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white.600",
        color: "light.800",
      },
    },
  },
});
