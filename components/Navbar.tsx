"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="#home" className="group inline-flex items-center gap-2 text-lg font-semibold">
          <Sparkles className="h-5 w-5 text-cyan-400 transition-transform group-hover:rotate-12" />
          <span>qhung.dev</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm md:flex">
          <a className="opacity-80 hover:opacity-100" href="#projects">Work</a>
          <a className="opacity-80 hover:opacity-100" href="#about">About</a>
          <a className="opacity-80 hover:opacity-100" href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#contact">
            <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white">Hire me</Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
