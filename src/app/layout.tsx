import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CoderPush — Production AI, engineered for scale.",
  description:
    "Embedded engineering teams, AWS-native delivery, and on-premise AI for enterprises that can't afford experiments. 80 engineers. Vietnam-based. Globally delivered.",
  metadataBase: new URL("https://coderpush.com"),
  openGraph: {
    title: "CoderPush — Production AI, engineered for scale.",
    description:
      "Embedded engineering teams, AWS-native delivery, and on-premise AI for enterprises that can't afford experiments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-navy text-white">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
