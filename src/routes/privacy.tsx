import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";

const title = "Privacy Policy — Nexora School Platform";
const description =
  "How Nexora collects, stores, encrypts and protects student, teacher and school data across its ERP and learning platform.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Nexora processes sensitive academic data on behalf of schools. This policy explains what we collect, why we collect it and the controls available to your institution."
      sections={[
        {
          heading: "Data we process",
          body: "We store the records your school enters: student and staff profiles, attendance, marks, homework submissions, fee status and uploaded learning material. We do not purchase or enrich data from third-party brokers.",
        },
        {
          heading: "Why we process it",
          body: "Data is processed solely to deliver the portals, analytics and AI features your school has enabled. Student data is never used to train third-party models, and it is never sold or shared for advertising.",
        },
        {
          heading: "Security controls",
          body: "All traffic is encrypted in transit with TLS 1.3 and encrypted at rest. Access is role-based, every administrative action is written to an immutable audit log, and encrypted backups run daily with 30-day retention.",
        },
        {
          heading: "Your school's rights",
          body: "The school remains the data controller. You can export, correct or delete records at any time, and a full data export is provided within 14 days of contract termination before deletion.",
        },
        {
          heading: "Contact",
          body: "Privacy questions and data requests go to privacy@nexora.school and receive a response within one working day.",
        },
      ]}
    />
  );
}