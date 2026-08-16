import {
  Bot,
  CalendarClock,
  ClipboardCheck,
  FileBarChart,
  LineChart,
  MessageSquareCode,
  Sparkles,
  UserCog,
} from "lucide-react";

import { Glow, Reveal, SectionHeading } from "./primitives";

const aiFeatures = [
  {
    icon: Bot,
    title: "AI Teacher Assistant",
    copy: "Drafts lesson plans, worksheets and revision sets aligned to your syllabus.",
  },
  {
    icon: ClipboardCheck,
    title: "AI Homework Checker",
    copy: "Evaluates submissions, flags copied work and writes personalised feedback.",
  },
  {
    icon: CalendarClock,
    title: "AI Attendance Insights",
    copy: "Detects absence patterns and alerts mentors before habits harden.",
  },
  {
    icon: FileBarChart,
    title: "AI Report Card Generator",
    copy: "Turns term data into human-sounding remarks for an entire class in seconds.",
  },
  {
    icon: LineChart,
    title: "AI Performance Prediction",
    copy: "Forecasts board-exam outcomes and recommends intervention windows.",
  },
  {
    icon: Sparkles,
    title: "AI Study Planner",
    copy: "Builds daily plans from each student's pace, gaps and upcoming tests.",
  },
  {
    icon: MessageSquareCode,
    title: "AI Chat Assistant",
    copy: "A 24/7 doubt-solver for students and a quick-answer desk for parents.",
  },
  {
    icon: UserCog,
    title: "AI Personalized Learning",
    copy: "Adapts difficulty, language and media format to every learner profile.",
  },
];

export function AiFeatures() {
  return (
    <section id="ai" className="relative section-pad">
      <Glow className="left-[-12rem] top-32 size-[34rem]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Future AI Features"
          title={
            <>
              Intelligence built for <span className="text-gradient">every classroom</span>
            </>
          }
          subtitle="Nexora's AI layer keeps expanding — shipping to every plan as it launches, at no extra cost."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.06}>
              <div className="group glass glass-hover relative h-full overflow-hidden rounded-2xl p-6">
                <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-aurora opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
                <span className="flex size-11 items-center justify-center rounded-xl border border-glass-border bg-glass">
                  <feature.icon className="size-5 text-secondary" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}