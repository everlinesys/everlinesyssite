import {
  SiGoogle,
  SiAmazon,
  SiHostinger,
  SiGodaddy,
  SiVercel,
  SiMeta,
  SiFirebase,
} from "react-icons/si";

export default function BackedBy() {
  const partners = [
    { icon: SiGoogle, name: "Google" },
    { icon: SiAmazon, name: "AWS" },
    { icon: SiHostinger, name: "Hostinger" },
    { icon: SiGodaddy, name: "GoDaddy" },
    { icon: SiVercel, name: "Vercel" },
    { icon: SiMeta, name: "Meta" },
    { icon: SiFirebase, name: "Firebase" },
  ];

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-emerald-300/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-slate-950 font-semibold uppercase text-xs tracking-widest shadow-[4px_4px_0_0_rgba(15,23,42,1)]">
            ● Infrastructure
          </div>

          <h2 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight text-slate-950">
            POWERED BY
            <br />
            GLOBAL
            <br />
            PLATFORMS.
          </h2>

          <p className="mt-6 max-w-2xl text-xl font-medium text-slate-600">
            Built on trusted infrastructure used by millions of businesses worldwide.
          </p>

        </div>

        {/* Bento Layout */}

        <div className="grid lg:grid-cols-12 gap-6">

          {/* Large Card */}

          <div className="lg:col-span-5 bg-slate-950 text-white border-4 border-slate-950 p-10 shadow-[12px_12px_0_0_rgba(16,185,129,1)]">

            <div className="text-emerald-400 text-xs uppercase font-semibold tracking-widest">
              Infrastructure Stack
            </div>

            <h3 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
              Enterprise-grade
              <br />
              technology.
            </h3>

            <p className="mt-6 text-slate-300 text-lg">
              Hosting, cloud infrastructure, analytics,
              authentication, streaming and deployment powered
              by industry-leading platforms.
            </p>

          </div>

          {/* Logo Grid */}

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-6">

            {partners.map((partner) => {
              const Icon = partner.icon;

              return (
                <div
                  key={partner.name}
                  className="
                    bg-white
                    border-4
                    border-slate-950
                    p-8
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    shadow-[8px_8px_0_0_rgba(15,23,42,1)]
                    hover:bg-emerald-400
                    hover:-translate-y-1
                    transition-all
                  "
                >
                  <Icon size={42} />

                  <span className="font-semibold text-sm uppercase tracking-wide text-center">
                    {partner.name}
                  </span>
                </div>
              );
            })}

          </div>

          {/* Bottom Stats */}

          <div className="lg:col-span-4 bg-white border-4 border-slate-950 p-8 shadow-[8px_8px_0_0_rgba(15,23,42,1)]">

            <div className="text-xs uppercase font-semibold">
              Uptime
            </div>

            <div className="mt-4 text-6xl font-semibold">
              99.9%
            </div>

          </div>

          <div className="lg:col-span-4 bg-emerald-400 border-4 border-slate-950 p-8 shadow-[8px_8px_0_0_rgba(15,23,42,1)]">

            <div className="text-xs uppercase font-semibold">
              Deployments
            </div>

            <div className="mt-4 text-6xl font-semibold">
              Fast
            </div>

          </div>

          <div className="lg:col-span-4 bg-white border-4 border-slate-950 p-8 shadow-[8px_8px_0_0_rgba(15,23,42,1)]">

            <div className="text-xs uppercase font-semibold">
              Security
            </div>

            <div className="mt-4 text-6xl font-semibold">
              Secure
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}