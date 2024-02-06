import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevReact Creations",
  description: "Let's build your own website together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
