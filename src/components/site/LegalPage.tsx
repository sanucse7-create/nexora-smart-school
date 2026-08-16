import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Footer } from "./Footer";
import { Glow } from "./primitives";

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Glow className="left-1/2 top-[-16rem] size-[36rem] -translate-x-1/2" />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-24 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Nexora
        </Link>
        <span className="mt-10 inline-flex rounded-full border border-glass-border bg-glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
          {eyebrow}
        </span>
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>
        <div className="mt-12 space-y-4">
          {sections.map((section) => (
            <section key={section.heading} className="glass rounded-2xl p-7">
              <h2 className="text-lg font-semibold">{section.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}