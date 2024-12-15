import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Hidalgo",
  description: "Luis Hidalgo is a content creator and aspiring voice actor.",
  keywords: [
    "Luis",
    "Hidalgo",
    "Luis Hidalgo",
    "Content Creator",
    "Voice Acting",
    "Voice Actor"
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
