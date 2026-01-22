import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srushti Visweswaraiah | Software Developer & AI Enthusiast",
  description: "MS in Computer Science student specializing in AI and Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${archivo.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
