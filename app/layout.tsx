import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://team19.media"),
  title: {
    default: `${COMPANY.name} — ${COMPANY.tagline}`,
    template: `%s — ${COMPANY.name}`,
  },
  description: COMPANY.claim,
  authors: [{ name: COMPANY.legal }],
  openGraph: {
    type: "website",
    siteName: COMPANY.name,
    locale: "de_DE",
    images: ["/assets/logo/team19-logo-full.webp"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/assets/logo/team19-icon-mark.png",
    apple: "/assets/logo/team19-icon-mark.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-control focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Zum Inhalt wechseln
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
