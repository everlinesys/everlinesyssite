import { CheckCircle2, MessageSquare, LineChart, ShieldCheck, Zap } from "lucide-react";

export default function ProductIntro() {
  return (
    <section className="bg-[#f4f4f0] py-20 lg:py-32 border-b-4 border-slate-900 font-sans selection:bg-emerald-400 selection:text-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= MAIN PRODUCT FEATURE PANEL: EDULINE ================= */}
        <div className="mb-24 bg-white border-4 border-slate-900 p-8 lg:p-12 shadow-[12px_12px_0_0_rgba(15,23,42,1)] grid lg:grid-cols-12 gap-12 items-center relative overflow-hidden">
          {/* Accent background tag */}
          <div className="absolute right-0 top-0 bg-emerald-400 text-slate-900 font-black text-xs px-4 py-1.5 uppercase border-b-2 border-l-2 border-slate-900">
            Featured System
          </div>

          {/* Text content panel (Spans 7 columns) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-400 border-2 border-slate-900 text-slate-900 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0_0_rgba(15,23,42,1)] mb-8 -rotate-1">
              <Zap size={14} strokeWidth={3} />
              <span>New Release</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-6">
              Introducing Eduline <br />
              <span className="inline-block bg-slate-900 text-emerald-400 px-3 py-1 mt-2 transform rotate-1 border-2 border-slate-900">
                Brand Your Teaching
              </span>
            </h2>

            <p className="text-lg text-slate-800 font-medium leading-relaxed mb-8 max-w-xl border-l-4 border-slate-900 pl-4">
              Launch your own white-label learning platform. Sell courses, manage students,
              and scale your education business without touching a single line of code.
            </p>

            {/* Asymmetric Mini Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { text: "White-label platform", icon: <ShieldCheck className="text-slate-900" size={18} /> },
                { text: "Student management", icon: <CheckCircle2 className="text-slate-900" size={18} /> },
                { text: "Anti-piracy delivery", icon: <ShieldCheck className="text-slate-900" size={18} /> },
                { text: "Real-time analytics", icon: <LineChart className="text-slate-900" size={18} /> },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 p-3 bg-slate-50 border-2 border-slate-900 shadow-[3px_3px_0_0_rgba(15,23,42,1)] font-bold text-slate-800 text-sm hover:bg-emerald-50 transition-colors"
                >
                  <div className="p-1 bg-emerald-400 border border-slate-900 shadow-[1px_1px_0_0_rgba(0,0,0,1)]">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://eduline.everlinesys.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 bg-slate-900 text-white font-black uppercase tracking-wider text-sm border-2 border-slate-900 shadow-[4px_4px_0_0_rgba(52,211,153,1)] hover:shadow-[1px_1px_0_0_rgba(52,211,153,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Visit Eduline Platform →
              </a>

              <a
                href="https://eduline.everlinesys.com"
                className="inline-flex items-center justify-center px-6 py-4 bg-white text-slate-900 border-2 border-slate-900 font-black uppercase tracking-wider text-sm shadow-[4px_4px_0_0_rgba(15,23,42,1)] hover:shadow-[1px_1px_0_0_rgba(15,23,42,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Product Image Frame Panel (Spans 5 columns) */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative w-full h-full min-h-[300px]">
            <div className="absolute inset-0 bg-emerald-400 border-4 border-slate-900 transform translate-x-4 translate-y-4" />
            <div className="absolute inset-0 bg-slate-900 border-4 border-slate-900 transform translate-x-2 translate-y-2" />
            <div className="relative border-4 border-slate-900 h-full overflow-hidden bg-slate-100">
              <img
                src="/edu1.webp"
                alt="Eduline platform"
                className="w-full h-full object-cover grayscale-[20%] contrast-115 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* ================= SECONDARY SUB-PRODUCTS (BENTO DOUBLE ROW) ================= */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* PRODUCT CARD A: WHATSAPP CRM */}
          <div className="group bg-white border-4 border-slate-900 p-6 shadow-[8px_8px_0_0_rgba(15,23,42,1)] hover:shadow-[4px_4px_0_0_rgba(15,23,42,1)] hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col justify-between">
            <div>
              <div className="relative border-4 border-slate-900 overflow-hidden mb-6 bg-slate-100 shadow-[4px_4px_0_0_rgba(15,23,42,1)]">
                <img
                  src="/crm1.webp"
                  alt="WhatsApp CRM"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-emerald-400 text-slate-900 border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  <MessageSquare size={22} strokeWidth={2.5} />
                </div>
              </div>

              <div className="px-2">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">
                  Deal Chat - WhatsApp CRM
                </h3>
                <p className="text-slate-700 font-medium leading-relaxed mb-8">
                  Capture enquiries and automate responses. Convert conversations
                  into loyal customers using specialized WhatsApp workflows.
                </p>
              </div>
            </div>

            <div className="px-2 grid sm:grid-cols-2 gap-3 mt-auto">
              <a
                href="https://dealchat.everlinesys.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3.5 bg-slate-900 text-white font-black uppercase text-xs tracking-wider border-2 border-slate-900 shadow-[3px_3px_0_0_rgba(52,211,153,1)] hover:bg-slate-800 text-center"
              >
                Visit Deal Chat
              </a>
              <a
                href="https://dealchat.everlinesys.com"
                className="inline-flex items-center justify-center px-4 py-3.5 bg-white text-slate-900 font-black uppercase text-xs tracking-wider border-2 border-slate-900 shadow-[3px_3px_0_0_rgba(15,23,42,1)] hover:bg-slate-50 text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* PRODUCT CARD B: BILLING & STOCK */}
          <div className="group bg-white border-4 border-slate-900 p-6 shadow-[8px_8px_0_0_rgba(15,23,42,1)] hover:shadow-[4px_4px_0_0_rgba(15,23,42,1)] hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col justify-between">
            <div>
              <div className="relative border-4 border-slate-900 overflow-hidden mb-6 bg-slate-100 shadow-[4px_4px_0_0_rgba(15,23,42,1)]">
                <img
                  src="/bil1.webp"
                  alt="Billing and Stock Management"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-slate-900 text-emerald-400 border-2 border-emerald-400 flex items-center justify-center shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  <LineChart size={22} strokeWidth={2.5} />
                </div>
              </div>

              <div className="px-2">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">
                  Billing & Stock Management
                </h3>
                <p className="text-slate-700 font-medium leading-relaxed mb-8">
                  Simplify operations with automated billing, inventory tracking,
                  and professional business insights — all in one dashboard.
                </p>
              </div>
            </div>

            <div className="px-2 grid sm:grid-cols-2 gap-3 mt-auto">
              <a
                href="https://api.whatsapp.com/send?phone=919400690911&text=Hello%20Everlinesys%2C%20I%20want%20to%20know%20more%20about%20your%20Billing%20and%20Stock%20Management%20product."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3.5 bg-slate-900 text-white font-black uppercase text-xs tracking-wider border-2 border-slate-900 shadow-[3px_3px_0_0_rgba(52,211,153,1)] hover:bg-slate-800 text-center"
              >
                Get Started
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=919400690911&text=Hello%20Everlinesys%2C%20I%20want%20to%20know%20more%20about%20your%20Billing%20and%20Stock%20Management%20product."
                className="inline-flex items-center justify-center px-4 py-3.5 bg-white text-slate-900 font-black uppercase text-xs tracking-wider border-2 border-slate-900 shadow-[3px_3px_0_0_rgba(15,23,42,1)] hover:bg-slate-50 text-center"
              >
                Learn More
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}