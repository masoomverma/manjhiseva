import { Geist } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "ManjhiSeva - Digital Healthcare Platform",
  description: "Revolutionary healthcare platform connecting patients with quality medical services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="transition-colors duration-300">
      <body
        className={`${geistSans.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
