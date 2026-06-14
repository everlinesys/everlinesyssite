import {
  BookOpen,
  FileText,
  PlayCircle,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";

export default function Resources() {
  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description:
        "Setup guides, technical references, and product documentation.",
    },
    {
      icon: FileText,
      title: "Insights",
      description:
        "Articles and practical guidance on software, automation, and digital growth.",
    },
    {
      icon: PlayCircle,
      title: "Tutorials",
      description:
        "Video walkthroughs to help teams get started faster.",
    },
    {
      icon: LifeBuoy,
      title: "Support",
      description:
        "Technical assistance, onboarding support, and troubleshooting resources.",
    },
  ];

  return (<section className="bg-[#f5f5f3] py-24 lg:py-32"> <div className="max-w-7xl mx-auto px-6 lg:px-8">


    {/* Header */}
    <div className="max-w-4xl mb-20">

      <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
        Resource Center
      </span>

      <h1 className="mt-4 text-5xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-slate-900">
        Learn, implement,
        and grow.
      </h1>

      <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl">
        Explore documentation, tutorials, guides, and support resources
        designed to help you get the most from Everline Systems products and services.
      </p>

    </div>

    {/* Resource Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {resources.map((resource) => {
        const Icon = resource.icon;

        return (
          <div
            key={resource.title}
            className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-slate-300 transition"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
              <Icon className="text-blue-700" size={24} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-slate-900">
              {resource.title}
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              {resource.description}
            </p>

            <button className="mt-8 inline-flex items-center gap-2 text-blue-700 font-medium">
              Explore
              <ArrowRight size={16} />
            </button>

          </div>
        );
      })}

    </div>

    {/* Featured Articles */}
    <div className="mt-24">

      <div className="flex items-center justify-between mb-10">

        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Latest Insights
        </h2>

        <button className="text-blue-700 font-medium">
          View All
        </button>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {[1, 2, 3].map((item) => (
          <article
            key={item}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden"
          >
            <div className="h-56 bg-slate-100" />

            <div className="p-8">

              <div className="text-sm text-slate-500">
                Technology & Growth
              </div>

              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                Example article title goes here
              </h3>

              <p className="mt-4 text-slate-600">
                A short description of the article content.
              </p>

            </div>
          </article>
        ))}

      </div>

    </div>

    {/* Support CTA */}
    <div className="mt-24 bg-slate-900 rounded-[40px] p-12 lg:p-16 text-white">

      <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
        Need help?
      </h2>

      <p className="mt-6 text-slate-300 text-lg max-w-2xl">
        Our team is available to assist with onboarding,
        migration, implementation, and technical support.
      </p>

      <button className="mt-10 bg-white text-slate-900 px-7 py-4 rounded-full font-medium">
        Contact Support
      </button>

    </div>

  </div>
  </section>


  );
}
