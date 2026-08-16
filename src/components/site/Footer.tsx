import { Link } from "@tanstack/react-router";
import { GraduationCap, Github, Linkedin, Twitter, Youtube } from "lucide-react";

const socials = [
  { icon: Twitter, label: "Nexora on X", href: "https://x.com" },
  { icon: Linkedin, label: "Nexora on LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "Nexora on YouTube", href: "https://youtube.com" },
  { icon: Github, label: "Nexora on GitHub", href: "https://github.com" },
];

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Admin Portal", href: "#features" },
      { label: "Teacher Portal", href: "#features" },
      { label: "Student Portal", href: "#features" },
      { label: "AI Features", href: "#ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-glass-border py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-brand">
                <GraduationCap className="size-5 text-primary-foreground" />
              </span>
              <span className="text-lg font-bold tracking-tight">Nexora</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              AI-powered School ERP and smart learning platform for administrators, teachers,
              students and parents.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-10 items-center justify-center rounded-xl border border-glass-border bg-glass transition-colors hover:border-primary/60 hover:text-secondary"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold">{column.title}</p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-glass-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexora Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              to="/support"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}