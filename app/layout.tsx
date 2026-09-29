import "../styles/globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Sidebar from "@/components/Sidebar";
import ParticlesComponent from "@/components/particles";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aleksander Kurgan",
  description:
    "Aleksander Kurgan, a developer and researcher studying Computer Science at Stanford University. Projects, research, CAD models, and performances.",
  keywords:
    "Aleksander Kurgan, portfolio, developer, researcher, Stanford, projects, CAD, Computer Aided Design, euphonium, jazz trombone",
  icons: { icon: "/icon.ico" },
  openGraph: {
    title: "Aleksander Kurgan",
    description:
      "Developer and researcher studying Computer Science at Stanford University.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[#FAFAFA] text-slate-800 antialiased`}
      >
        <Sidebar />
        <ParticlesComponent id="particles" />
        <main className="pl-16">
          <div className="mx-auto max-w-3xl px-6">{children}</div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
