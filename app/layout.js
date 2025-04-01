import { Montserrat } from "next/font/google";
import "./globals.css";
import { FontSizeProvider } from "./context/FontSizeContext"; // Import provider

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
});

export const metadata = {
  title: "iplanit | Home",
  description: "My really cool project",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={montserrat.className}>
          <FontSizeProvider>
            {children}
          </FontSizeProvider>
        </body>
      </html>
  );
}
