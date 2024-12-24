"use client";

import { extendTheme } from "@chakra-ui/react";
import { moreSugar, now } from "./fonts";

const theme = extendTheme({
  colors: {
    primary: "#073574",
    secondary: "#DD8004",
    background: "#FFF9E1",
    accent: "#A3C5E1",
  },
  fonts: {
    heading: moreSugar.style.fontFamily,
    body: now.style.fontFamily,
  },
  styles: {
    global: {
      // Optionally set global CSS styles
      body: {
        color: "primary",
        background: "background",
      },
      footer: {
        background: "primary",
      },
    },
  },
});

export default theme;
