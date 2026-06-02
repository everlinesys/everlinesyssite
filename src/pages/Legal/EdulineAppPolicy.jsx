import React from "react";
import { ShieldCheck, Lock, Database, Eye, FileText, Mail } from "lucide-react";

function Section({ number, title, children }) {
  return (
    <div className="bg-white border-4 border-slate-950 p-8 shadow-[8px_8px_0_0_rgba(15,23,42,1)]">
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

export default function EdulineAppPolicy() {
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

          <div className="
            lg:col-span-8
            bg-slate-950
            text-white
            border-4
            border-slate-950
            p-10
            shadow-[12px_12px_0_0_rgba(16,185,129,1)]
          ">

            <div className="
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
            ">
              <ShieldCheck size={14} />
              Privacy Policy
            </div>

            <h1 className="
              mt-8
              text-5xl
              md:text-7xl
              font-black
              leading-none
            ">
              YOUR DATA.
              <br />
              YOUR RIGHTS.
            </h1>

            <p className="
              mt-8
              text-xl
              text-slate-300
              max-w-2xl
            ">
              MyLearning by Eduline is committed to protecting
              your privacy and maintaining the security of your data.
            </p>

          </div>

          <div className="
            lg:col-span-4
            bg-emerald-400
            border-4
            border-slate-950
            p-8
            shadow-[12px_12px_0_0_rgba(15,23,42,1)]
          ">

            <div className="text-xs uppercase font-black">
              Effective Date
            </div>

            <div className="mt-4 text-5xl font-black">
              2024
            </div>

            <div className="mt-6 text-lg font-bold">
              Operated by
              <br />
              Everline Systems
            </div>

          </div>

        </div>

        {/* Sections */}

        <div className="grid gap-6">

          <Section number="01" title="Information We Collect">

            <div>
              <h4 className="font-black mb-2">Personal Information</h4>
              <ul className="list-disc pl-6">
                <li>Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Account Credentials</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-2">Usage Data</h4>
              <ul className="list-disc pl-6">
                <li>Course Activity</li>
                <li>Pages Visited</li>
                <li>Device Information</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-2">Payment Information</h4>
              <p>
                Payments are processed through third-party gateways.
                We do not store card or banking details.
              </p>
            </div>

          </Section>

          <Section number="02" title="How We Use Information">

            <ul className="list-disc pl-6">
              <li>Create and manage accounts</li>
              <li>Provide course access</li>
              <li>Process transactions</li>
              <li>Improve platform performance</li>
              <li>Send important updates and notifications</li>
            </ul>

          </Section>

          <Section number="03" title="Data Sharing">

            <p>
              We do not sell personal information. Data may be
              shared with infrastructure providers, payment processors,
              analytics services, and legal authorities when required.
            </p>

          </Section>

          <Section number="04" title="Security">

            <div className="flex gap-3 items-center">
              <Lock size={20} />
              <span>
                We implement industry-standard security measures
                to protect your information.
              </span>
            </div>

          </Section>

          <Section number="05" title="Cookies & Tracking">

            <p>
              Cookies and similar technologies may be used to
              improve user experience and platform performance.
            </p>

          </Section>

          <Section number="06" title="Third-Party Services">

            <div className="flex gap-3 items-center">
              <Database size={20} />
              <span>
                Analytics tools, hosting providers, payment gateways,
                and communication services may process limited data.
              </span>
            </div>

          </Section>

          <Section number="07" title="Children's Privacy">

            <p>
              We do not knowingly collect personal information
              from children under 13 years of age.
            </p>

          </Section>

          <Section number="08" title="Your Rights">

            <div className="space-y-2">
              <div className="flex gap-3">
                <Eye size={18} />
                Access your information
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

          </Section>

          <Section number="09" title="Policy Updates">

            <p>
              This policy may be updated periodically.
              Updates will be published on this page.
            </p>

          </Section>

          <Section number="10" title="Contact">

            <div className="space-y-2">

              <div className="flex gap-3 items-center">
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

        <div className="
          mt-10
          bg-slate-950
          text-white
          border-4
          border-slate-950
          p-8
          shadow-[8px_8px_0_0_rgba(16,185,129,1)]
        ">
          <div className="text-emerald-400 text-xs uppercase font-black">
            Agreement
          </div>

          <p className="mt-4 text-xl font-bold">
            By using MyLearning, you agree to this Privacy Policy.
          </p>
        </div>

      </div>
    </section>
  );
}