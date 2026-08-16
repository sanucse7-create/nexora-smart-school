import { Counter, Reveal } from "./primitives";

const schools = [
  "Greenwood International",
  "St. Aloysius Academy",
  "Riverdale Public School",
  "Sunrise Global Campus",
  "Heritage Valley School",
  "Oakridge Smart Campus",
];

const stats = [
  { value: 0, suffix: "", label: "" },
  { value: 0, suffix: "", label: "" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Platform uptime" },
];

export function Trusted() {
  return (
    <section className="border-y border-glass-border py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Trusted by forward-thinking schools
          </p>
        </Reveal>

        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {[...schools, ...schools].map((school, index) => (
              <div
                key={`${school}-${index}`}
                className="glass flex items-center gap-3 rounded-xl px-5 py-3"
              >
                <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-brand text-[11px] font-bold text-primary-foreground">
                  {school
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")}
                </span>
                <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                  {school}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="glass glass-hover rounded-2xl p-7 text-center">
                <p className="text-4xl font-bold text-gradient sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}