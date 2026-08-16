import dashboardAdmin from "@/assets/dashboard-admin.jpg";
import dashboardStudent from "@/assets/dashboard-student.jpg";
import dashboardTeacher from "@/assets/dashboard-teacher.jpg";

import { Reveal, SectionHeading } from "./primitives";

const screens = [
  {
    title: "Admin Dashboard",
    copy: "Attendance, fees, admissions and staff performance in a single live view.",
    image: dashboardAdmin,
    alt: "Nexora admin dashboard with attendance overview and top performing students",
  },
  {
    title: "Teacher Dashboard",
    copy: "Assigned classes, note uploads and a quiz builder that writes itself.",
    image: dashboardTeacher,
    alt: "Nexora teacher dashboard with class list, note uploads and quiz builder",
  },
  {
    title: "Student Dashboard",
    copy: "Video lectures, subject progress, brain games and study streaks.",
    image: dashboardStudent,
    alt: "Nexora student dashboard with video lecture player and subject progress rings",
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="relative section-pad">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Dashboard Showcase"
          title={
            <>
              Designed to feel <span className="text-gradient">effortless</span> on day one
            </>
          }
          subtitle="Real screens from the Nexora platform — the same interface your campus goes live with."
        />

        <div className="mt-16 space-y-20">
          {screens.map((screen, index) => (
            <Reveal key={screen.title}>
              <div
                className={`flex flex-col items-center gap-10 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-1/3">
                  <h3 className="text-2xl font-semibold sm:text-3xl">{screen.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {screen.copy}
                  </p>
                </div>
                <div className="w-full lg:w-2/3">
                  <div className="glass rounded-t-2xl p-2 sm:p-3">
                    <img
                      src={screen.image}
                      alt={screen.alt}
                      loading="lazy"
                      width={1600}
                      height={1008}
                      className="w-full rounded-xl border border-glass-border"
                    />
                  </div>
                  <div className="mx-auto h-3.5 w-[112%] max-w-none rounded-b-[1.25rem] border border-glass-border bg-gradient-to-b from-muted to-background" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}