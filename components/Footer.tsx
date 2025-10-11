import Section from "./Section";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900/60 py-10">
      <Section>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-400 md:flex-row">
          <p>© {new Date().getFullYear()} Quốc Hưng. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1"><Sparkles className="h-4 w-4" /> Built with Next.js + Tailwind</span>
          </div>
        </div>
      </Section>
    </footer>
  );
}
