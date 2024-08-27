import localFont from "next/font/local";

const now = localFont({
  src: [
    {
      path: "../../public/fonts/Now-Regular.otf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Now-Bold.otf",
      style: "bold",
    },
  ],
  display: "swap",
});

const moreSugar = localFont({
  src: "../../public/fonts/MoreSugar-Regular.otf",
  display: "swap",
});

export { now, moreSugar };
