"use client";

import { createSystem, defineConfig } from "@chakra-ui/react";
import { moreSugar, now } from "./fonts";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#073574" },
        secondary: { value: "#DD8004" },
        background: { value: "#FFF9E1" },
        accent: { value: "#A3C5E1" },
      },
      fonts: {
        heading: { value: moreSugar.style.fontFamily },
        body: { value: now.style.fontFamily },
      },
    },
    // styles: {
    //   global: {
    //     body: {
    //       color: "primary",
    //       background: "background",
    //     },
    //   },
    // },
  },
});

export const system = createSystem(config);
