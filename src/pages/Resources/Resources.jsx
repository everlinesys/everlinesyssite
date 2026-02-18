import { BookOpen, FileText, Video, Download, ArrowUpRight, Search } from "lucide-react";

export default function Resources() {
  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      desc: "Comprehensive API references and step-by-step setup guides for developers and admins.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FileText,
      title: "Case Studies",
      desc: "Real-world stories of how institutions transformed their operations using Everlinesys.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      desc: "Bite-sized visual guides covering everything from onboarding to advanced system automation.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Download,
      title: "Asset Library",
      desc: "Download product brochures, whitepapers, and brand assets for your organization.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ===== HEADER & SEARCH BAR ===== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
              Support Center
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Knowledge & <span className="text-slate-400">Resources</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Everything you need to master Everlinesys. From deep-dive documentation 
              to quick video walkthroughs.
            </p>
          </div>

          {/* Quick Search Mockup - Makes it look functional */}
          <div className="relative w-full lg:max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search guides, videos..." 
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* ===== RESOURCE GRID ===== */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((item, i) => {
            const Icon = item.icon;

            return (
              <a
                href="#"
                key={i}
                className="group relative bg-white border border-slate-200 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative background element */}
                <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${item.bgColor} opacity-0 group-hover:opacity-50 transition-all duration-500 group-hover:scale-150`} />

                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${item.bgColor} ${item.color} mb-6 transition-transform group-hover:scale-110 duration-300`}>
                  <Icon size={28} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* ===== FEATURED HELP SECTION ===== */}
        <div className="mt-12 p-8 md:p-12 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Can't find what you're looking for?</h3>
            <p className="text-slate-400">Our support engineers are available 24/7 to help with technical setup.</p>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 active:scale-95">
            Contact Support Team
          </button>
        </div>

      </div>
    </section>
  );
}