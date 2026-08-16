import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

import { Reveal, SectionHeading } from "./primitives";

const plans = [
  {
    name: "Starter",
    price: "₹0",
    unit: "per institute / month",
    blurb: "For single-branch schools digitising their first academic year.",
    features: [
      "Admin, teacher and student portals",
      "Attendance and homework management",
      "Notes and video lecture library",
      "Auto ID and registration numbers",
      "Email support within 24 hours",
    ],
    cta: "Start free pilot",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₹299",
    unit: "per institute / month",
    blurb: "For growing campuses that want AI doing the heavy lifting.",
    features: [
      "Everything in Starter",
      "AI homework checker and report cards",
      "Performance prediction and study planner",
      "Quizzes, practice sets and previous year papers",
      "Reading zone, brain games, multilingual mode",
      "Priority support with a named success manager",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "multi-branch trusts",
    blurb: "For groups running several campuses under one board.",
    features: [
      "Everything in Professional",
      "Unlimited branches with consolidated analytics",
      "SSO, custom roles and advanced audit logs",
      "Data migration and onsite staff training",
      "Custom integrations and API access",
      "99.9% uptime SLA",
    ],
    cta: "Talk to sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative section-pad">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Transparent plans, <span className="text-gradient">no surprise invoices</span>
            </>
          }
          subtitle="Billed annually. Every plan includes onboarding, unlimited staff accounts and free access to new AI features as they ship."
        />

        <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08}>
              <div
                className={cn(
                  "glass relative h-full rounded-[1.75rem] p-8",
                  plan.highlighted &&
                    "border-primary/50 shadow-[var(--shadow-glow)] lg:-translate-y-4 lg:p-9",
                )}
              >
                {plan.highlighted ? (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                    Most popular
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.blurb}</p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-xs text-muted-foreground">{plan.unit}</span>
                </p>
                <a
                  href="#contact"
                  className={cn(
                    "mt-7 flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all",
                    plan.highlighted
                      ? "bg-gradient-brand text-primary-foreground hover:-translate-y-0.5"
                      : "border border-glass-border bg-glass hover:border-primary/60",
                  )}
                >
                  {plan.cta}
                </a>
                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}