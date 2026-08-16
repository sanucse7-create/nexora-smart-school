import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";

const title = "Support — Nexora School Platform";
const description =
  "Reach the Nexora support team: response times by plan, onboarding help, training resources and escalation contacts.";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <LegalPage
      eyebrow="Help centre"
      title="Support"
      intro="Every Nexora school gets a real human on the other side. Here is how to reach us and what to expect."
      sections={[
        {
          heading: "Response times",
          body: "Starter: email support with a 24-hour response, Monday to Saturday. Professional: priority chat plus a named success manager. Enterprise: phone escalation and a 99.9% uptime SLA.",
        },
        {
          heading: "Onboarding and migration",
          body: "Data migration, grading setup and two live training sessions are included with every plan. Most schools are fully live within 7 to 10 days.",
        },
        {
          heading: "Training resources",
          body: "The in-app help centre carries short role-based walkthroughs for administrators, teachers and students, plus printable quick-start cards for staff rooms.",
        },
        {
          heading: "Reach us",
          body: "Email support@nexora.school, call +91 80 4718 2200 between 9:00 AM and 7:00 PM IST, or raise a ticket from the help icon inside any portal.",
        },
      ]}
    />
  );
}