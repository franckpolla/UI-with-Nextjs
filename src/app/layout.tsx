import type { Metadata } from "next";
import "./globals.css";

import Nav from "@/components/Nav";

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: " TRAVEL",
  description: "Travel Website ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="relative overflow-hidden"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
