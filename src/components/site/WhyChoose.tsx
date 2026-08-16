import {
  Activity,
  BrainCircuit,
  Cloud,
  Gauge,
  Lock,
  MonitorSmartphone,
  Sparkle,
  Wallet,
} from "lucide-react";

import { Reveal, SectionHeading } from "./primitives";

const reasons = [
  { icon: Sparkle, title: "Easy to Use", copy: "Onboard a full staff room in an afternoon." },
  { icon: Cloud, title: "Cloud Based", copy: "Zero servers, zero downtime windows." },
  { icon: Lock, title: "Secure", copy: "Encrypted data, granular roles, full audit trails." },
  { icon: Gauge, title: "Fast", copy: "Sub-second page loads even on campus Wi-Fi." },
  { icon: Wallet, title: "Affordable", copy: "Per-student pricing that scales with you." },
  { icon: BrainCircuit, title: "AI Powered", copy: "Automation that compounds every term." },
  { icon: Activity, title: "Real-time Analytics", copy: "Numbers update the moment they change." },
  {
    icon: MonitorSmartphone,
    title: "Multi Device Support",
    copy: "Desktop, tablet and mobile, fully responsive.",
  },
];

export function WhyChoose() {
  return (
    <section id="why" className="relative section-pad">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Nexora"
          title={
            <>
              Built for schools that refuse to <span className="text-gradient">settle</span>
            </>
          }
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.05}>
              <div className="glass glass-hover h-full rounded-2xl p-6">
                <reason.icon className="size-6 text-secondary" />
                <h3 className="mt-4 text-base font-semibold">{reason.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{reason.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}