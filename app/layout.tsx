import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DevClyst — Build your Startup",
  description:
    "DevClyst builds startups. Custom web apps, SaaS platforms, CRM systems, and prebuilt products — fast, clean, and built to scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Clash Display from Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <FloatingButtons />
        {children}
        <Footer/>  
      </body>
    </html>
  );
}
