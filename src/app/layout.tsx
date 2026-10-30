import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matrixspaces.com.au"),
  title: "Matrix Spaces Australia | Applied Innovation for the Built Environment",
  description:
    "A collaborative platform to design, deliver and maintain high-performance built environments through industrialised interiors, asset intelligence and preventive care.",
  keywords: [
    "Matrix Spaces Australia",
    "applied innovation built environment",
    "industrialised interiors Australia",
    "institutional collaboration Australia",
    "living laboratory built environment",
    "asset intelligence",
    "preventive asset care",
    "modular retrofit kits",
  ],
  authors: [{ name: "Matrix Spaces Australia" }],
  openGraph: {
    title: "Matrix Spaces Australia | Applied Innovation for the Built Environment",
    description:
      "A collaborative platform connecting physical spaces, industrialised interior systems, retrofit solutions, asset intelligence, preventive care, and applied research across the Australian built environment.",
    url: "https://matrixspaces.com.au",
    siteName: "Matrix Spaces Australia",
    images: [
      {
        url: "/images/hero-architecture.jpg",
        width: 1600,
        height: 900,
        alt: "Contemporary Australian institutional architectural pavilion - Matrix Spaces Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matrix Spaces Australia | Applied Innovation for the Built Environment",
    description:
      "A collaborative platform to design, deliver and maintain high-performance built environments.",
    images: ["/images/hero-architecture.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://matrixspaces.com.au",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${plusJakarta.variable} font-sans scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#0A192F] selection:bg-[#B8860B]/20"
      >
        {children}
      </body>
    </html>
  );
}
