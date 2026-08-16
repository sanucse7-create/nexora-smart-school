import { Check, GraduationCap, ShieldHalf, Users } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Reveal, SectionHeading } from "./primitives";

const portals = [
  {
    id: "admin",
    label: "Admin Portal",
    icon: ShieldHalf,
    blurb: "Run the whole institution from one command center.",
    items: [
      "Dashboard Analytics",
      "Teacher Management",
      "Student Management",
      "Master Directories",
      "Subject Hubs",
      "Class Hubs",
      "Attendance Monitoring",
      "Admin Logs",
      "Notice Board",
      "Auto Teacher ID",
      "Auto Student Registration Number Generation",
    ],
  },
  {
    id: "teacher",
    label: "Teacher Portal",
    icon: Users,
    blurb: "Everything a teacher needs, minus the paperwork.",
    items: [
      "Assigned Classes",
      "Self Attendance",
      "Student Performance Analytics",
      "Upload Notes",
      "Upload Video Lectures",
      "Practice Questions",
      "Previous Year Papers",
      "Homework Management",
      "Quiz Creation",
      "Notice Board",
    ],
  },
  {
    id: "student",
    label: "Student Portal",
    icon: GraduationCap,
    blurb: "A learning home that adapts to every student.",
    items: [
      "Notes",
      "Video Lectures",
      "Practice Questions",
      "Quizzes",
      "Previous Year Papers",
      "Homework",
      "Attendance",
      "Performance Analytics",
      "Reading Zone",
      "Brain Games",
      "Subject Wise Learning",
      "Multilingual Support",
      "Notice Board",
      "AI Tutor",
      "AI Mentor",
    ],
  },
];

export function Features() {
  return (
    <section id="features" className="relative section-pad">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Three portals, <span className="text-gradient">one connected school</span>
            </>
          }
          subtitle="Every role gets a purpose-built workspace, sharing the same real-time data layer."
        />

        <Reveal delay={0.1} className="mt-12">
          <Tabs defaultValue="admin">
            <TabsList className="glass mx-auto flex h-auto w-full max-w-xl flex-wrap justify-center gap-1 rounded-2xl p-1.5">
              {portals.map((portal) => (
                <TabsTrigger
                  key={portal.id}
                  value={portal.id}
                  className="flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold text-muted-foreground data-[state=active]:bg-gradient-brand data-[state=active]:text-primary-foreground data-[state=active]:shadow-[var(--shadow-glow)]"
                >
                  {portal.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {portals.map((portal) => (
              <TabsContent key={portal.id} value={portal.id} className="mt-10">
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-aurora shadow-[var(--shadow-glow)]">
                    <portal.icon className="size-5 text-primary-foreground" />
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">{portal.label}</h3>
                  <p className="text-sm text-muted-foreground">{portal.blurb}</p>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {portal.items.map((item, index) => (
                    <Reveal key={item} delay={index * 0.03}>
                      <div className="glass glass-hover flex h-full items-center gap-3 rounded-2xl px-5 py-4">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-glass-border bg-glass">
                          <Check className="size-3.5 text-secondary" />
                        </span>
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}