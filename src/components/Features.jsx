import {
  Rocket,
  Settings,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Boxes,
} from "lucide-react";

export default function Capabilities() {
  return (
    <section className="relative py-32 bg-[#f7faf8] overflow-hidden text-slate-900">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16,185,129,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16,185,129,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-emerald-300/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="mb-20">

          <div className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            bg-white
            border-2
            border-slate-950
            font-black
            uppercase
            text-xs
            tracking-widest
            shadow-[4px_4px_0_0_rgba(15,23,42,1)]
          ">
            ● Solutions
          </div>

          <h2 className="
            mt-8
            text-5xl
            md:text-7xl
            font-black
            tracking-tight
            text-slate-950
            leading-none
          ">
            START WITH
            <br />
            A PRODUCT.
            <br />
            <span className="text-emerald-600">
              BUILD A SYSTEM.
            </span>
          </h2>

        </div>

        {/* Bento Grid */}

        <div className="grid lg:grid-cols-12 gap-6">

          {/* Left Card */}

          <div className="
            lg:col-span-6
            bg-white
            border-4
            border-slate-950
            p-10
            shadow-[12px_12px_0_0_rgba(15,23,42,1)]
          ">

            <div className="
              w-16 h-16
              bg-emerald-400
              border-4
              border-slate-950
              flex
              items-center
              justify-center
            ">
              <Rocket size={30} />
            </div>

            <h3 className="
              mt-8
              text-4xl
              font-black
              text-slate-950
            ">
              Ready Products
            </h3>

            <p className="
              mt-6
              text-lg
              text-slate-600
            ">
              Launch quickly using proven platforms already
              powering real businesses.
            </p>

            <div className="mt-10 space-y-4">

              {[
                "Eduline Learning Platform",
                "WhatsApp CRM",
                "Billing & Inventory",
                "Cloud Infrastructure",
                "Fast Deployment"
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    border-2
                    border-slate-950
                    p-4
                    bg-[#fafafa]
                  "
                >
                  <CheckCircle2 size={18} />
                  <span className="font-bold">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <button className="
              mt-10
              bg-emerald-400
              border-4
              border-slate-950
              px-8
              py-4
              font-black
              uppercase
              flex
              items-center
              gap-3
              shadow-[6px_6px_0_0_rgba(15,23,42,1)]
              hover:translate-x-1
              hover:translate-y-1
              hover:shadow-none
              transition-all
            ">
              Explore Products
              <ArrowRight size={20} />
            </button>

          </div>

          {/* Right Card */}

          <div className="
            lg:col-span-6
            bg-slate-950
            text-white
            border-4
            border-slate-950
            p-10
            shadow-[12px_12px_0_0_rgba(16,185,129,1)]
          ">

            <div className="
              w-16 h-16
              bg-emerald-400
              text-slate-950
              border-4
              border-emerald-400
              flex
              items-center
              justify-center
            ">
              <Settings size={30} />
            </div>

            <h3 className="
              mt-8
              text-4xl
              font-black
            ">
              Custom Systems
            </h3>

            <p className="
              mt-6
              text-lg
              text-slate-300
            ">
              When standard tools aren't enough,
              we design and build complete digital ecosystems.
            </p>

            <div className="mt-10 space-y-4">

              {[
                "Business Process Design",
                "Automation Workflows",
                "Custom Platforms",
                "Internal Tools",
                "System Integration"
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    border
                    border-white/10
                    p-4
                    bg-white/5
                  "
                >
                  <Cpu size={18} className="text-emerald-400" />
                  <span className="font-bold">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <button className="
              mt-10
              bg-emerald-400
              text-slate-950
              border-4
              border-emerald-400
              px-8
              py-4
              font-black
              uppercase
              flex
              items-center
              gap-3
              shadow-[6px_6px_0_0_rgba(255,255,255,1)]
              hover:translate-x-1
              hover:translate-y-1
              hover:shadow-none
              transition-all
            ">
              Start Project
              <ArrowRight size={20} />
            </button>

          </div>

          {/* Bottom Cards */}

          <div className="
            lg:col-span-4
            bg-white
            border-4
            border-slate-950
            p-8
            shadow-[8px_8px_0_0_rgba(15,23,42,1)]
          ">
            <Boxes className="mb-4" size={32} />

            <div className="text-sm uppercase font-black">
              Products
            </div>

            <div className="mt-4 text-6xl font-black">
              3+
            </div>

            <div className="mt-2 text-slate-600">
              Ready-to-use platforms
            </div>
          </div>

          <div className="
            lg:col-span-4
            bg-emerald-400
            border-4
            border-slate-950
            p-8
            shadow-[8px_8px_0_0_rgba(15,23,42,1)]
          ">
            <div className="text-sm uppercase font-black">
              Philosophy
            </div>

            <div className="mt-4 text-4xl font-black leading-tight">
              Build Once.
              <br />
              Run Forever.
            </div>
          </div>

          <div className="
            lg:col-span-4
            bg-white
            border-4
            border-slate-950
            p-8
            shadow-[8px_8px_0_0_rgba(15,23,42,1)]
          ">
            <div className="text-sm uppercase font-black">
              Growth Path
            </div>

            <div className="mt-4 text-4xl font-black">
              Product →
              <br />
              System
            </div>

            <div className="mt-3 text-slate-600">
              Start simple. Scale intelligently.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}