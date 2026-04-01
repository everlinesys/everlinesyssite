import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: 1/1/2024
        </p>

        <Section title="1. Information We Collect">
          <p className="mb-3 font-medium">a. Personal Information</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Account login details</li>
          </ul>

          <p className="mb-3 font-medium">b. Usage Data</p>
          <ul className="list-disc pl-6 mb-4">
            <li>App usage behavior</li>
            <li>Pages visited</li>
            <li>Device information (model, OS version)</li>
          </ul>

          <p className="mb-3 font-medium">c. Payment Information</p>
          <p>
            Payments are processed through third-party gateways (e.g., Razorpay,
            Stripe). We do not store your card or banking details.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc pl-6">
            <li>Provide and improve services</li>
            <li>Create and manage accounts</li>
            <li>Enable course access</li>
            <li>Process transactions</li>
            <li>Send updates and notifications</li>
          </ul>
        </Section>

        <Section title="3. Data Sharing and Disclosure">
          <p>
            We do not sell your personal data. We may share data with service
            providers (hosting, analytics, payment gateways) or when required by
            law.
          </p>
        </Section>

        <Section title="4. Data Security">
          <p>
            We implement appropriate security measures. However, no internet
            transmission is completely secure.
          </p>
        </Section>

        <Section title="5. Cookies and Tracking">
          <p>
            We may use cookies or similar technologies to improve user
            experience and analyze performance.
          </p>
        </Section>

        <Section title="6. Third-Party Services">
          <p>
            Our app may use third-party services such as analytics tools and
            payment gateways, which have their own privacy policies.
          </p>
        </Section>

        <Section title="7. Children’s Privacy">
          <p>
            We do not knowingly collect data from children under 13. If found, it
            will be deleted.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <ul className="list-disc pl-6">
            <li>Access your data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent</li>
          </ul>
          <p className="mt-2">
            Contact us at: <strong>contact@everlinesys.com</strong>
          </p>
        </Section>

        <Section title="9. App-Specific Policies">
          <p>
            This policy applies to all Everline Systems products. For app-specific
            details related to <strong>MyLearning</strong>, please refer to the
            dedicated policy page:
          </p>
          <p className="mt-2">
            <Link
              to="/my-learning/privacy-policy"
              className="text-blue-600 underline"
            >
              View MyLearning Privacy Policy
            </Link>
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this policy from time to time. Changes will be posted
            on this page.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>Email: contact@everlinesys.com</p>
          <p>Company: Everline Systems</p>
          <p>Address: Kakkanad, Kochi, Kerala, India</p>
        </Section>

        <p className="mt-10 text-sm text-gray-500">
          By using Everline Systems products, you agree to this Privacy Policy.
        </p>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}