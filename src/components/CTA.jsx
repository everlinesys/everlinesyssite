import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#f7faf8]">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16,185,129,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16,185,129,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-emerald-300/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="
          bg-slate-950
          border-4
          border-slate-950
          shadow-[16px_16px_0_0_rgba(16,185,129,1)]
          overflow-hidden
        ">

          {/* Top Bar */}

          <div className="
            flex
            items-center
            justify-between
            px-6
            py-4
            border-b-4
            border-emerald-500/20
          ">

            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>

            <div className="
              text-emerald-400
              text-xs
              uppercase
              tracking-[0.3em]
              font-black
            ">
              Everline OS
            </div>

          </div>

          {/* Content */}

          <div className="p-10 md:p-20">

            <div className="
              inline-flex
              px-4
              py-2
              bg-emerald-500/10
              border
              border-emerald-500/20
              text-emerald-300
              text-xs
              uppercase
              tracking-widest
              font-black
            ">
              Ready To Launch
            </div>

            <h2 className="
              mt-8
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              tracking-tight
              text-white
              leading-none
            ">
              BUILD
              <br />
              ONCE.
              <br />
              <span className="text-emerald-400">
                RUN FOREVER.
              </span>
            </h2>

            <p className="
              mt-8
              max-w-2xl
              text-xl
              text-slate-300
              leading-relaxed
            ">
              Launch your academy with Eduline or work with
              Everline Systems to build custom software,
              websites and automation solutions.
            </p>

            <div className="
              mt-12
              flex
              flex-col
              sm:flex-row
              gap-5
            ">

              <Link
                to="https://eduline.everlinesys.com"
                target="_blank"
                className="
                  bg-emerald-400
                  text-slate-950
                  px-8
                  py-5
                  font-black
                  uppercase
                  border-4
                  border-emerald-400
                  shadow-[8px_8px_0_0_rgba(255,255,255,1)]
                  hover:translate-x-1
                  hover:translate-y-1
                  hover:shadow-none
                  transition-all
                "
              >
                Launch With Eduline →
              </Link>

              <Link
                to="/contact"
                className="
                  bg-transparent
                  text-white
                  px-8
                  py-5
                  font-black
                  uppercase
                  border-4
                  border-white
                  hover:bg-white
                  hover:text-slate-950
                  transition-all
                "
              >
                Start Custom Project
              </Link>

            </div>

            {/* Bottom Bento */}

            <div className="
              mt-16
              grid
              md:grid-cols-3
              gap-4
            ">

              <div className="
                bg-white/5
                border
                border-white/10
                p-6
              ">
                <div className="text-emerald-400 text-xs uppercase font-black">
                  Product
                </div>

                <div className="mt-3 text-3xl font-black text-white">
                  Eduline
                </div>

                <div className="mt-2 text-slate-400">
                  Branded online academies.
                </div>
              </div>

              <div className="
                bg-white/5
                border
                border-white/10
                p-6
              ">
                <div className="text-emerald-400 text-xs uppercase font-black">
                  Service
                </div>

                <div className="mt-3 text-3xl font-black text-white">
                  Software
                </div>

                <div className="mt-2 text-slate-400">
                  Custom platforms & automation.
                </div>
              </div>

              <div className="
                bg-white/5
                border
                border-white/10
                p-6
              ">
                <div className="text-emerald-400 text-xs uppercase font-black">
                  Mission
                </div>

                <div className="mt-3 text-3xl font-black text-white">
                  Growth
                </div>

                <div className="mt-2 text-slate-400">
                  Technology that scales with you.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}