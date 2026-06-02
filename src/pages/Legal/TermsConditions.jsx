import React from "react";
import {
  Scale,
  Shield,
  CreditCard,
  Ban,
  FileText,
  AlertTriangle,
  Mail,
} from "lucide-react";

function Section({ number, title, children }) {
  return (
    <div
      className="
        bg-white
        border-4
        border-slate-950
        p-8
        shadow-[8px_8px_0_0_rgba(15,23,42,1)]
      "
    >
      <div className="text-xs uppercase font-black tracking-widest text-emerald-600">
        Section {number}
      </div>

      <h2 className="mt-3 text-3xl font-black text-slate-950">
        {title}
      </h2>

      <div className="mt-6 text-slate-700 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}

export default function TermsConditions() {
  return (
    <section className="relative min-h-screen bg-[#f7faf8] overflow-hidden py-24">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16,185,129,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16,185,129,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-emerald-300/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Hero */}

        <div className="grid lg:grid-cols-12 gap-6 mb-10">

          <div
            className="
              lg:col-span-8
              bg-slate-950
              text-white
              border-4
              border-slate-950
              p-10
              shadow-[12px_12px_0_0_rgba(16,185,129,1)]
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-2
                bg-emerald-400
                text-slate-950
                font-black
                uppercase
                text-xs
              "
            >
              <Scale size={14} />
              Terms & Conditions
            </div>

            <h1
              className="
                mt-8
                text-5xl
                md:text-7xl
                font-black
                leading-none
              "
            >
              TERMS.
              <br />
              RULES.
              <br />
              <span className="text-emerald-400">
                RESPONSIBILITY.
              </span>
            </h1>

            <p
              className="
                mt-8
                text-xl
                text-slate-300
                max-w-2xl
              "
            >
              These Terms govern your use of Everline Systems
              products, platforms and services.
            </p>
          </div>

          <div
            className="
              lg:col-span-4
              bg-emerald-400
              border-4
              border-slate-950
              p-8
              shadow-[12px_12px_0_0_rgba(15,23,42,1)]
            "
          >
            <div className="text-xs uppercase font-black">
              Effective Date
            </div>

            <div className="mt-4 text-5xl font-black">
              2024
            </div>

            <div className="mt-6 text-lg font-bold">
              Everline Systems
            </div>

            <div className="mt-2 text-slate-700">
              Build Once. Run Forever.
            </div>
          </div>

        </div>

        {/* Sections */}

        <div className="grid gap-6">

          <Section number="01" title="Acceptance of Terms">
            <p>
              By accessing or using any Everline Systems product,
              website or application, you agree to be bound by
              these Terms & Conditions.
            </p>
          </Section>

          <Section number="02" title="Use of Services">

            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate account information</li>
              <li>Maintain account security</li>
              <li>Use services responsibly</li>
              <li>Comply with applicable laws</li>
            </ul>

          </Section>

          <Section number="03" title="User Accounts">

            <div className="flex gap-3 items-center">
              <Shield size={20} />
              <span>
                You are responsible for all activity
                conducted through your account.
              </span>
            </div>

            <p>
              Everline Systems reserves the right to suspend
              or terminate accounts violating these terms.
            </p>

          </Section>

          <Section number="04" title="Payments & Refunds">

            <div className="flex gap-3 items-center">
              <CreditCard size={20} />
              <span>
                Payments are processed through approved
                third-party payment providers.
              </span>
            </div>

            <p>
              Refund policies may vary depending on the
              specific product, service or course provider.
            </p>

          </Section>

          <Section number="05" title="Intellectual Property">

            <div className="flex gap-3 items-center">
              <FileText size={20} />
              <span>
                All content, software, designs, videos,
                documents and materials remain the property
                of Everline Systems or their respective owners.
              </span>
            </div>

          </Section>

          <Section number="06" title="Prohibited Activities">

            <ul className="list-disc pl-6 space-y-2">
              <li>Unauthorized content sharing</li>
              <li>Attempting to disrupt services</li>
              <li>Reverse engineering software</li>
              <li>Illegal or abusive usage</li>
            </ul>

          </Section>

          <Section number="07" title="Limitation of Liability">

            <div className="flex gap-3 items-center">
              <AlertTriangle size={20} />
              <span>
                Everline Systems shall not be liable for
                indirect, incidental or consequential damages
                resulting from service usage.
              </span>
            </div>

          </Section>

          <Section number="08" title="Termination">

            <div className="flex gap-3 items-center">
              <Ban size={20} />
              <span>
                Access may be suspended or terminated if
                users violate these Terms.
              </span>
            </div>

          </Section>

          <Section number="09" title="Changes to Terms">

            <p>
              These Terms may be updated periodically.
              Continued use of services constitutes acceptance
              of any revised Terms.
            </p>

          </Section>

          <Section number="10" title="Contact Information">

            <div className="space-y-2">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                contact@everlinesys.com
              </div>

              <p>
                Everline Systems
                <br />
                Kakkanad, Kochi
                <br />
                Kerala, India
              </p>

            </div>

          </Section>

        </div>

        {/* Agreement Footer */}

        <div
          className="
            mt-10
            bg-slate-950
            text-white
            border-4
            border-slate-950
            p-8
            shadow-[8px_8px_0_0_rgba(16,185,129,1)]
          "
        >
          <div className="text-emerald-400 text-xs uppercase font-black">
            Agreement
          </div>

          <p className="mt-4 text-xl font-bold">
            By using Everline Systems products and services,
            you acknowledge and agree to these Terms & Conditions.
          </p>

        </div>

      </div>
    </section>
  );
}