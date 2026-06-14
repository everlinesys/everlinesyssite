import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, CheckCircle2, Layers3, ShieldCheck } from "lucide-react";

const highlights = [
  {
    label: "Product news",
    title: "Eduline brings course sales, student management, and analytics into one branded platform.",
  },
  {
    label: "Implementation",
    title: "Launch workflow automation and internal tools without rebuilding your whole operation.",
  },
  {
    label: "Advisory",
    title: "Plan the software foundation your business can use for years, not just one campaign.",
  },
];

export default function Hero() {
  return (
    <section className="overflow-hidden border-t border-slate-200 bg-[#f7faf6]">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10 lg:py-4">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div >
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">
              Business systems, learning platforms, and automation
            </p>

            <h1 className="mt-5 max-w-5xl text-[36px] font-semibold leading-[0.96] tracking-tight text-slate-950 sm:text-[64px] lg:text-[58px]">
              Build a digital ecosystem your teams actually use.
            </h1>



            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-4 font-semibold text-white transition hover:bg-emerald-800"
              >
                Book a meeting
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-950 px-7 py-4 font-semibold text-slate-950 transition hover:bg-slate-950 hover:text-white"
              >
                Explore products
              </Link>
            </div>
            <p className="mt-5 md:mb-27 max-w-2xl text-lg leading-8 text-slate-700">
              Everline Systems helps growing organizations launch polished software,
              connect operations, and turn disconnected workflows into reliable,
              measurable systems.
            </p>
            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                ["99.9%", "reliable cloud delivery"],
                ["3", "core product lines"],
                ["24/7", "technical support"],
              ].map(([value, label]) => (
                <div key={value} className="border-l-2 border-emerald-600 pl-4">
                  <div className="text-3xl font-semibold text-slate-950">{value}</div>
                  <p className="mt-1 text-sm leading-5 text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-16 -top-12 h-48 w-48 rounded-full bg-amber-200/50 blur-3xl" />
            <div className="absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-cyan-200/50 blur-3xl" />

            <div className="relative border border-slate-200 bg-white p-4 shadow-xl shadow-emerald-950/10">
              <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
                <img
                  src="/img2.png"
                  alt="Eduline learning platform dashboard"
                  className="h-full min-h-[360px] w-full object-cover"
                />

                <div className="flex flex-col gap-4">
                  <div className="bg-emerald-950 p-6 text-white">
                    <div className="flex h-11 w-11 items-center justify-center bg-emerald-500/20">
                      <Layers3 className="h-6 w-6 text-emerald-300" />
                    </div>
                    <h2 className="mt-6 text-2xl font-semibold">Connected product stack</h2>
                    <p className="mt-3 text-sm leading-6 text-emerald-50/80">
                      Learning, CRM, billing, dashboards, and automation designed
                      around the way your organization already works.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-slate-200 bg-[#f7faf6] p-5">
                      <BarChart3 className="h-6 w-6 text-emerald-700" />
                      <p className="mt-5 text-sm font-semibold text-slate-950">Live insights</p>
                      <p className="mt-1 text-xs leading-5 text-slate-600">Useful reporting for teams and leaders.</p>
                    </div>
                    <div className="border border-slate-200 bg-[#f7faf6] p-5">
                      <ShieldCheck className="h-6 w-6 text-emerald-700" />
                      <p className="mt-5 text-sm font-semibold text-slate-950">Secure by default</p>
                      <p className="mt-1 text-xs leading-5 text-slate-600">Cloud-ready systems with careful access control.</p>
                    </div>
                  </div>

                  <div className="border border-slate-200 p-5">
                    {["Discovery", "Implementation", "Optimization"].map((item) => (
                      <div key={item} className="flex items-center gap-3 py-2 text-sm font-medium text-slate-800">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.label} className="border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-emerald-700">{item.label}</p>
              <h2 className="mt-3 text-xl font-semibold leading-7 text-slate-950">{item.title}</h2>
              <Link to="/resources" className="mt-5 inline-flex items-center gap-2 font-semibold text-emerald-800">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
