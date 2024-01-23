import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";

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
        <Script id="theme-switcher" strategy="beforeInteractive">
          {
            `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }`
        }
        </Script>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
