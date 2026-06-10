import type { Metadata } from "next";
import { Playfair_Display, Oswald } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const oswald = Oswald({
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
        className={`${playfair.variable} ${oswald.variable} bg-warpaint-ink font-label text-warpaint-bone antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
