import { Quote } from "lucide-react";

import { Reveal, SectionHeading } from "./primitives";

const testimonials = [
  {
    quote:
      "Our admission cycle used to take three weeks of manual paperwork. With Nexora we closed 640 admissions in four days, and every registration number generated itself.",
    name: "Dr. Meera Raghavan",
    role: "Principal, Greenwood International",
  },
  {
    quote:
      "I upload one lecture and Nexora turns it into notes, practice questions and a quiz. I get back nearly six hours every week to actually teach.",
    name: "Arvind Nair",
    role: "Physics Teacher, Riverdale Public School",
  },
  {
    quote:
      "The study planner tells me exactly what to revise each evening. My chemistry score moved from 61 to 88 in two terms.",
    name: "Ishita Sharma",
    role: "Class 11 Student, Heritage Valley",
  },
  {
    quote:
      "I can see attendance, homework and test results the same day instead of waiting for a parent-teacher meeting. It has ended the guesswork completely.",
    name: "Rohit Bansal",
    role: "Parent, Sunrise Global Campus",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative section-pad">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved across the <span className="text-gradient">whole campus</span>
            </>
          }
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <figure className="glass glass-hover flex h-full flex-col justify-between rounded-2xl p-7">
                <Quote className="size-6 text-secondary" />
                <blockquote className="mt-5 text-sm leading-relaxed text-foreground/90 sm:text-base">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-brand text-sm font-bold text-primary-foreground">
                    {item.name
                      .split(" ")
                      .slice(-2)
                      .map((word) => word[0])
                      .join("")}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{item.name}</span>
                    <span className="block text-xs text-muted-foreground">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}