import { GraduationCap, MessageSquare, BarChart3, Settings2, ArrowRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Eduline",
      icon: <GraduationCap className="text-slate-900 group-hover:text-emerald-400 transition-colors" size={24} />,
      description: "Scalable platform for educators. Pricing scales with student count and advanced anti-piracy features.",
      link: "https://eduline.everlinesys.com/pricing",
      cta: "View Eduline Plans",
      tag: "Best for Academies"
    },
    {
      name: "WhatsApp CRM",
      icon: <MessageSquare className="text-slate-900 group-hover:text-emerald-400 transition-colors" size={24} />,
      description: "Volume-based pricing tailored to your agent count and monthly conversation requirements.",
      link: "https://crm.everlinesys.com/pricing",
      cta: "View CRM Plans",
      tag: "Best for Sales Teams"
    },
    {
      name: "Billing & Stock",
      icon: <BarChart3 className="text-slate-900 group-hover:text-emerald-400 transition-colors" size={24} />,
      description: "Comprehensive ERP plans designed for inventory-heavy businesses and retail operations.",
      link: "https://billing.everlinesys.com/pricing",
      cta: "View Billing Plans",
      tag: "Best for Operations"
    },
    {
      name: "Custom Systems",
      icon: <Settings2 className="text-emerald-400" size={24} />,
      description: "Enterprise-grade bespoke architecture. Pricing is project-based following a technical consultation.",
      link: "/contact",
      cta: "Get a Custom Quote",
      tag: "For Large Enterprise",
      highlight: true
    }
  ];

  return (
    <section className="bg-[#f4f4f0] py-20 lg:py-32 border-b-4 border-slate-900 font-sans selection:bg-emerald-400 selection:text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-emerald-400 border-2 border-slate-900 text-xs font-mono font-black uppercase tracking-widest shadow-[3px_3px_0_0_rgba(52,211,153,1)] -rotate-1 mb-6">
            [ INFRASTRUCTURE_COSTING_v2 ]
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-6">
            Plans Built For <br />
            <span className="inline-block bg-slate-900 text-white px-4 py-2 mt-2 transform rotate-1 border-4 border-slate-900 shadow-[6px_6px_0_0_rgba(52,211,153,1)]">
              Your Growth
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-800 font-bold max-w-2xl mx-auto border-l-4 border-slate-900 pl-4 py-1 text-left md:text-center mt-6">
            Every business layout is structurally unique. We provide specialized pricing frameworks for our core platforms alongside custom estimates for complex systems.
          </p>
        </div>

        {/* ================= PRICING BENTO GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col border-4 border-slate-900 p-8 transition-all duration-150 group cursor-crosshair
                ${plan.highlight 
                  ? 'bg-slate-900 text-white shadow-[8px_8px_0_0_rgba(52,211,153,1)]' 
                  : 'bg-white text-slate-900 shadow-[8px_8px_0_0_rgba(15,23,42,1)] hover:bg-slate-50 hover:shadow-[3px_3px_0_0_rgba(52,211,153,1)] hover:translate-x-[5px] hover:translate-y-[5px]'
                }`}
            >
              {/* Static Neobrutalist Tag / Badge */}
              <div className={`absolute -top-3.5 left-6 px-2.5 py-0.5 border-2 border-slate-900 text-[10px] font-mono font-black uppercase tracking-wider shadow-[2px_2px_0_0_rgba(15,23,42,1)]
                ${plan.highlight ? 'bg-emerald-400 text-slate-900' : 'bg-white text-slate-900'}`}
              >
                // {plan.tag}
              </div>

              {/* Icon & Title Block */}
              <div className="mb-6 mt-2">
                <div className={`w-12 h-12 border-2 border-slate-900 flex items-center justify-center mb-4 shadow-[2px_2px_0_0_rgba(15,23,42,1)]
                  ${plan.highlight ? 'bg-slate-800 border-white/20' : 'bg-[#f4f4f0] group-hover:bg-emerald-400 transition-colors'}`}
                >
                  {plan.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">{plan.name}</h3>
              </div>

              {/* Card Description */}
              <p className={`text-xs font-bold leading-relaxed mb-8 flex-grow
                ${plan.highlight ? 'text-slate-400' : 'text-slate-600'}`}
              >
                {plan.description}
              </p>

              {/* Action Button */}
              <a
                href={plan.link}
                target={plan.link.startsWith('http') ? "_blank" : "_self"}
                rel="noreferrer"
                className={`flex items-center justify-center gap-2 py-3 px-4 border-2 border-slate-900 font-mono font-black text-xs uppercase tracking-wider transition-all duration-150
                  ${plan.highlight 
                    ? 'bg-emerald-400 text-slate-900 shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:shadow-[1px_1px_0_0_rgba(255,255,255,1)] hover:translate-x-[3px] hover:translate-y-[3px]' 
                    : 'bg-[#f4f4f0] text-slate-900 shadow-[3px_3px_0_0_rgba(15,23,42,1)] hover:bg-emerald-400 hover:shadow-[1px_1px_0_0_rgba(15,23,42,1)] hover:translate-x-[2px] hover:translate-y-[2px]'
                  }`}
              >
                {plan.cta}
                <ArrowRight size={14} strokeWidth={3} />
              </a>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM METRICS FOOTNOTE ================= */}
        <div className="mt-20 text-center">
          <p className="text-slate-700 font-bold text-sm bg-white inline-block px-6 py-2 border-2 border-slate-900 shadow-[4px_4px_0_0_rgba(15,23,42,1)]">
            Not completely sure which path maps to your stack? 
            <a href="/contact" className="text-emerald-600 font-black uppercase ml-1.5 hover:text-slate-900 transition-colors underline decoration-2 underline-offset-2">
              Consult an Engineer
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}