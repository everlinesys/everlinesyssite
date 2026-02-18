import { Rocket, Laptop, CheckCircle2, ArrowRight, Zap, Settings } from "lucide-react";

export default function Capabilities() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Dynamic Angled Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-blue-600 -skew-y-3 origin-top-left z-0" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 pt-10 md:pt-0">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Start with a Product / <span className="text-blue-100">Build a System</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Most teams begin with one of our ready-to-use platforms. 
            As you grow, we unify your operations into a single intelligent system 
            tailored to your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: READY PRODUCTS */}
          <div className="group bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Rocket size={32} />
            </div>
            
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Launch Faster with Our Products
            </h3>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Deploy proven solutions designed to handle real-world operations—from 
              education platforms to customer management tools.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Eduline — Brand your own learning platform",
                "WhatsApp CRM — Conversation-driven sales",
                "Billing & Stock — Operational clarity",
                "Quick deployment with minimal setup",
                "Scalable cloud infrastructure"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-blue-500 mt-1 shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-2 text-blue-600 font-bold text-lg group-hover:gap-4 transition-all">
              Explore Products <ArrowRight size={20} />
            </button>
          </div>

          {/* Card 2: CUSTOM SYSTEMS (Dark Mode) */}
          <div className="group bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-800 transition-all duration-300 hover:-translate-y-2 text-white">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform">
              <Settings size={32} />
            </div>
            
            <h3 className="text-3xl font-bold mb-6">
              Custom Integrated Systems
            </h3>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              When off-the-shelf tools aren’t enough, we build fully integrated 
              platforms tailored to your specific data and long-term strategy.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Business process & architecture design",
                "Custom automation & workflow solutions",
                "Websites, apps, and internal tools",
                "Unified software ecosystem integration",
                "Digital transformation strategy"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                  <Zap className="text-blue-400 mt-1 shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-2 text-blue-400 font-bold text-lg group-hover:gap-4 transition-all">
              Consult with Experts <ArrowRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}