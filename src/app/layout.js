import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: "Mukul Padwal",
  description: "Portfolio Website",
  keywords: ['mukulpadwal', 'mukul', 'padwal']
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont`}>{children}</body>
    </html>
  );
}
