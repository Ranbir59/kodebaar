import { Inter } from "next/font/google";
import {Oswald} from "next/font/google"
import {Playfair_Display} from "next/font/google"

const inter_font = Inter({ subsets: ["latin"] });
const oswald_font=Oswald({
  subsets:["latin"],
  weight:"400",
})
const playFair_font=Playfair_Display({
  subsets:["latin"],
  weight:"500"
})

export const inter=inter_font.className
export const oswald =oswald_font.className
export const playFair=playFair_font.className