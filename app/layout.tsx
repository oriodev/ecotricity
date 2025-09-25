import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";

const greycliff = localFont({ src: '../public/fonts/greycliffcf-regular.otf'})

export const metadata: Metadata = {
  title: "Ecotricity",
  description: "Data Resource Download",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${greycliff.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
