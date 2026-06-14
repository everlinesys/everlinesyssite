import { Link } from "react-router-dom";

export default function HeroDev() {
  return (
    <section className="bg-[#f4f4f0] py-20 lg:py-28 border-b-4 border-slate-900 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="grid lg:grid-cols-12 gap-6 items-end border-b-4 border-slate-900 pb-10">

          <div className="lg:col-span-8">

            <span
              className="
                inline-block
                px-3
                py-1
                bg-emerald-400
                border-2
                border-slate-900
                text-slate-900
                font-semibold
                text-xs
                uppercase
                tracking-widest
                shadow-[2px_2px_0_0_rgba(15,23,42,1)]
                -rotate-1
                mb-4
              "
            >
              // Everline Systems
            </span>

            <h1
              className="
                text-5xl
                sm:text-7xl
                lg:text-8xl
                font-semibold
                text-slate-900
                uppercase
                tracking-tighter
                leading-none
              "
            >
              Build Systems
              <br />

              <span
                className="
                  bg-slate-900
                  text-white
                  px-3
                  py-1
                  inline-block
                  rotate-1
                  mt-2
                  border-2
                  border-slate-900
                "
              >
                That Last
              </span>
            </h1>

          </div>

          <div className="lg:col-span-4">

            <p
              className="
                text-slate-800
                font-semibold
                text-sm
                sm:text-base
                border-l-4
                border-slate-900
                pl-4
              "
            >
              Websites, software platforms and digital products
              engineered for reliability, growth and long-term
              business success.
            </p>

          </div>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-12 gap-8 mt-10">

          {/* Main Card */}

          <div
            className="
              lg:col-span-8
              bg-white
              border-4
              border-slate-900
              p-6
              lg:p-10
              shadow-[8px_8px_0_0_rgba(52,211,153,1)]
            "
          >

            <div className="flex flex-wrap gap-3 mb-8">

              <div className="px-3 py-1 border-2 border-slate-900 bg-emerald-400 text-xs font-semibold uppercase">
                Build Once
              </div>

              <div className="px-3 py-1 border-2 border-slate-900 bg-white text-xs font-semibold uppercase">
                Run Forever
              </div>

              <div className="px-3 py-1 border-2 border-slate-900 bg-slate-900 text-white text-xs font-semibold uppercase">
                Since 2022
              </div>

            </div>

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-semibold
                uppercase
                tracking-tight
                text-slate-900
              "
            >
              Products.
              <br />
              Platforms.
              <br />
              Automation.
            </h2>

            <p
              className="
                mt-6
                text-slate-700
                text-base
                sm:text-lg
                font-semibold
                max-w-2xl
              "
            >
              We help businesses and educators launch digital
              products faster using scalable software, modern
              websites and intelligent automation systems.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <Link
                to="/contact"
                className="
                  border-4
                  border-slate-900
                  bg-slate-900
                  text-white
                  px-6
                  py-4
                  font-semibold
                  uppercase
                  text-center
                  shadow-[4px_4px_0_0_rgba(52,211,153,1)]
                "
                style={{ color: "white" }}
              >
                Start Project
              </Link>

              <Link
                to="/products"
                className="
                  border-4
                  border-slate-900
                  bg-emerald-400
                  text-slate-900
                  px-6
                  py-4
                  font-semibold
                  uppercase
                  text-center
                  shadow-[4px_4px_0_0_rgba(15,23,42,1)]
                "
              >
                View Products
              </Link>

            </div>

          </div>

          {/* Right Panel */}

          <div
            className="
              lg:col-span-4
              bg-emerald-400
              border-4
              border-slate-900
              p-6
              shadow-[8px_8px_0_0_rgba(15,23,42,1)]
            "
          >

            <div className="text-xs uppercase font-semibold tracking-widest">
              Featured Product
            </div>

            <h3
              className="
                mt-4
                text-4xl
                font-semibold
                uppercase
                tracking-tight
              "
            >
              Eduline
            </h3>

            <p className="mt-4 font-semibold text-slate-800">
              Launch your own branded academy with courses,
              certificates, exams, payments and student
              management.
            </p>

            <div className="mt-8 border-t-2 border-slate-900 pt-4">

              <div className="flex justify-between font-semibold text-sm uppercase">
                <span>Platform Status</span>
                <span>Online</span>
              </div>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-8 mt-8">

          <div
            className="
              bg-white
              border-4
              border-slate-900
              p-6
              shadow-[8px_8px_0_0_rgba(52,211,153,1)]
            "
          >
            <div className="text-xs font-semibold uppercase">
              Experience
            </div>

            <div className="text-5xl font-semibold mt-3">
              4+
            </div>

            <p className="mt-2 font-semibold text-slate-700">
              Years Building Platforms
            </p>
          </div>

          <div
            className="
              bg-emerald-400
              border-4
              border-slate-900
              p-6
              shadow-[8px_8px_0_0_rgba(15,23,42,1)]
            "
          >
            <div className="text-xs font-semibold uppercase">
              Projects
            </div>

            <div className="text-5xl font-semibold mt-3">
              50+
            </div>

            <p className="mt-2 font-semibold">
              Delivered Successfully
            </p>
          </div>

          <div
            className="
              bg-slate-900
              text-white
              border-4
              border-slate-900
              p-6
              shadow-[8px_8px_0_0_rgba(52,211,153,1)]
            "
          >
            <div className="text-xs font-semibold uppercase text-emerald-300">
              Support
            </div>

            <div className="text-5xl font-semibold mt-3">
              24/7
            </div>

            <p className="mt-2 font-semibold text-slate-300">
              Technical Assistance
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}