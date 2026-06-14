import { ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-[#f7faf6] py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="overflow-hidden bg-emerald-950 text-white">
          <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
            <div className="px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-300">
                Ready for the next step?
              </p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1] tracking-tight sm:text-5xl lg:text-7xl">
                Let's design the system your business needs next.
              </h2>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-emerald-50/80">
                Bring us the workflow, product idea, or operational bottleneck.
                We'll help you shape the right platform, launch plan, and support model.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-emerald-950 transition hover:bg-emerald-50"
                >
                  Book a meeting
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="https://eduline.everlinesys.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Eduline
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 bg-emerald-900/60 p-6 sm:p-10 lg:border-l lg:border-t-0">
              <div className="grid h-full content-center gap-5">
                <div className="border border-white/15 bg-white/5 p-6">
                  <CalendarCheck className="h-8 w-8 text-emerald-300" />
                  <h3 className="mt-6 text-2xl font-semibold">No-pressure discovery</h3>
                  <p className="mt-3 leading-7 text-emerald-50/75">
                    A practical conversation about goals, users, workflow pain,
                    timelines, and the fastest credible path to value.
                  </p>
                </div>
                <div className="border border-white/15 bg-white/5 p-6">
                  <Sparkles className="h-8 w-8 text-amber-300" />
                  <h3 className="mt-6 text-2xl font-semibold">Clear next actions</h3>
                  <p className="mt-3 leading-7 text-emerald-50/75">
                    Leave with a sharper product direction, implementation options,
                    and the kind of system your team can realistically maintain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
