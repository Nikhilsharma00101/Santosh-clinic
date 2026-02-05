import type { Metadata } from "next";
import { Inter, Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavbarUltra } from "@/components/layout/navbar-ultra";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { AnimatedBackground } from "@/components/ui/animated-background";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Santosh Child Care and Multispeciality Clinic | Narela's Best Healthcare",
    template: "%s | Santosh Clinic"
  },
  description: "Experience world-class healthcare at Santosh Clinic, Narela. Expert Pediatricians, Orthopedic Surgeons, and General Physicians dedicated to your family's health. Book an appointment today.",
  metadataBase: new URL('https://santosh-clinic.vercel.app'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    "Santosh Clinic",
    "Pediatrician Narela",
    "Orthopedic Doctor Narela",
    "Child Specialist Delhi",
    "Best Clinic in Narela",
    "General Physician",
    "Vaccination Center",
    "Joint Replacement Surgery",
    "Dr. Pravesh Mudgil",
    "Dr. Priya Sharma",
    "Emergency Clinic Narela"
  ],
  authors: [{ name: "Santosh Clinic Team" }],
  creator: "BroCode Studio",
  publisher: "Santosh Clinic",
  openGraph: {
    title: "Santosh Clinic | Advanced Child Care & Multispeciality",
    description: "Leading healthcare facility in Narela offering specialized care in Pediatrics, Orthopedics, and General Medicine. Modern facilities, expert doctors, and compassionate care.",
    url: "https://santosh-clinic.vercel.app",
    siteName: "Santosh Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Santosh Clinic - Premier Healthcare in Narela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santosh Clinic | World-Class Healthcare in Narela",
    description: "Expert doctors, modern facilities, and a patient-first approach. Visit Santosh Clinic for comprehensive medical care.",
    images: ["/opengraph-image.png"],
    creator: "@SantoshClinic", // Placeholder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

import { SmoothScroll } from "@/components/layout/smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          cormorant.variable,
          "antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-neon-cyan selection:text-white"
        )}
      >
        <SmoothScroll>
          <AnimatedBackground />
          <JsonLd />
          <NavbarUltra />
          <main className="flex-1 min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
