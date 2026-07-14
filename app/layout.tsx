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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DevClyst",
  "url": "https://devclyst.site",
  "logo": "https://devclyst.site/logo.png", 
  "founder": {
    "@type": "Person",
    "name": "Hassnain Ahmed Lodhi",
    "jobTitle": "Founder & CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "DevClyst"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressCountry": "Pakistan"
    }
  },
  "sameAs": [
    "https://instagram.com/devclyst",
    "https://facebook.com/devclyst",
    "https://www.tiktok.com/@sohaibxhasnain",
    "https://www.youtube.com/@sohaibxhasnain",
    "https://wa.me/923704640009"
]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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