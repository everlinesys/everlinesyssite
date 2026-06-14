import { Link } from "react-router-dom";

export default function About() {
  return (<section className="bg-[#f5f5f3] text-slate-900">


    {/* Hero */}
    <section className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
          About Everline Systems
        </span>

        <h1 className="mt-6 text-5xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
          Building technology
          that helps businesses grow.
        </h1>

        <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Everline Systems develops software products,
          digital platforms, and custom business systems
          that help organizations operate more efficiently
          and scale with confidence.
        </p>

      </div>
    </section>

    {/* Story */}
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <img
              src="/about.webp"
              alt="Everline Systems"
              className="rounded-3xl border border-slate-200"
            />
          </div>

          <div>

            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              Our Story
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Technology should simplify,
              not complicate.
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Many organizations rely on disconnected tools,
              manual processes, and outdated systems.
              We believe technology should bring clarity,
              efficiency, and long-term value.
            </p>

            <p className="mt-6 text-slate-600 leading-relaxed">
              That's why we build software that adapts to
              the way businesses actually operate, helping
              teams save time, reduce complexity, and focus
              on growth.
            </p>

          </div>

        </div>

      </div>
    </section>

    {/* What We Do */}
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            What we do
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-semibold">
              Software Products
            </h3>

            <p className="mt-4 text-slate-600">
              Ready-to-use platforms that help businesses
              launch faster and operate efficiently.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-semibold">
              Custom Systems
            </h3>

            <p className="mt-4 text-slate-600">
              Tailored software designed around your
              workflows, teams, and business goals.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-semibold">
              Consulting
            </h3>

            <p className="mt-4 text-slate-600">
              Strategic guidance for digital transformation,
              automation, and technology adoption.
            </p>
          </div>

        </div>

      </div>
    </section>

    {/* Philosophy */}
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
          Our Philosophy
        </span>

        <h2 className="mt-4 text-4xl lg:text-6xl font-semibold tracking-tight">
          Build once.
          <br />
          Run forever.
        </h2>

        <p className="mt-8 text-xl text-slate-600 leading-relaxed">
          We focus on creating systems that remain useful,
          reliable, and scalable as organizations grow.
          Every solution is designed with long-term value
          in mind.
        </p>

      </div>
    </section>

    {/* CTA */}
    <section className="pb-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-slate-900 rounded-[40px] text-white p-12 lg:p-20 text-center">

          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight">
            Let's build something meaningful.
          </h2>

          <p className="mt-6 text-slate-300 text-lg">
            Tell us about your project and we'll help you find
            the right technology solution.
          </p>

          <Link
            to="/contact"
            className="inline-flex mt-10 bg-white text-slate-900 px-8 py-4 rounded-full font-medium"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>

  </section>


  );
}
