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

// We'll use system fonts as fallbacks for the custom fonts
// In a real implementation, you would download and include the actual font files

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
        className={`${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
