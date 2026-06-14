import { motion as Motion } from "framer-motion";

const projects = [
  { name: "Mathritva Ayur", url: "https://mathritvaayur.com", img: "/works/math.png" },
  { name: "Proftek Systems", url: "https://profteksystems.com", img: "/works/proftek.png" },
  { name: "VBreeze Fans", url: "https://vbreezefans.com", img: "/works/vbreeze.png" },
  { name: "Euphoria International", url: "https://euphoriainternational.in", img: "/works/euphoria.png" },
  { name: "LatAsia", url: "https://latasia.in", img: "/works/latasia.png" },
  { name: "Axiom Learning", url: "https://axiom-learning.vercel.app", img: "/works/axiom.png" },
  { name: "ASP Fin Academy", url: "https://aspfinacademy.com", img: "/works/aspfin.png" },
  { name: "India Trip Plan", url: "https://theindiatripplan.com", img: "/works/indiatrip.png" },
  { name: "Eduline", url: "https://eduline.everlinesys.com", img: "/works/eduline.png" },
];

export default function Works() {
  return (
    <section className="bg-[#f4f4f0] py-20 lg:py-32 border-b-4 border-slate-900 font-sans selection:bg-emerald-400 selection:text-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER SECTION ================= */}
        <div className="mb-20 grid md:grid-cols-12 gap-6 items-end border-b-4 border-slate-900 pb-10">
          <div className="md:col-span-8 text-left">
            {/* Dynamic Angled Badge */}
            <span className="inline-block px-3 py-1 bg-emerald-400 border-2 border-slate-900 text-slate-900 font-semibold text-xs uppercase tracking-widest shadow-[2px_2px_0_0_rgba(15,23,42,1)] -rotate-1 mb-4">
              // Selected Work
            </span>

            <h2 className="text-4xl sm:text-6xl font-semibold text-slate-900 uppercase tracking-tighter leading-none">
              Platforms & Websites <br />
              <span className="bg-slate-900 text-white px-3 py-1 inline-block transform rotate-1 mt-2 border-2 border-slate-900">
                We've Built
              </span>
            </h2>
          </div>

          <div className="md:col-span-4 text-left md:text-right">
            <p className="text-slate-800 font-semibold text-sm sm:text-base max-w-sm md:ml-auto border-l-4 md:border-l-0 md:border-r-4 border-slate-900 pl-4 md:pl-0 md:pr-4">
              Over the past 4 years we’ve built websites, platforms
              and automation systems for businesses, startups,
              and educators.
            </p>
          </div>
        </div>

        {/* ================= BENTO PORTFOLIO GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Alternates card backgrounds seamlessly across grid indexes
            const isEmeraldCard = index % 3 === 1;

            return (
              <Motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                // Framer motion uses non-linear timing loops to emulate neo-brutalist spring clicks
                whileHover={{ 
                  x: -4, 
                  y: -4,
                  scale: 1.01
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 15 
                }}
                className={`group border-4 border-slate-900 p-4 transition-colors relative flex flex-col justify-between
                  ${isEmeraldCard 
                    ? "bg-emerald-400 shadow-[8px_8px_0_0_rgba(15,23,42,1)] hover:bg-emerald-300" 
                    : "bg-white shadow-[8px_8px_0_0_rgba(52,211,153,1)] hover:border-emerald-400"
                  }`}
              >
                {/* Visual Index Counter Badge */}
                <div className="absolute top-2 right-2 font-mono text-[10px] font-semibold opacity-30 group-hover:opacity-100 transition-opacity">
                  [0{index + 1}]
                </div>

                <div>
                  {/* Thick Bordered Image Container Frame */}
                  <div className="h-48 overflow-hidden border-2 border-slate-900 relative shadow-[4px_4px_0_0_rgba(15,23,42,1)] bg-slate-100">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* Text Information Blocks */}
                  <div className="pt-5 pb-2">
                    <h3 className="font-semibold text-xl text-slate-900 uppercase tracking-tight group-hover:text-slate-900">
                      {project.name}
                    </h3>
                    
                    <p className="text-xs font-mono font-semibold text-slate-700 mt-1 break-all tracking-tight opacity-80 group-hover:opacity-100">
                      {project.url.replace("https://", "")}
                    </p>
                  </div>
                </div>

                {/* Neo-Futuristic Interactive Footer Indicator Arrow */}
                <div className="mt-4 pt-3 border-t-2 border-slate-900/10 group-hover:border-slate-900/30 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-800">
                    Launch Platform
                  </span>
                  <div className="w-6 h-6 rounded-none bg-slate-900 text-white flex items-center justify-center font-semibold text-xs group-hover:bg-emerald-400 group-hover:text-slate-900 group-hover:rotate-45 transition-all duration-200">
                    →
                  </div>
                </div>

              </Motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
