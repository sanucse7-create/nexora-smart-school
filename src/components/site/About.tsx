import { BarChart3, BrainCircuit, Cloud, Lock, MousePointerClick, Workflow } from "lucide-react";

import { Glow, Reveal, SectionHeading } from "./primitives";

const pillars = [
  {
    icon: BrainCircuit,
    title: "AI at the core",
    copy: "Models trained on academic patterns surface at-risk students, grade homework and draft report cards before you ask.",
  },
  {
    icon: Workflow,
    title: "Automation everywhere",
    copy: "Admission numbers, teacher IDs, timetables, fee reminders and notices run themselves once configured.",
  },
  {
    icon: Cloud,
    title: "Cloud-native campus",
    copy: "One workspace for every branch. Nothing to install, nothing to maintain, always the latest version.",
  },
  {
    icon: BarChart3,
    title: "Analytics you act on",
    copy: "Live dashboards on attendance, performance, syllabus coverage and fee health for every stakeholder.",
  },
  {
    icon: Lock,
    title: "Security by design",
    copy: "Role-based access, encrypted storage, audit logs on every admin action and daily automated backups.",
  },
  {
    icon: MousePointerClick,
    title: "Ease of use",
    copy: "Teachers get productive in a single period. No training manuals, no IT department required.",
  },
];

export function About() {
  return (
    <section id="about" className="relative section-pad">
      <Glow className="right-[-10rem] top-20 size-[30rem]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Nexora"
          title={
            <>
              From paperwork campus to <span className="text-gradient">digital smart campus</span>
            </>
          }
          subtitle="Nexora replaces registers, spreadsheets and disconnected apps with one intelligent platform. Administrators run operations, teachers teach, students learn — and AI quietly removes the busywork in between."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.07}>
              <div className="glass glass-hover h-full rounded-2xl p-7">
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-brand shadow-[var(--shadow-glow)]">
                  <pillar.icon className="size-5 text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{pillar.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}