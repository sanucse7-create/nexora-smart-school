import { motion } from "motion/react";
import { ArrowRight, CalendarCheck, Sparkles, ShieldCheck, Zap } from "lucide-react";

import dashboardAdmin from "@/assets/dashboard-admin.jpg";

import { Glow } from "./primitives";

const floatingCards = [
  {
    icon: Zap,
    title: "Attendance synced",
    detail: "Class 10A · 96.4% present",
    position: "-left-6 top-24 sm:-left-12",
    animation: "animate-float",
  },
  {
    icon: Sparkles,
    title: "AI report cards",
    detail: "312 generated in 4 seconds",
    position: "-right-4 bottom-24 sm:-right-10",
    animation: "animate-float-slow",
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-36 lg:pb-24 lg:pt-44">
      <Glow className="left-1/2 top-[-14rem] size-[42rem] -translate-x-1/2" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--brand)_22%,transparent),transparent_60%)]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-xs font-semibold tracking-wide text-secondary">
            <Sparkles className="size-3.5" />
            AI-powered School ERP + Smart Learning
          </span>
          <h1 className="mt-7 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            The Future of <span className="text-gradient">Smart Schools</span> Starts Here.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Manage your entire school with AI-powered automation, digital classrooms, analytics and
            learning—all in one platform.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Get Started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-glass-border bg-glass px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/60 sm:w-auto"
            >
              <CalendarCheck className="size-4" />
              Book Demo
            </a>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 text-secondary" />
            ISO-grade encryption · 14-day pilot for every campus
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="glass rounded-[2rem] p-2 sm:p-3">
            <img
              src={dashboardAdmin}
              alt="Nexora admin dashboard showing attendance analytics, fee collection and student performance"
              width={1600}
              height={1008}
              className="w-full rounded-[1.5rem] border border-glass-border"
            />
          </div>
          {floatingCards.map((card) => (
            <div
              key={card.title}
              className={`glass absolute hidden w-56 rounded-2xl p-4 lg:block ${card.position} ${card.animation}`}
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-aurora">
                <card.icon className="size-4 text-primary-foreground" />
              </span>
              <p className="mt-3 text-sm font-semibold">{card.title}</p>
              <p className="text-xs text-muted-foreground">{card.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}