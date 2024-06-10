
import "./globals.css";
import "./Font/Font.css";
import Scroll from "./Component/Lenies Scroll/Scroll";
 

export const metadata = {
  title: "YUVARAJ",
  description: "Hello Everyone, I am yuvaraj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}

        <Scroll />
       
      </body>
    </html>
  );
}
