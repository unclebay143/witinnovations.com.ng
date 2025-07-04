import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/atom/Navbar";
import Footer from "@/components/atom/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "walk-in-tech innovations",
  description: "Building Future-Focused Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} text-base md:text-lg `}>
        <Navbar />
        <main className="pt-26 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
