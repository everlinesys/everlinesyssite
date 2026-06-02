import {
  ShieldCheck,
  GraduationCap,
  Building2,
  Briefcase,
  Languages,
  Award,
} from "lucide-react";

export default function Trust() {
  const sectors = [
    {
      icon: GraduationCap,
      title: "Coaching Institutes",
      desc: "Manage batches, attendance, exams and student progress from one platform.",
    },
    {
      icon: Award,
      title: "Digital Educators",
      desc: "Sell courses globally with secure content delivery and payments.",
    },
    {
      icon: Building2,
      title: "Training Centers",
      desc: "Deliver certification programs with structured learning paths.",
    },
    {
      icon: Briefcase,
      title: "Corporate Academies",
      desc: "Enable onboarding, compliance and workforce development.",
    },
    {
      icon: ShieldCheck,
      title: "Higher Education",
      desc: "Enterprise-grade security and scalable learning infrastructure.",
    },
    {
      icon: Languages,
      title: "Language Schools",
      desc: "Flexible scheduling, virtual classrooms and student engagement.",
    },
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-emerald-300/20 blur-3xl rounded-full" />

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
            shadow-[4px_4px_0_0_rgba(15,23,42,1)]
            text-xs
            uppercase
            tracking-widest
            font-black
          ">
            <ShieldCheck size={14} />
            Enterprise Trust
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
            POWERING
            <br />
            MODERN
            <br />
            <span className="text-emerald-600">
              EDUCATION.
            </span>
          </h2>

          <p className="
            mt-8
            max-w-3xl
            text-xl
            text-slate-600
          ">
            Built for educators, institutions, academies and
            organizations delivering learning at scale.
          </p>

        </div>

        {/* Sectors */}

        <div className="grid lg:grid-cols-12 gap-6">

          {/* Large Hero Card */}

          <div className="
            lg:col-span-5
            bg-slate-950
            text-white
            border-4
            border-slate-950
            p-10
            shadow-[12px_12px_0_0_rgba(16,185,129,1)]
          ">

            <div className="
              text-xs
              uppercase
              tracking-widest
              font-black
              text-emerald-400
            ">
              Trusted Platform
            </div>

            <h3 className="
              mt-6
              text-5xl
              font-black
              leading-none
            ">
              BUILT FOR
              REAL
              LEARNING.
            </h3>

            <p className="
              mt-8
              text-slate-300
              text-lg
            ">
              From coaching centers to enterprise academies,
              Eduline adapts to every stage of educational growth.
            </p>

            <div className="
              mt-10
              border
              border-white/10
              bg-white/5
              p-6
            ">
              <div className="text-emerald-400 text-sm font-black uppercase">
                Mission
              </div>

              <div className="mt-3 text-2xl font-black">
                Make digital education
                accessible, scalable
                and profitable.
              </div>
            </div>

          </div>

          {/* Sector Cards */}

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">

            {sectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <div
                  key={sector.title}
                  className="
                    bg-white
                    border-4
                    border-slate-950
                    p-6
                    shadow-[8px_8px_0_0_rgba(15,23,42,1)]
                    hover:bg-emerald-400
                    transition-all
                  "
                >
                  <Icon
                    size={32}
                    className="mb-5"
                  />

                  <h3 className="
                    text-xl
                    font-black
                    mb-3
                  ">
                    {sector.title}
                  </h3>

                  <p className="
                    text-slate-700
                    font-medium
                  ">
                    {sector.desc}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

        {/* Stats */}

        <div className="
          mt-12
          grid
          md:grid-cols-4
          gap-6
        ">

          <div className="
            bg-white
            border-4
            border-slate-950
            p-8
            shadow-[8px_8px_0_0_rgba(15,23,42,1)]
          ">
            <div className="text-xs uppercase font-black">
              Uptime
            </div>

            <div className="mt-4 text-6xl font-black">
              99.9%
            </div>
          </div>

          <div className="
            bg-emerald-400
            border-4
            border-slate-950
            p-8
            shadow-[8px_8px_0_0_rgba(15,23,42,1)]
          ">
            <div className="text-xs uppercase font-black">
              Learners
            </div>

            <div className="mt-4 text-6xl font-black">
              50K+
            </div>
          </div>

          <div className="
            bg-white
            border-4
            border-slate-950
            p-8
            shadow-[8px_8px_0_0_rgba(15,23,42,1)]
          ">
            <div className="text-xs uppercase font-black">
              Support
            </div>

            <div className="mt-4 text-6xl font-black">
              24/7
            </div>
          </div>

          <div className="
            bg-slate-950
            text-white
            border-4
            border-slate-950
            p-8
            shadow-[8px_8px_0_0_rgba(16,185,129,1)]
          ">
            <div className="text-xs uppercase font-black text-emerald-400">
              Security
            </div>

            <div className="mt-4 text-5xl font-black">
              Enterprise
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}