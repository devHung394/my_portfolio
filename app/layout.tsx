import type React from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Be_Vietnam_Pro } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import IntroScreen from "@/components/IntroScreen";
import ScrollProgress from "@/components/ScrollProgress";
import SiteFooter from "@/components/SiteFooter";
import { LanguageProvider } from "@/components/LanguageProvider";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nông Quốc Hưng",
  description:
    "Không gian cá nhân của Nông Quốc Hưng, UI/UX Designer và Frontend Developer tại TP. Hồ Chí Minh. Dự án, công việc, và mọi thứ ở giữa.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      className={`dark ${displayFont.variable} ${plexMono.variable} ${beVietnam.variable}`}
    >
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <LanguageProvider>
            <SmoothScroll />
            <ScrollProgress />
            <IntroScreen />
            <div className="relative" style={{ backgroundColor: "#0E0E0C" }}>
              <Navigation />
              <PageTransition>{children}</PageTransition>
              <SiteFooter />
            </div>
          </LanguageProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
