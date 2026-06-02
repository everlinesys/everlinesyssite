import {
  Building2,
  GraduationCap,
  Users,
  Globe,
  Briefcase,
  LineChart,
  ArrowRight,
} from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: GraduationCap,
      title: "Coaching Institutes",
      desc: "Manage batches, attendance, exams and student performance from one platform.",
    },
    {
      icon: Globe,
      title: "Digital Educators",
      desc: "Launch branded academies and sell courses worldwide.",
    },
    {
      icon: Building2,
      title: "Schools & Colleges",
      desc: "Modern learning infrastructure with centralized management.",
    },
    {
      icon: Briefcase,
      title: "Corporate Training",
      desc: "Employee onboarding, compliance and workforce development.",
    },
    {
      icon: Users,
      title: "Multi Branch Networks",
      desc: "Operate multiple centers with unified reporting and control.",
    },
    {
      icon: LineChart,
      title: "Growing Businesses",
      desc: "CRM, automation, billing and operational systems.",
    },
  ];

  return (
    <section className="relative py-32 bg-[#f7faf8] overflow-hidden">

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
            ● Solutions
          </div>

          <h2 className="
            mt-8
            text-5xl
            md:text-7xl
            font-black
            tracking-tight
            leading-none
            text-slate-950
          ">
            BUILT FOR
            <br />
            EVERY
            <br />
            <span className="text-emerald-600">
              GROWTH STAGE.
            </span>
          </h2>

          <p className="
            mt-8
            max-w-3xl
            text-xl
            text-slate-600
          ">
            From independent educators to enterprise organizations,
            Everline Systems delivers platforms that scale with ambition.
          </p>

        </div>

        {/* Main Bento */}

        <div className="grid lg:grid-cols-12 gap-6">

          {/* Hero Card */}

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
              Platform Ecosystem
            </div>

            <h3 className="
              mt-6
              text-5xl
              font-black
              leading-none
            ">
              ONE
              PLATFORM.
              <br />
              MANY
              SOLUTIONS.
            </h3>

            <p className="
              mt-8
              text-slate-300
              text-lg
            ">
              Start with a single product and expand into
              a complete digital ecosystem tailored to your needs.
            </p>

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
              Explore Solutions
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Solution Cards */}

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">

            {solutions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    bg-white
                    border-4
                    border-slate-950
                    p-6
                    shadow-[8px_8px_0_0_rgba(15,23,42,1)]
                    hover:bg-emerald-400
                    hover:-translate-y-1
                    transition-all
                  "
                >
                  <div className="
                    w-14
                    h-14
                    border-4
                    border-slate-950
                    flex
                    items-center
                    justify-center
                    mb-5
                  ">
                    <Icon size={24} />
                  </div>

                  <h3 className="
                    text-xl
                    font-black
                    mb-3
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    text-slate-700
                    font-medium
                  ">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom Strip */}

        <div className="
          mt-12
          grid
          md:grid-cols-3
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
              Educators
            </div>

            <div className="mt-4 text-5xl font-black">
              Teach
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
              Businesses
            </div>

            <div className="mt-4 text-5xl font-black">
              Scale
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
              Everline
            </div>

            <div className="mt-4 text-5xl font-black">
              Build.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}