import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="bg-[#f4f4f0] font-sans text-slate-900 selection:bg-emerald-400 selection:text-slate-900 min-h-screen">

      {/* ================= ===== HERO SECTION ===== ================= */}
      <div className="border-b-4 border-slate-900 py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0f172a 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-slate-900 text-emerald-400 border-2 border-slate-900 text-xs font-mono font-black uppercase tracking-widest -rotate-1 mb-6 shadow-[2px_2px_0_0_rgba(15,23,42,1)]">
            [ CORE_MISSION_STATEMENT ]
          </span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-8">
            Building Systems That <br />
            <span className="bg-emerald-400 border-4 border-slate-900 px-4 py-1 inline-block mt-2 shadow-[6px_6px_0_0_rgba(15,23,42,1)] transform rotate-1">
              Power Growth
            </span>
          </h1>
          <p className="text-base md:text-xl font-bold text-slate-700 max-w-2xl mx-auto border-l-4 border-slate-900 pl-4 md:pl-6 py-1 text-left md:text-center">
            Everline Systems creates scalable digital platforms that help organizations automate complex operations, destroy internal operational friction, and laser-focus on what matters most.
          </p>
        </div>
      </div>

      {/* ================= ===== WHAT WE DO GRID ===== ================= */}
      <div className="border-b-4 border-slate-900 py-20 lg:py-28 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Side: Heavy Frame Image */}
        <div className="md:col-span-5 relative group">
          <div className="absolute inset-0 bg-slate-900 border-4 border-slate-900 transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          <div className="relative border-4 border-slate-900 bg-white h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600"
              alt="Team working"
              className="w-full h-full object-cover grayscale font-sans contrast-125 min-h-[300px]"
            />
            <div className="absolute top-2 left-2 bg-slate-900 text-white font-mono text-[9px] font-black px-2 py-0.5">
              IMAGE_REF // WORK_FLOW
            </div>
          </div>
        </div>

        {/* Right Side: Bento Content Card */}
        <div className="md:col-span-7 bg-white border-4 border-slate-900 p-8 lg:p-12 shadow-[8px_8px_0_0_rgba(15,23,42,1)] flex flex-col justify-center relative">
          <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-400 border-b-4 border-l-4 border-slate-900 flex items-center justify-center font-mono font-black text-xs">
            ★
          </div>
          <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 mb-6">
            From Ready Products to Custom Platforms
          </h2>
          <p className="text-slate-800 font-bold mb-4 leading-relaxed">
            We design and deliver both hyper-optimized, ready-to-use SaaS products and robust, fully customized systems tailored directly to unique business architectures.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Whether you scale your launch utilizing one of our turnkey platforms or require an absolute end-to-end operational transformation, Everline Systems ensures your underlying architecture reliably evolves alongside your growth matrix.
          </p>
        </div>

      </div>

      {/* ================= ===== OUR APPROACH ===== ================= */}
      <div className="border-b-4 border-slate-900 bg-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
              Our Execution Approach
            </h2>
            <div className="w-24 h-2 bg-emerald-400 border-2 border-slate-900 mx-auto mt-4 shadow-[2px_2px_0_0_rgba(15,23,42,1)]" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Understand", desc: "We comprehensively trace your workflows, engineering constraints, and organizational targets before formatting a line of system architecture." },
              { step: "02", title: "Build", desc: "Our production environments are strictly engineered for absolute real-world reliance, multi-tenant scalability, and long-term asset optimization." },
              { step: "03", title: "Transform", desc: "We directly transition legacy operational layouts into automated, high-velocity, software-driven pipelines ready for enterprise scale." }
            ].map((item, index) => (
              <div key={index} className="bg-[#f4f4f0] border-4 border-slate-900 p-8 shadow-[6px_6px_0_0_rgba(15,23,42,1)] relative hover:bg-emerald-50 transition-colors duration-150">
                <div className="inline-block bg-slate-900 text-emerald-400 font-mono font-black text-xs px-2 py-1 mb-6 border-2 border-slate-900">
                  PHASE_SYSTEM_{item.step}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= ===== WHY WE EXIST BLOCK ===== ================= */}
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-400 border-2 border-slate-900 text-slate-900 text-xs font-mono font-black uppercase tracking-wider shadow-[2px_2px_0_0_rgba(15,23,42,1)] mb-6">
          ⚙ PURPOSE_MANIFESTO
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-8">
          Why Everline Systems Exists
        </h2>

        <div className="bg-white border-4 border-slate-900 p-8 md:p-12 text-left shadow-[8px_8px_0_0_rgba(15,23,42,1)] space-y-6">
          <p className="text-base md:text-lg font-bold text-slate-800 leading-relaxed">
            ✦ Most modern operations struggle underneath the weight of fractured, disconnected legacy tools, heavily repetitive manual admin procedures, and deep operational transparency blackholes.
          </p>
          <div className="h-1 bg-slate-900" />
          <p className="text-base md:text-lg font-bold text-slate-800 leading-relaxed">
            ✦ We exist to completely unify these scattered data components into singular, intelligent, rock-solid core platforms that simplify asset management and rapidly unlock latent economic growth.
          </p>
        </div>
      </div>

      {/* ================= ===== BOTTOM FOOTER CTA ===== ================= */}
      <div className="bg-slate-900 border-t-4 border-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#34d399 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8">
            Ready to Build Your System?
          </h2>
          
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-emerald-400 text-slate-900 font-black uppercase tracking-wider text-sm border-2 border-slate-900 shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:shadow-[1px_1px_0_0_rgba(255,255,255,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
          >
            Talk to Our Engineering Team
          </Link>
        </div>
      </div>

    </section>
  );
}