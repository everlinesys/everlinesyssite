import { Briefcase, Building2, Factory, GraduationCap, HeartPulse, Store } from "lucide-react";

const sectors = [
  {
    icon: GraduationCap,
    title: "Education businesses",
    desc: "Course platforms, online academies, student operations, and training portals.",
  },
  {
    icon: Building2,
    title: "Professional services",
    desc: "CRM workflows, internal dashboards, lead management, and reporting systems.",
  },
  {
    icon: Store,
    title: "Retail and commerce",
    desc: "Billing, inventory, stock visibility, and customer engagement tools.",
  },
  {
    icon: Factory,
    title: "Operations teams",
    desc: "Process automation, approval workflows, and operational control rooms.",
  },
  {
    icon: HeartPulse,
    title: "Training organizations",
    desc: "Certification programs, onboarding journeys, and learner progress tracking.",
  },
  {
    icon: Briefcase,
    title: "Growing companies",
    desc: "Custom systems that support expansion without creating technical drag.",
  },
];

const stats = [
  ["99.9%", "reliability target"],
  ["24/7", "technical support"],
  ["3x", "faster launch path"],
  ["Secure", "cloud foundation"],
];

export default function Trust() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">
              Built for real organizations
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Systems that fit the way your business moves.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-700">
            Everline works with teams that need technology to remove friction:
            educators, operators, founders, and service businesses building for scale.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={value} className="border border-slate-200 bg-[#f7faf6] p-7">
              <div className="text-4xl font-semibold text-emerald-800">{value}</div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.1em] text-slate-600">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <article key={sector.title} className="border border-slate-200 p-7 transition hover:border-emerald-300 hover:bg-[#f7faf6]">
                <div className="flex h-12 w-12 items-center justify-center bg-emerald-100 text-emerald-800">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-950">{sector.title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{sector.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
