import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik ({
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
      <body className={rubik.className + " " + "bg-ghost-white"}>{children}</body>
    </html>
  );
}
