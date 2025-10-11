// components/Section.tsx
import React from "react";

export default function Section({
  id,
  className = "",
  children,
}: React.PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-5 md:px-8
                  scroll-mt-28 md:scroll-mt-32 ${className}`}
    >
      {children}
    </section>
  );
}
