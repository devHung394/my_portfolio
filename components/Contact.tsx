"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Facebook, Copy, Check, Send } from "lucide-react";

const SOCIALS = [
  { href: "https://github.com/QuocHung-0309", Icon: Github,   label: "GitHub" },
  { href: "https://linkedin.com/in/hungnqh",  Icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com/whuq394",     Icon: Facebook, label: "Facebook" },
];

function FloatField({ label, name, type, placeholder, required }: {
  label: string; name: string; type: string; placeholder: string; required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.1em] text-[#6B6B67] mb-1.5 block">{label}</span>
      <input
        name={name} type={type} placeholder={placeholder} required={required}
        className="h-10 w-full rounded-lg border border-[#E5E4E1] bg-[#FAFAF8] px-3.5 text-sm
          text-[#1A1A18] placeholder:text-[#6B6B67]/50
          focus:border-[#1A1A18] focus:outline-none transition-colors duration-200"
      />
    </label>
  );
}

function FloatTextarea({ label, name, placeholder, required }: {
  label: string; name: string; placeholder: string; required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.1em] text-[#6B6B67] mb-1.5 block">{label}</span>
      <textarea
        name={name} rows={5} placeholder={placeholder} required={required}
        className="w-full rounded-lg border border-[#E5E4E1] bg-[#FAFAF8] px-3.5 py-3 text-sm
          text-[#1A1A18] placeholder:text-[#6B6B67]/50
          focus:border-[#1A1A18] focus:outline-none transition-colors duration-200 resize-none"
      />
    </label>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const copyEmail = () => {
    navigator.clipboard.writeText("nqhung394.work@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-10 lg:px-16 border-b border-[#E5E4E1]">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.12em] text-[#6B6B67] mb-3">Get in touch</p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] text-[#1A1A18]">
            Let&apos;s connect
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">

          {/* left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-7"
          >
            <div>
              <h3 className="font-serif text-lg text-[#1A1A18] mb-2">Get in touch</h3>
              <p className="text-sm leading-[1.75] text-[#6B6B67]">
                Open for internships, freelance, or just a good conversation
                about design. I&apos;ll do my best to get back quickly.
              </p>
            </div>

            {/* email copy */}
            <button
              onClick={copyEmail}
              className="group flex w-full items-center gap-3 rounded-lg border border-[#E5E4E1]
                px-4 py-3 text-left hover:border-[#1A1A18]/30 transition-colors"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E5E4E1] bg-[#F2F1EE]">
                <Mail className="h-4 w-4 text-[#6B6B67]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] tracking-wide text-[#6B6B67]">Primary email</p>
                <p className="text-sm text-[#1A1A18] truncate">nqhung394.work@gmail.com</p>
              </div>
              <span className="shrink-0 text-[#6B6B67] group-hover:text-[#1A1A18] transition-colors">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </span>
            </button>

            {/* socials */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.12em] text-[#6B6B67] mb-3">Find me on</p>
              <div className="flex flex-wrap gap-2">
                {SOCIALS.map(({ href, Icon, label }) => (
                  <a
                    key={href} href={href} aria-label={label}
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-[#6B6B67]
                      border border-[#E5E4E1] rounded-lg px-3.5 py-2
                      hover:text-[#1A1A18] hover:border-[#1A1A18]/30 hover:-translate-y-0.5 transition-all"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* availability */}
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs text-[#6B6B67]">Available for UI/UX internship</span>
            </div>
          </motion.div>

          {/* right: form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          >
            <form
              className="space-y-4 border border-[#E5E4E1] rounded-xl p-6 bg-[#FAFAF8]"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget as HTMLFormElement);
                const name    = encodeURIComponent(String(fd.get("name")    ?? ""));
                const email   = encodeURIComponent(String(fd.get("email")   ?? ""));
                const subject = encodeURIComponent(String(fd.get("subject") ?? "Project inquiry"));
                const message = encodeURIComponent(String(fd.get("message") ?? ""));
                window.location.href = `mailto:nqhung394.work@gmail.com?subject=${subject}&body=From:%20${name}%20<${email}>%0D%0A%0D%0A${message}`;
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <FloatField label="Your name" name="name" type="text" placeholder="John Doe" required />
                <FloatField label="Your email" name="email" type="email" placeholder="john@example.com" required />
              </div>
              <FloatField label="Subject" name="subject" type="text" placeholder="Project inquiry" />
              <FloatTextarea label="Message" name="message" placeholder="Hello, I'd like to discuss..." required />

              <button
                type="submit"
                className="w-full h-10 rounded-lg border border-[#1A1A18] bg-[#1A1A18] font-mono text-xs tracking-wide text-[#FAFAF8]
                  hover:bg-[#B87355] hover:border-[#B87355] transition-colors duration-200
                  inline-flex items-center justify-center gap-2"
              >
                <Send className="h-3.5 w-3.5" />
                Send message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
