import localFont from "next/font/local";

const generalSans = localFont({
  src: [
    {
      path: "./woff2/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./woff2/GeneralSans-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./woff2/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "semibold",
    },
  ],
  display: "swap",
});

export default generalSans;
