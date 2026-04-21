import type { Metadata } from "next";
import { Amaranth, ABeeZee } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollManager from "@/components/ScrollManager";

const amaranth = Amaranth({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amaranth",
  display: "swap",
});

const abeezee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-abeezee",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kailas Engineering Systems | Best Industrial Solutions in Pune",
  description: "Kailas Engineering Systems provides high-quality industrial solutions, manufacturing, and precision engineering services in Bhosari, Pune.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${amaranth.variable} ${abeezee.variable}`}>
      <body className="min-h-full flex flex-col font-body">
        <ScrollManager />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
