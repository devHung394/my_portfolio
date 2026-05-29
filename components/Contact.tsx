// components/Contact.tsx
"use client";

import Section from "./Section";
import { Button } from "@/components/ui/button";
import { Mail, Send, Github, Linkedin, Facebook, Copy, Check } from "lucide-react";
import { useState } from "react";

const SOCIALS = [
  { href: "https://github.com/QuocHung-0309", Icon: Github,   label: "GitHub" },
  { href: "https://linkedin.com/in/hungnqh",  Icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com/whuq394",     Icon: Facebook, label: "Facebook" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nqhung394.work@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" className="relative py-24">
      {/* BG watermark */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 flex justify-center">
          <span className="select-none text-[14vw] leading-none font-extrabold tracking-tighter text-white/[0.025]">
            CONTACT
          </span>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_60%,rgba(168,85,247,0.10),transparent)]" />
      </div>

      {/* header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
        <p className="mt-3 text-neutral-400 max-w-md mx-auto">
          Open for internships, freelance, or just a good conversation about design.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">

        {/* ── LEFT ── */}
        <div className="space-y-8">
          {/* headline */}
          <div>
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <p className="mt-2 text-neutral-400 leading-relaxed">
              My inbox is always open — whether you have a project, a question,
              or just want to say hi. I&apos;ll do my best to get back quickly!
            </p>
          </div>

          {/* email copy card */}
          <button
            onClick={copyEmail}
            className="group flex w-full items-center gap-3 rounded-2xl border border-violet-500/25 bg-violet-600/8 px-5 py-4 text-left transition-all hover:border-violet-500/40 hover:bg-violet-600/12"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15">
              <Mail className="h-5 w-5 text-violet-300" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-violet-200/60">Primary email</p>
              <p className="truncate text-sm font-medium text-violet-100">
                nqhung394.work@gmail.com
              </p>
            </div>
            <div className="shrink-0 text-violet-300/60 group-hover:text-violet-300 transition-colors">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </div>
          </button>

          {/* social links */}
          <div>
            <p className="mb-3 text-xs tracking-[0.35em] text-white/40">FIND ME ON</p>
            <div className="flex gap-3">
              {SOCIALS.map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/50
                    px-4 py-2.5 text-sm text-neutral-300 hover:border-neutral-700 hover:text-white
                    hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* availability badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-4 py-2 text-sm text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for UI/UX Internship
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div className="relative">
          {/* glows */}
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-fuchsia-600/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-6 bottom-6  h-32 w-32 rounded-full bg-violet-600/20 blur-3xl" />

          <div className="relative rounded-2xl border border-neutral-800/80 bg-neutral-950/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur">
            {/* gradient top border */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent rounded-t-2xl" />

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const fd      = new FormData(e.currentTarget as HTMLFormElement);
                const name    = encodeURIComponent(String(fd.get("name")    ?? ""));
                const email   = encodeURIComponent(String(fd.get("email")   ?? ""));
                const subject = encodeURIComponent(String(fd.get("subject") ?? "Project inquiry"));
                const message = encodeURIComponent(String(fd.get("message") ?? ""));
                window.location.href = `mailto:nqhung394.work@gmail.com?subject=${subject}&body=From:%20${name}%20<${email}>%0D%0A%0D%0A${message}`;
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <FloatField label="Your Name" name="name" type="text" placeholder="John Doe" required />
                <FloatField label="Your Email" name="email" type="email" placeholder="john@example.com" required />
              </div>
              <FloatField label="Subject" name="subject" type="text" placeholder="Project Inquiry" />
              <FloatTextarea label="Message" name="message" placeholder="Hello, I'd like to discuss a project…" required />

              <div className="pt-1">
                <Button
                  type="submit"
                  className="group relative h-12 w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_8px_40px_-10px_rgba(139,92,246,0.6)] hover:opacity-95 transition-opacity"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    Send Message
                  </span>
                  {/* shimmer sweep on hover */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── Styled input with glow focus ── */
function FloatField({
  label, name, type, placeholder, required,
}: {
  label: string; name: string; type: string; placeholder: string; required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-neutral-400">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-11 w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-3.5 text-sm
          text-neutral-100 placeholder:text-neutral-600
          focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/15
          transition-all duration-200"
      />
    </label>
  );
}

function FloatTextarea({
  label, name, placeholder, required,
}: {
  label: string; name: string; placeholder: string; required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-neutral-400">{label}</span>
      <textarea
        name={name}
        rows={5}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-3.5 py-3 text-sm
          text-neutral-100 placeholder:text-neutral-600
          focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/15
          transition-all duration-200 resize-none"
      />
    </label>
  );
}
