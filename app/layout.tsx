"use client";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import ParticlesComponent from "../components/particles";
import MyHead from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MyHead />
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          <ParticlesComponent id="particles" />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
