import React from "react";

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: 1/1/2024
        </p>

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using this application, you agree to be bound by
            these Terms. If you do not agree, please do not use the platform.
          </p>
        </Section>

        <Section title="2. Use of Services">
          <ul className="list-disc pl-6">
            <li>You must provide accurate account information</li>
            <li>You are responsible for maintaining account security</li>
            <li>You agree not to misuse the platform</li>
          </ul>
        </Section>

        <Section title="3. User Accounts">
          <p>
            You are responsible for all activities under your account. We reserve
            the right to suspend or terminate accounts that violate our terms.
          </p>
        </Section>

        <Section title="4. Payments and Refunds">
          <p>
            Payments (if applicable) are processed through third-party providers.
            Refund policies may vary depending on the service or instructor.
          </p>
        </Section>

        <Section title="5. Intellectual Property">
          <p>
            All content, including videos, text, and materials, is owned by
            Everline Systems or its creators and is protected by applicable
            copyright laws.
          </p>
        </Section>

        <Section title="6. Prohibited Activities">
          <ul className="list-disc pl-6">
            <li>Unauthorized sharing of content</li>
            <li>Attempting to hack or disrupt the platform</li>
            <li>Using the platform for illegal purposes</li>
          </ul>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>
            Everline Systems is not liable for any indirect or consequential
            damages arising from the use of the platform.
          </p>
        </Section>

        <Section title="8. Termination">
          <p>
            We may suspend or terminate your access at any time if you violate
            these Terms.
          </p>
        </Section>

        <Section title="9. Changes to Terms">
          <p>
            We may update these Terms from time to time. Continued use of the
            platform means you accept the updated Terms.
          </p>
        </Section>

          <Section title="10. Contact Us">
          <p>Email: contact@everlinesys.com</p>
          <p>Company: Everlinesys</p>
          <p>Address: Everlinesys, Kakkanad, Kochi, Kerala</p>
        </Section>

        <p className="mt-10 text-sm text-gray-500">
          By using this application, you agree to these Terms & Conditions.
        </p>
      </div>
    </div>
  );
}