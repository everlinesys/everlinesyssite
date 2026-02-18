import { GraduationCap, MessageSquare, BarChart3, Settings2, ArrowRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Eduline",
      icon: <GraduationCap className="text-blue-600" size={24} />,
      description: "Scalable platform for educators. Pricing scales with student count and advanced anti-piracy features.",
      link: "https://eduline.yoursite.com/pricing",
      cta: "View Eduline Plans",
      tag: "Best for Academies"
    },
    {
      name: "WhatsApp CRM",
      icon: <MessageSquare className="text-green-600" size={24} />,
      description: "Volume-based pricing tailored to your agent count and monthly conversation requirements.",
      link: "https://crm.yoursite.com/pricing",
      cta: "View CRM Plans",
      tag: "Best for Sales Teams"
    },
    {
      name: "Billing & Stock",
      icon: <BarChart3 className="text-indigo-600" size={24} />,
      description: "Comprehensive ERP plans designed for inventory-heavy businesses and retail operations.",
      link: "https://billing.yoursite.com/pricing",
      cta: "View Billing Plans",
      tag: "Best for Operations"
    },
    {
      name: "Custom Systems",
      icon: <Settings2 className="text-slate-600" size={24} />,
      description: "Enterprise-grade bespoke architecture. Pricing is project-based following a technical consultation.",
      link: "/contact",
      cta: "Get a Custom Quote",
      tag: "For Large Enterprise",
      highlight: true
    }
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
            Flexible Scaling
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Plans Built for Your Growth
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every business is unique. We provide specialized pricing structures for our core products 
            and fully custom estimates for integrated systems.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col bg-white rounded-3xl p-8 shadow-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.highlight ? 'border-blue-200 ring-1 ring-blue-100' : 'border-slate-200'
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-3 left-8 px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-tighter rounded-full border border-slate-200 bg-white">
                {plan.tag}
              </div>

              {/* Icon & Title */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                {plan.description}
              </p>

              {/* Action */}
              <a
                href={plan.link}
                target={plan.link.startsWith('http') ? "_blank" : "_self"}
                rel="noreferrer"
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                  plan.highlight 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Support Note */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            Not sure which plan is right for you? 
            <a href="/contact" className="text-blue-600 font-bold ml-1 hover:underline">
              Talk to our solutions team
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}