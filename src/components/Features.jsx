import { ArrowRight, DatabaseZap, GraduationCap, MessageSquare, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: GraduationCap,
    title: "Learning and training platforms",
    description:
      "Deploy academies, course marketplaces, certification programs, and branded education portals.",
    items: ["Student journeys", "Course commerce", "Learning analytics"],
  },
  {
    icon: Workflow,
    title: "Business process automation",
    description:
      "Replace manual handoffs with connected workflows your team can track, own, and improve.",
    items: ["Approvals", "Dashboards", "Internal tools"],
  },
  {
    icon: MessageSquare,
    title: "Customer engagement systems",
    description:
      "Centralize lead capture, conversations, follow-ups, and customer activity across teams.",
    items: ["WhatsApp CRM", "Lead routing", "Support workflows"],
  },
  {
    icon: DatabaseZap,
    title: "Custom software delivery",
    description:
      "Design and build reliable software around your exact operating model and growth plan.",
    items: ["Architecture", "Integrations", "Cloud deployment"],
  },
];

export default function Capabilities() {
  return (
    <section className="bg-[#f7faf6] py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-36">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">
              Solutions by need
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Practical technology for teams that need momentum.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              We combine product thinking, implementation discipline, and
              long-term technical support so your systems stay useful after launch.
            </p>
            <Link
              to="/solutions"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              See all solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article key={service.title} className="border border-slate-200 bg-white p-7">
                  <div className="flex h-12 w-12 items-center justify-center bg-emerald-100 text-emerald-800">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold leading-8 text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-700">{service.description}</p>
                  <div className="mt-6 space-y-3">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                        <span className="h-2 w-2 bg-amber-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-emerald-950 px-6 py-12 text-white sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-300">
                Our approach
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Start with clarity. Ship with confidence. Improve with data.
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Discover", "Implement", "Optimize"].map((step, index) => (
                <div key={step} className="border border-white/15 p-5">
                  <div className="text-sm font-semibold text-emerald-300">0{index + 1}</div>
                  <div className="mt-4 text-xl font-semibold">{step}</div>
                  <p className="mt-2 text-sm leading-6 text-emerald-50/75">
                    A focused phase with clear outputs, owners, and next actions.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
