import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/atom/Navbar";
import Footer from "@/components/atom/Footer";
import { WIT_LOGO } from "@/const";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Walk-in-Tech Innovations | Leading Digital Transformation & Technology Solutions",
  description:
    "Walk-in-Tech Innovations is a premier technology company specializing in digital transformation, custom software development, web applications, mobile solutions, and IT consulting. We empower businesses with cutting-edge technology solutions, innovative digital strategies, and comprehensive tech services. Partner with us for scalable software solutions, cloud integration, and digital innovation that drives business growth.",
  keywords: [
    "Walk-in-Tech Innovations",
    "Digital Transformation",
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "IT Consulting",
    "Cloud Solutions",
    "Technology Innovation",
    "Software Solutions",
    "Digital Strategy",
    "Tech Consulting",
    "Business Automation",
    "Enterprise Solutions",
    "Scalable Technology",
    "Innovation Services",
    "Tech Partnership",
    "Digital Solutions",
  ],
  openGraph: {
    title:
      "Walk-in-Tech Innovations | Leading Digital Transformation & Technology Solutions",
    description:
      "Transform your business with Walk-in-Tech Innovations' cutting-edge technology solutions. From custom software development to digital transformation strategies, we deliver innovative solutions that drive growth and efficiency.",
    url: "https://www.walkintech-innovations.com.ng",
    type: "website",
    images: [
      {
        url: WIT_LOGO,
        width: 800,
        height: 600,
        alt: "Walk-in-Tech Innovations Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Walk-in-Tech Innovations | Leading Digital Transformation & Technology Solutions",
    description:
      "Innovative technology solutions for modern businesses. Custom software development, digital transformation, and IT consulting services that drive success.",
    images: [
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1751380639/WIT-logo_rcbccr.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} text-base md:text-lg  `}>
        <Navbar />
        <main className="pt-  min-h-screen  ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
