import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "LiveStroke",
  description:
    "Animated gradient borders for React. Wrap any component with a single line.",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        {children}
      </body>
    </html>
  );
}
