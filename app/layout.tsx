import type React from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Mono, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nông Quốc Hưng, UI/UX Designer",
  description: "UI/UX Designer & Frontend Developer based in Ho Chi Minh City.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      className={`dark ${displayFont.variable} ${dmMono.variable} ${outfit.variable}`}
    >
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
