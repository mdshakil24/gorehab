import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const Beatrice = localFont({
  src: [
    {
      path: "/fonts/BeatriceTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/BeatriceTRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-beatrice",
});

export const metadata = {
  title: "Home Page",
  description: "Blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-inter ${InterFont.variable} ${Beatrice.variable}  antialiased`}
      >
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
