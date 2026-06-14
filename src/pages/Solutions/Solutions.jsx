import {
  Workflow,
  GraduationCap,
  MessageSquare,
  BarChart3,
  Cloud,
  Settings,
} from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: GraduationCap,
      title: "Learning Platforms",
      desc: "Build branded education platforms, online academies, and training systems.",
    },
    {
      icon: MessageSquare,
      title: "Customer Engagement",
      desc: "CRM solutions, WhatsApp automation, and lead management systems.",
    },
    {
      icon: Workflow,
      title: "Business Automation",
      desc: "Eliminate repetitive tasks through workflow automation and integrations.",
    },
    {
      icon: BarChart3,
      title: "Operations Management",
      desc: "Billing, inventory, reporting, and internal management systems.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      desc: "Scalable hosting, deployment, monitoring, and platform management.",
    },
    {
      icon: Settings,
      title: "Custom Software",
      desc: "Tailored platforms built around your organization's unique requirements.",
    },
  ];

  return (<section className="bg-white py-24 lg:py-32"> <div className="max-w-7xl mx-auto px-6 lg:px-8">


    {/* Header */}
    <div className="max-w-4xl mb-20">

      <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
        Solutions
      </span>

      <h2 className="mt-4 text-5xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-slate-900">
        Technology solutions
        for modern organizations.
      </h2>

      <p className="mt-8 text-xl text-slate-600 max-w-3xl leading-relaxed">
        We help businesses, educators, and organizations
        simplify operations, improve efficiency, and create
        scalable digital experiences.
      </p>

    </div>

    {/* Solution Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {solutions.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-[#f8f8f6] border border-slate-200 rounded-3xl p-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
              <Icon className="text-blue-700" size={24} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        );
      })}

    </div>

    {/* Bottom Statement */}
    <div className="mt-24 bg-slate-900 rounded-[40px] p-12 lg:p-16 text-white">

      <div className="max-w-3xl">

        <span className="text-blue-400 text-sm uppercase tracking-wide">
          Our Approach
        </span>

        <h3 className="mt-4 text-4xl lg:text-6xl font-semibold tracking-tight">
          Start with one solution.
          Expand into a complete system.
        </h3>

        <p className="mt-8 text-slate-300 text-lg leading-relaxed">
          Many clients begin with a single platform.
          Over time, that platform becomes the foundation
          for a broader digital ecosystem supporting growth,
          automation, and operational excellence.
        </p>

      </div>

    </div>

  </div>
  </section>


  );
}
