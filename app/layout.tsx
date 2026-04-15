import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

export const metadata: Metadata = {
  title: "LUDent | Premium Dental & Aesthetic Clinic",
  description:
    "LUDent is a modern dental clinic where advanced technologies are combined with an individual approach to each patient.",
  generator: "v0.dev",
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        />
      </head>
      <body>
        <Header />
        <ScrollToTop />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
