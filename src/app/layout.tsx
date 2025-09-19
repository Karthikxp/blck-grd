import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Roboto Mono from Google Fonts
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

// Local fonts for custom typefaces
const gacorFont = localFont({
  src: [
    {
      path: "../../public/Gacor.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gacor-personal-use",
  display: "swap",
  fallback: ["serif"],
});

const andersonGrotesk = localFont({
  src: [
    {
      path: "../../public/anderson.otf",
      weight: "400", 
      style: "normal",
    },
  ],
  variable: "--font-anderson-grotesk",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Blck Grid - One Studio for your Idea",
  description: "From development to deployment with you at every step. Providing Software service to every enterprise and agency with curated approach for your objective",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${gacorFont.variable} ${andersonGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
