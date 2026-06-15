import type { Metadata } from "next";
import Script from "next/script";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TRVERSE | Mass Transit AFC, ITS & AI Platform | Global Leader",
  description:
    "TRVERSE delivers end-to-end automated fare collection, intelligent transport systems, fleet management, and AI monitoring for mass transit networks worldwide. Backed by LMKR's 30-year enterprise legacy.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable}`}
    >
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6015NQ5BW5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6015NQ5BW5');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
