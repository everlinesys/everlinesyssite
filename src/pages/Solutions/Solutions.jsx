import { Building2, GraduationCap, Users, Globe, Briefcase, LineChart } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: GraduationCap,
      title: "For Coaching Institutes",
      desc: "Manage batches, attendance, exams, and student progress from a single platform designed for education businesses.",
    },
    {
      icon: Globe,
      title: "For Digital Educators",
      desc: "Launch your own branded online academy, sell courses worldwide, and automate your teaching operations.",
    },
    {
      icon: Building2,
      title: "For Schools & Colleges",
      desc: "Modernize institutional learning with centralized management, analytics, and secure digital infrastructure.",
    },
    {
      icon: Briefcase,
      title: "For Corporate Training",
      desc: "Upskill employees with onboarding programs, compliance training, and performance tracking tools.",
    },
    {
      icon: Users,
      title: "For Coaching Networks",
      desc: "Operate multiple branches efficiently with unified reporting, communication, and control.",
    },
    {
      icon: LineChart,
      title: "For Growing Businesses",
      desc: "Scale operations with automation, billing systems, CRM tools, and data-driven insights.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Solutions for Every Stage of Growth
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Whether you're starting a learning platform or managing a large
            organization, Everlinesys provides scalable systems tailored to your needs.
          </p>
        </div>

        {/* ===== SOLUTIONS GRID ===== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg hover:border-blue-300 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-5">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
