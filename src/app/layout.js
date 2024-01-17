import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: "Mukul Padwal",
  description: "Portfolio Website",
  keywords: ["mukulpadwal", "mukul", "padwal"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont bg-light text-dark`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
