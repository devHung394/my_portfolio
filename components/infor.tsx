// HERO: CSS-only animations (no framer-motion)
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  // stagger bằng CSS delay
  const titleLeft = ["C","o","d","e","r"," "];
  const titleRight = [" ","D","r","e","a","m","e","r"];

  return (
    <section id="top" className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="inline-block animate-hero-fade [animation-delay:0.05s]">
          <Badge
            variant="secondary"
            className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm text-primary backdrop-blur-sm"
          >
            Portfolio Available
          </Badge>
        </div>

        {/* Title */}
        <h1 className="mt-8 text-balance text-7xl font-extrabold leading-[0.95] tracking-tight sm:text-8xl lg:text-9xl">
          {/* left "Coder " */}
          {titleLeft.map((ch, i) => (
            <span
              key={`l${i}`}
              className="inline-block text-foreground animate-hero-reveal"
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              {ch}
            </span>
          ))}

          {/* X highlight */}
          <span className="relative inline-block align-middle animate-hero-pop">
            <span className="relative inline-block bg-gradient-to-br from-fuchsia-500 via-pink-500 to-violet-500 bg-clip-text text-transparent [background-size:180%_180%] animate-xShimmer">
              X
            </span>
            <span className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-fuchsia-500/15 blur-xl animate-xPulse" />
          </span>

          {/* right " Dreamer" */}
          {titleRight.map((ch, i) => (
            <span
              key={`r${i}`}
              className="inline-block text-foreground animate-hero-reveal"
              style={{ animationDelay: `${0.5 + i * 0.05}s` }}
            >
              {ch}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mt-3 max-w-2xl text-xl font-light text-muted-foreground sm:text-2xl animate-hero-fade"
          style={{ animationDelay: "0.9s" }}
        >
          Hello, I&apos;m <span className="font-medium text-foreground">Nông Quốc Hưng</span> — a Software Developer
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-8 animate-hero-fade" style={{ animationDelay: "1.1s" }}>
          <Button
            size="lg"
            asChild
            className="h-12 rounded-full bg-foreground px-8 text-base font-medium text-background transition-transform hover:-translate-y-0.5 hover:bg-foreground/90"
          >
            <Link href="#contact">
              Let&apos;s Connect
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-12 rounded-full border-border/50 bg-transparent px-8 text-base font-medium text-foreground backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:bg-foreground/5"
          >
            <a href="mailto:nqhung394.work@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              nqhung394.work@gmail.com
            </a>
          </Button>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/20 p-2">
          <div className="h-3 w-1.5 animate-pulse rounded-full bg-muted-foreground/40" />
        </div>
      </div>

      {/* Keyframes */}
      <style jsx global>{`
        /* chữ trượt lên + mờ dần */
        @keyframes hero-reveal {
          0% { opacity: 0; transform: translateY(18px) rotateX(35deg); filter: blur(6px); }
          60% { filter: blur(0); }
          100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        .animate-hero-reveal {
          animation: hero-reveal .6s cubic-bezier(.21,.62,.35,1) both;
          will-change: transform, opacity, filter;
        }

        /* fade đơn giản cho badge / subtitle / buttons */
        @keyframes hero-fade {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-fade { animation: hero-fade .5s ease-out both; }

        /* nhịp nhẹ cho X khi xuất hiện */
        @keyframes hero-pop {
          0% { transform: scale(.92); opacity: .0; }
          60% { transform: scale(1.06); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-hero-pop { animation: hero-pop .5s ease-out both; animation-delay: .35s; }

        /* shimmer + glow cho X */
        @keyframes xShimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-xShimmer { animation: xShimmer 3.2s ease-in-out infinite; }
        @keyframes xPulse {
          0%, 100% { opacity: .35; transform: scale(1); }
          50% { opacity: .6; transform: scale(1.15); }
        }
        .animate-xPulse { animation: xPulse 2.6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
