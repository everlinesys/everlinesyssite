import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiAmazon,
  SiDocker,
  SiVercel
} from "react-icons/si";

export default function TechStack() {
  const tech = [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiAmazon, name: "AWS" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiVercel, name: "Vercel" },
  ];

  return (
    <section className="bg-[#f4f4f0] py-20 lg:py-32 border-b-4 border-slate-900 font-sans selection:bg-emerald-400 selection:text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-emerald-400 border-2 border-slate-900 text-xs font-mono font-semibold uppercase tracking-widest shadow-[3px_3px_0_0_rgba(52,211,153,1)] -rotate-1 mb-6">
            [ COMPILER_ENGINE_v4.0 ]
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 uppercase tracking-tighter leading-none mb-6">
            Technologies We <br />
            <span className="inline-block bg-slate-900 text-emerald-400 px-4 py-2 mt-2 transform rotate-1 border-4 border-slate-900 shadow-[6px_6px_0_0_rgba(15,23,42,1)]">
              Use & Master
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-800 font-semibold max-w-2xl mx-auto border-l-4 border-r-4 border-slate-900 px-6 py-2 mt-8">
            We build scalable systems using modern, battle-tested technologies
            trusted by high-growth startups and enterprises worldwide.
          </p>
        </div>

        {/* ================= NEO-FUTURISTIC BENTO GRID ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tech.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-white border-4 border-slate-900 p-6 relative overflow-hidden flex flex-col items-center justify-center transition-all duration-150
                           shadow-[6px_6px_0_0_rgba(15,23,42,1)]
                           hover:shadow-[1px_1px_0_0_rgba(52,211,153,1)] hover:translate-x-[5px] hover:translate-y-[5px]
                           hover:bg-slate-900 cursor-crosshair"
              >
                {/* Structural Technical Corner Decorator */}
                <div className="absolute top-1 right-2 font-mono text-[8px] font-semibold text-slate-300 group-hover:text-emerald-400/40 transition-colors">
                  //0{i + 1}
                </div>

                {/* Hard Boxed Icon Frame */}
                <div className="p-4 bg-slate-50 border-2 border-slate-900 shadow-[3px_3px_0_0_rgba(15,23,42,1)] group-hover:bg-emerald-400 group-hover:shadow-[0_0_0_0_rgba(0,0,0,0)] group-hover:translate-x-[3px] group-hover:translate-y-[3px] transition-all duration-150">
                  <Icon
                    size={36}
                    className="text-slate-800 transition-transform duration-200 group-hover:scale-110"
                  />
                </div>

                {/* Text Indicator Label */}
                <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-900 text-center bg-emerald-400 px-2 py-0.5 border-2 border-slate-900 group-hover:bg-white group-hover:text-slate-900 shadow-[2px_2px_0_0_rgba(15,23,42,1)] group-hover:shadow-[0_0_0_0_rgba(0,0,0,0)] transition-all duration-150">
                  {item.name}
                </span>

                {/* Micro-dot corner accent */}
                <div className="absolute bottom-1 left-1.5 w-1 h-1 bg-slate-900 group-hover:bg-emerald-400 transition-colors" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}