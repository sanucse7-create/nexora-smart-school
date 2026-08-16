import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Glow, Reveal, SectionHeading } from "./primitives";

const details = [
  { icon: Mail, label: "Email", value: "nexoradigicampus@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8099327033" },
  { icon: MapPin, label: "Location", value: "Assam , India" },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <section id="contact" className="relative section-pad">
      <Glow className="right-[-8rem] bottom-0 size-[28rem]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Book a live demo for <span className="text-gradient">your campus</span>
            </>
          }
          subtitle="Tell us about your school and we'll walk you through Nexora on a 30-minute call, using your own class structure."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form
              className="glass rounded-[1.75rem] p-7 sm:p-9"
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                setSubmitting(true);
                window.setTimeout(() => {
                  setSubmitting(false);
                  form.reset();
                  toast.success("Demo request received", {
                    description: "Our team will reach out within one working day.",
                  });
                }, 700);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Meera Raghavan" />
                <Field label="School name" name="school" placeholder="Greenwood International" />
                <Field
                  label="Work email"
                  name="email"
                  type="email"
                  placeholder="principal@school.edu"
                />
                <Field label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="students"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Number of students
                </label>
                <select
                  id="students"
                  name="students"
                  defaultValue="500-1500"
                  className="mt-2 w-full rounded-xl border border-glass-border bg-input px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                >
                  <option value="under-500">Under 500</option>
                  <option value="500-1500">500 – 1,500</option>
                  <option value="1500-4000">1,500 – 4,000</option>
                  <option value="4000-plus">4,000+ / multi-branch</option>
                </select>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  What would you like to see?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="We want to replace our attendance registers and start using AI report cards this term."
                  className="mt-2 w-full resize-none rounded-xl border border-glass-border bg-input px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                <Send className="size-4" />
                {submitting ? "Sending…" : "Request my demo"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {details.map((detail) => (
                <div key={detail.label} className="glass glass-hover rounded-2xl p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-aurora">
                    <detail.icon className="size-4 text-primary-foreground" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-sm font-medium">{detail.value}</p>
                </div>
              ))}
              <div className="glass rounded-2xl p-6">
                <p className="text-sm font-semibold">Demo slots this week</p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Monday to Saturday, 9:00 AM – 7:00 PM IST. Sessions run on Google Meet with your
                  academic team.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-glass-border bg-input px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
      />
    </div>
  );
}