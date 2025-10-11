// components/Contact.tsx
"use client";

import Section from "./Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="relative py-24">
      {/* BG: big CONTACT + dot + subtitle */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 flex justify-center">
          <span className="select-none text-[16vw] leading-none font-extrabold tracking-tighter text-white/5">
            CONTACT
          </span>
        </div>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact</h2>
        <div className="mt-4 flex items-center justify-center gap-2 text-xs tracking-[0.3em] text-white/70">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500" />
          <span>GET IN TOUCH</span>
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* LEFT: intro + email badge */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Let&apos;s work together</h3>
          <div className="space-y-4 text-neutral-400">
            <p>I&apos;m available for full-time roles & freelance projects.</p>
            <p>
              My inbox is always open—whether you have a question or just want to say hi. I&apos;ll try my best to get
              back to you!
            </p>
          </div>

          <a
            href="mailto:nqhung394.work@gmail.com"
            className="inline-flex w-max items-center gap-3 rounded-xl border border-violet-500/30 bg-violet-600/10 px-4 py-3 text-violet-200 shadow-[0_0_50px_-20px_rgba(139,92,246,0.6)] hover:bg-violet-600/15"
          >
            <Mail className="h-4 w-4" />
            nqhung394.work@gmail.com
          </a>
        </div>

        {/* RIGHT: form card */}
        <div className="relative">
          {/* soft glow */}
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-fuchsia-600/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-6 bottom-6 h-32 w-32 rounded-full bg-violet-600/25 blur-3xl" />

          <div className="rounded-2xl border border-neutral-800/80 bg-neutral-950/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // mailto fallback (đơn giản, không server)
                const fd = new FormData(e.currentTarget as HTMLFormElement);
                const name = encodeURIComponent(String(fd.get("name") ?? ""));
                const email = encodeURIComponent(String(fd.get("email") ?? ""));
                const subject = encodeURIComponent(String(fd.get("subject") ?? "Project inquiry"));
                const message = encodeURIComponent(String(fd.get("message") ?? ""));
                window.location.href = `mailto:nqhung394.work@gmail.com?subject=${subject}&body=From:%20${name}%20<${email}>%0D%0A%0D%0A${message}`;
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your Name">
                  <input
                    name="name"
                    placeholder="John Doe"
                    className="h-11 w-full rounded-lg border border-neutral-800 bg-neutral-900/40 px-3 text-sm text-neutral-200 placeholder:text-neutral-500 focus:border-violet-500/40 focus:outline-none"
                    autoComplete="name"
                    required
                  />
                </Field>
                <Field label="Your Email">
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="h-11 w-full rounded-lg border border-neutral-800 bg-neutral-900/40 px-3 text-sm text-neutral-200 placeholder:text-neutral-500 focus:border-violet-500/40 focus:outline-none"
                    autoComplete="email"
                    required
                  />
                </Field>
              </div>

              <Field label="Subject">
                <input
                  name="subject"
                  placeholder="Project Inquiry"
                  className="h-11 w-full rounded-lg border border-neutral-800 bg-neutral-900/40 px-3 text-sm text-neutral-200 placeholder:text-neutral-500 focus:border-violet-500/40 focus:outline-none"
                />
              </Field>

              <Field label="Message">
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Hello, I'd like to discuss a project…"
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-900/40 px-3 py-3 text-sm text-neutral-200 placeholder:text-neutral-500 focus:border-violet-500/40 focus:outline-none"
                  required
                />
              </Field>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="group relative h-12 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] hover:opacity-95"
                >
                  <Send className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------- small field wrapper -------- */
function Field({ label, children }: React.PropsWithChildren<{ label: string }>) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-neutral-400">{label}</span>
      {children}
    </label>
  );
}
