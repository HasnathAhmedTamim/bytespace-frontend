import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const satoshi = localFont({
  variable: "--font-satoshi",
  src: "../fonts/Satoshi-Variable.woff2",
  weight: "300 900",
  style: "normal",
  display: "swap",
});

export const clashDisplay = localFont({
  variable: "--font-clash-display",
  src: "../fonts/ClashDisplay-Variable.woff2",
  weight: "200 700",
  style: "normal",
  display: "swap",
  preload: false,
});

export const fontVariables = [
  poppins.variable,
  satoshi.variable,
  clashDisplay.variable,
].join(" ");
