import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Reveal, SectionHeading } from "./primitives";

const faqs = [
  {
    q: "How long does it take to get our school live on Nexora?",
    a: "Most single-branch schools go live in 7 to 10 days. We import your student, staff and class data, configure your grading structure and run two training sessions before launch.",
  },
  {
    q: "Can we migrate data from our existing ERP or spreadsheets?",
    a: "Yes. Our team handles migration from Excel, Google Sheets, Tally exports and most legacy school ERPs. Historical attendance, marks and fee records are preserved.",
  },
  {
    q: "Do teachers need technical training?",
    a: "No. The teacher portal is built around daily classroom tasks, and every action is two clicks deep. We still include live onboarding sessions and a recorded library for new joiners.",
  },
  {
    q: "How does the AI grading and report card generation work?",
    a: "Nexora evaluates submissions against the answer key and rubric you set, then drafts remarks from actual performance data. Teachers review and approve before anything is published.",
  },
  {
    q: "Is our student data secure and privacy compliant?",
    a: "All data is encrypted in transit and at rest, access is role-based, every admin action is logged, and backups run daily. Data is never used to train third-party models.",
  },
  {
    q: "Does Nexora work on mobile phones and tablets?",
    a: "Every portal is fully responsive and works in any modern browser on phones, tablets, laptops and smart boards — with no separate app installation required.",
  },
  {
    q: "Can we manage multiple branches under one account?",
    a: "The Enterprise plan supports unlimited branches with consolidated trust-level analytics while keeping each campus's operations independent.",
  },
  {
    q: "What happens if the internet goes down during class?",
    a: "Attendance and quiz entries are cached locally in the browser and sync automatically once the connection is restored, so nothing is lost.",
  },
  {
    q: "Which languages does the student portal support?",
    a: "Nexora ships with English, Hindi, Bengali, Tamil, Telugu, Marathi and Kannada, and additional regional languages can be enabled on request.",
  },
  {
    q: "What does support look like after we go live?",
    a: "Starter includes email support with a 24-hour response. Professional adds priority chat and a named success manager. Enterprise adds a 99.9% uptime SLA and phone escalation.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative section-pad">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions schools ask <span className="text-gradient">before switching</span>
            </>
          }
        />
        <Reveal delay={0.1} className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={`item-${index}`}
                className="glass rounded-2xl border-glass-border px-6"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}