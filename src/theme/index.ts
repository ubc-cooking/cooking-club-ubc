"use client";

import { extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const theme = extendTheme({
  colors: {
    primary: "#073574",
    secondary: "#DD8004",
    background: "#FFF9E1",
    accent: "#A3C5E1",
  },
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily,
  },
  styles: {
    global: {
      "html, body": {
        background: "background",
      },
      p: {
        color: "primary",
      },
    },
  },
});

export default theme;
