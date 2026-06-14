import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  Database,
  Eye,
  FileText,
  Mail,
  ArrowUpRight,
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
      <div className="text-xs uppercase font-semibold tracking-widest text-emerald-600">
        Section {number}
      </div>

      <h2 className="mt-3 text-3xl font-semibold text-slate-950">
        {title}
      </h2>

      <div className="mt-6 text-slate-700 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}

export default function Policy() {
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
                font-semibold
                uppercase
                text-xs
              "
            >
              <ShieldCheck size={14} />
              Privacy Policy
            </div>

            <h1
              className="
                mt-8
                text-5xl
                md:text-7xl
                font-semibold
                leading-none
              "
            >
              PRIVACY.
              <br />
              SECURITY.
              <br />
              <span className="text-emerald-400">
                TRANSPARENCY.
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
              Everline Systems is committed to protecting your
              information and maintaining transparency across
              all products and services.
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

            <div className="text-xs uppercase font-semibold">
              Effective Date
            </div>

            <div className="mt-4 text-5xl font-semibold">
              2024
            </div>

            <div className="mt-6 text-lg font-semibold">
              Everline Systems
            </div>

            <div className="mt-2 text-slate-700">
              Global Digital Products & Services
            </div>

          </div>

        </div>

        {/* Policy Sections */}

        <div className="grid gap-6">

          <Section number="01" title="Information We Collect">

            <div>
              <h4 className="font-semibold mb-2">
                Personal Information
              </h4>

              <ul className="list-disc pl-6">
                <li>Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Account Credentials</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Usage Data
              </h4>

              <ul className="list-disc pl-6">
                <li>Usage Behavior</li>
                <li>Pages Visited</li>
                <li>Device Information</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Payment Information
              </h4>

              <p>
                Payments are processed through third-party
                providers such as Razorpay and Stripe.
                We do not store card or banking details.
              </p>
            </div>

          </Section>

          <Section number="02" title="How We Use Information">

            <ul className="list-disc pl-6">
              <li>Provide and improve services</li>
              <li>Create and manage accounts</li>
              <li>Enable product access</li>
              <li>Process transactions</li>
              <li>Send updates and notifications</li>
            </ul>

          </Section>

          <Section number="03" title="Data Sharing">

            <p>
              We do not sell personal information.
              Data may be shared with hosting providers,
              analytics services, payment processors,
              and authorities when legally required.
            </p>

          </Section>

          <Section number="04" title="Data Security">

            <div className="flex gap-3 items-center">
              <Lock size={20} />
              <span>
                Industry-standard security measures are
                implemented to protect user information.
              </span>
            </div>

          </Section>

          <Section number="05" title="Cookies & Tracking">

            <p>
              Cookies and similar technologies may be used
              to improve user experience, performance,
              and analytics reporting.
            </p>

          </Section>

          <Section number="06" title="Third-Party Services">

            <div className="flex gap-3 items-center">
              <Database size={20} />
              <span>
                Third-party services may include hosting,
                analytics, communication and payment providers.
              </span>
            </div>

          </Section>

          <Section number="07" title="Children's Privacy">

            <p>
              We do not knowingly collect information from
              children under the age of 13. Such information
              will be removed if discovered.
            </p>

          </Section>

          <Section number="08" title="Your Rights">

            <div className="space-y-3">

              <div className="flex gap-3">
                <Eye size={18} />
                Access your personal information
              </div>

              <div className="flex gap-3">
                <FileText size={18} />
                Request corrections or deletion
              </div>

              <div className="flex gap-3">
                <ShieldCheck size={18} />
                Withdraw consent where applicable
              </div>

            </div>

            <p className="mt-4 font-semibold">
              contact@everlinesys.com
            </p>

          </Section>

          <Section number="09" title="App-Specific Policies">

            <p>
              Some products may have additional privacy
              requirements and disclosures.
            </p>

            <Link
              to="/my-learning/privacy-policy"
              className="
                inline-flex
                items-center
                gap-2
                mt-4
                bg-emerald-400
                border-4
                border-slate-950
                px-6
                py-3
                font-semibold
                uppercase
                shadow-[4px_4px_0_0_rgba(15,23,42,1)]
              "
            >
              MyLearning Privacy Policy
              <ArrowUpRight size={18} />
            </Link>

          </Section>

          <Section number="10" title="Policy Updates">

            <p>
              This Privacy Policy may be updated periodically.
              Any changes will be published on this page.
            </p>

          </Section>

          <Section number="11" title="Contact Information">

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

        {/* Footer Note */}

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

          <div className="text-emerald-400 text-xs uppercase font-semibold">
            Agreement
          </div>

          <p className="mt-4 text-xl font-semibold">
            By using Everline Systems products and services,
            you agree to this Privacy Policy.
          </p>

        </div>

      </div>
    </section>
  );
}