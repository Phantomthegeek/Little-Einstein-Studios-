import type { Metadata } from "next";
import { Inter, Sora, Quicksand } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Little Einstein Studio | Creative Tech Agency",
  description:
    "We build apps. We craft designs. We create digital experiences. A creative tech company specializing in app development, UI/UX design, and digital strategy.",
  keywords: [
    "app development",
    "UI/UX design",
    "digital strategy",
    "creative tech",
    "mobile apps",
    "web development",
  ],
  authors: [{ name: "Little Einstein Studio" }],
  openGraph: {
    title: "Little Einstein Studio | Creative Tech Agency",
    description:
      "We build apps. We craft designs. We create digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Einstein Studio | Creative Tech Agency",
    description:
      "We build apps. We craft designs. We create digital experiences.",
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
      className={`${inter.variable} ${sora.variable} ${quicksand.variable}`}
    >
      <body className="font-sans antialiased bg-white text-charcoal">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

