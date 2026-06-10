import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-label",
});

export const metadata: Metadata = {
  title: "War Paint Chalk | Release Your Inner Warrior",
  description:
    "Premium colored cheer chalk for athletes who perform with fire. White chalk $10, colored chalk $15 per 250 ML bottle.",
  icons: { icon: "/logo.jpeg" },
  openGraph: {
    title: "War Paint Chalk",
    description: "Release Your Inner Warrior — premium colored cheer chalk.",
    images: ["/products.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${anton.variable} ${archivo.variable} bg-warpaint-bone font-label text-warpaint-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
