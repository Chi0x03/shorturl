import type { Metadata } from "next";
import { Russo_One } from "next/font/google";
import "./globals.css";

const russo_one = Russo_One({subsets: ['latin'], weight:'400'});

export const metadata: Metadata = {
  title: "ShortUrl",
  description: "Project by Chi0x03",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={russo_one.className}>{children}</body>
    </html>
  );
}
