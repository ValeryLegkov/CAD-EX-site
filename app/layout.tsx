import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAD-EX'r Site",
  keywords: [
    "CAD EX Site",
    "CAD",
    "Exchanger",
    "Exchanger site",
    "CAD Exchanger",
  ],
  description: "Site for Cad Exchanger",
  authors: [{ name: "Valery Legkov" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
