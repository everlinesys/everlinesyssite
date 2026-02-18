import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="bg-white">

      {/* ===== HERO ===== */}
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Building Systems That Power Growth
        </h1>

        <p className="text-lg text-gray-600">
          Everline Systems creates scalable digital platforms that help
          organizations automate operations, manage complexity,
          and focus on what matters most.
        </p>

      </div>

      {/* ===== WHAT WE DO ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600"
          alt="Team working"
          className="rounded-2xl shadow"
        />

        <div>
          <h2 className="text-3xl font-bold mb-6">
            From Ready Products to Custom Platforms
          </h2>

          <p className="text-gray-600 mb-6">
            We design and deliver both ready-to-use SaaS products and
            fully customized systems tailored to unique business needs.
          </p>

          <p className="text-gray-600">
            Whether you launch with one of our products or require a
            complete transformation, Everline Systems ensures your
            technology evolves with your growth.
          </p>
        </div>

      </div>

      {/* ===== OUR APPROACH ===== */}
      <div className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Understand
              </h3>
              <p className="text-gray-600">
                We analyze your workflows, challenges, and goals before
                designing any solution.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Build
              </h3>
              <p className="text-gray-600">
                Our platforms are engineered for reliability,
                scalability, and long-term performance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Transform
              </h3>
              <p className="text-gray-600">
                We help organizations evolve into efficient,
                technology-driven systems.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* ===== WHY WE EXIST ===== */}
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Why Everline Systems Exists
        </h2>

        <p className="text-gray-600 mb-6">
          Many organizations struggle with disconnected tools,
          manual processes, and inefficient operations.
        </p>

        <p className="text-gray-600">
          We exist to unify these into intelligent systems that
          simplify management and unlock growth.
        </p>

      </div>

      {/* ===== CTA ===== */}
      <div className="bg-blue-600 py-20 text-center text-white">

        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Your System?
        </h2>

        <Link
          to="/contact"
          className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50"
        >
          Talk to Us
        </Link>

      </div>

    </section>
  );
}
