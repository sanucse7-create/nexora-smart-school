import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";

const title = "Terms of Service — Nexora School Platform";
const description =
  "The terms covering subscriptions, acceptable use, uptime commitments and data ownership for schools using Nexora.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These terms govern your school's use of the Nexora platform, including the admin, teacher and student portals."
      sections={[
        {
          heading: "Subscriptions and billing",
          body: "Plans are billed annually based on enrolled student count at the start of each academic year. Mid-year additions are pro-rated on the next invoice.",
        },
        {
          heading: "Acceptable use",
          body: "Accounts are issued to named individuals and may not be shared. Uploading content you do not have the right to distribute, or attempting to access another school's workspace, will result in suspension.",
        },
        {
          heading: "Service availability",
          body: "We target 99.9% monthly uptime, excluding scheduled maintenance announced at least 72 hours in advance. Enterprise agreements include service credits for missed targets.",
        },
        {
          heading: "Data ownership",
          body: "Your school owns all content and records it uploads. Nexora holds a limited licence only to operate and support the service on your behalf.",
        },
        {
          heading: "Termination",
          body: "Either party may end the agreement at the close of a subscription term with 30 days' notice. Data exports remain available for 14 days after termination.",
        },
      ]}
    />
  );
}