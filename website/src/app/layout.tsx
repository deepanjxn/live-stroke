import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stroke.d-s.me"),
  title: {
    default: "LiveStroke — Animated Gradient Borders for React",
    template: "%s · LiveStroke",
  },
  description:
    "Wrap any React component with beautiful animated gradient borders using a single line of code. Lightweight, customizable, TypeScript-ready, and built for modern React applications.",
  applicationName: "LiveStroke",
  keywords: [
    "LiveStroke",
    "animated gradient borders",
    "React borders",
    "React gradient",
    "React animation",
    "CSS gradient border",
    "React UI component",
    "border animation React",
    "TypeScript React component",
  ],
  authors: [{ name: "Deepanjan Sen", url: "https://d-s.me/" }],
  creator: "Deepanjan Sen",
  publisher: "Deepanjan Sen",
  alternates: {
    canonical: "https://stroke.d-s.me",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/favicon-16.webp", sizes: "16x16", type: "image/webp" },
      { url: "/images/favicon-32.webp", sizes: "32x32", type: "image/webp" },
    ],
  },
  openGraph: {
    title: "LiveStroke — Animated Gradient Borders for React",
    description:
      "Wrap any React component with beautiful animated gradient borders using a single line of code.",
    url: "https://stroke.d-s.me",
    siteName: "LiveStroke",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "LiveStroke — Animated Gradient Borders for React",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@deepanjxn",
    creator: "@deepanjxn",
    title: "LiveStroke — Animated Gradient Borders for React",
    description:
      "Wrap any React component with beautiful animated gradient borders using a single line of code.",
    images: "/images/og-image.webp",
  },
};

export const viewport: Viewport = {
  themeColor: "#fdfdfc",
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
        <Analytics />
      </body>
    </html>
  );
}
