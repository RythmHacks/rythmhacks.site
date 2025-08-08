import type { Metadata } from "next";
import { Geist, Geist_Mono, Krub } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const krub = Krub(
    {variable: "--font-krub-bold", weight: "700", style: "normal", subsets: ["latin"] }
);

export const metadata: Metadata = {
  title: "RythmHacks",
  description: "RyhtmHacks 2025!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${krub.className} antialiased min-h-screen w-full`}
      >
        {children}
      </body>
    </html>
  );
}
