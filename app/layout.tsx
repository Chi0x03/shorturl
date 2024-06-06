import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter ({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Linkify",
  description: "Project by Chi0x03",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className + " " + "bg-ghost-white"}>{children}</body>
    </html>
  );
}
