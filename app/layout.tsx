"use client";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import MyHead from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MyHead />
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
