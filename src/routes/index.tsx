import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { AiFeatures } from "@/components/site/AiFeatures";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Features } from "@/components/site/Features";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Pricing } from "@/components/site/Pricing";
import { Showcase } from "@/components/site/Showcase";
import { Testimonials } from "@/components/site/Testimonials";
import { Trusted } from "@/components/site/Trusted";
import { WhyChoose } from "@/components/site/WhyChoose";

const title = "Nexora — AI-Powered School ERP & Smart Learning Platform";
const description =
  "Run your entire school on Nexora: AI automation, digital classrooms, attendance, analytics and learning for admins, teachers and students.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Trusted />
        <About />
        <Features />
        <AiFeatures />
        <Showcase />
        <WhyChoose />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
