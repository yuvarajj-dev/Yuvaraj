import { Inter } from "next/font/google";
import "./globals.css";
import Scroll from "./Component/Lenies Scroll/Scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YUVARAJ",
  description: "Hello Everyone, I am yuvaraj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        
      <Scroll/>
         </body>
    </html>
  );
}
