import { ShieldCheck } from "lucide-react";

export default function Trust() {
  const sectors = [
    {
      title: "Coaching Institutes",
      desc: "Streamline batch management, automate attendance, and boost student engagement through insights.",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200",
    },
    {
      title: "Digital Educators",
      desc: "Scale globally with secure content delivery, integrated payments, and automation.",
      img: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=1200",
    },
    {
      title: "Skill Training Centers",
      desc: "Deliver structured certification programs with performance tracking.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    },
    {
      title: "Corporate Academies",
      desc: "Enable onboarding, compliance training, and workforce development.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    },
    {
      title: "Higher Education",
      desc: "Enterprise-grade security with seamless LMS integrations.",
      img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1200",
    },
    {
      title: "Language & Arts Schools",
      desc: "Interactive learning with flexible scheduling and virtual classrooms.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== HEADER ===== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck size={14} />
              Enterprise Grade Trust
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Powering the Future of
              <br />
              <span className="text-blue-600">Global Education</span>
            </h2>
          </div>

          <p className="text-slate-600 text-base lg:max-w-xs border-l-2 border-blue-600 pl-4 py-2">
            Trusted by organizations from boutique coaching centers to large corporate universities.
          </p>
        </div>

        {/* ===== SECTORS GRID ===== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-xl transition"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={sector.img}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600">
                  {sector.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== TRUST STATS ===== */}
        <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-black mb-1">99.9%</div>
              <p className="text-blue-100 text-xs sm:text-sm">Uptime SLA</p>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black mb-1">50k+</div>
              <p className="text-blue-100 text-xs sm:text-sm">Daily Learners</p>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black mb-1">24/7</div>
              <p className="text-blue-100 text-xs sm:text-sm">Expert Support</p>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black mb-1">ISO</div>
              <p className="text-blue-100 text-xs sm:text-sm">Certified Security</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
