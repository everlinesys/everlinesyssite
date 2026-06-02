import {
  BookOpen,
  FileText,
  Video,
  Download,
  ArrowRight,
  Search,
  LifeBuoy,
} from "lucide-react";

export default function Resources() {
  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      desc: "Setup guides, platform configuration and product documentation.",
    },
    {
      icon: FileText,
      title: "Case Studies",
      desc: "See how educators and businesses use Everline products.",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      desc: "Step-by-step walkthroughs and onboarding videos.",
    },
    {
      icon: Download,
      title: "Downloads",
      desc: "Brochures, guides, PDFs and marketing assets.",
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

        <div className="grid lg:grid-cols-12 gap-6 mb-12">

          <div
            className="
              lg:col-span-8
              bg-slate-950
              text-white
              border-4
              border-slate-950
              p-10
              shadow-[12px_12px_0_0_rgba(16,185,129,1)]
            "
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-2
                bg-emerald-400
                text-slate-950
                text-xs
                uppercase
                font-black
              "
            >
              ● Resource Center
            </div>

            <h2
              className="
                mt-8
                text-5xl
                md:text-7xl
                font-black
                leading-none
              "
            >
              LEARN.
              <br />
              BUILD.
              <br />
              <span className="text-emerald-400">
                SCALE.
              </span>
            </h2>

            <p
              className="
                mt-8
                text-xl
                text-slate-300
                max-w-2xl
              "
            >
              Documentation, tutorials, case studies and
              resources to help you get the most out of
              Everline Systems products.
            </p>

          </div>

          {/* Search Card */}

          <div
            className="
              lg:col-span-4
              bg-white
              border-4
              border-slate-950
              p-8
              shadow-[12px_12px_0_0_rgba(15,23,42,1)]
            "
          >

            <div className="text-xs uppercase font-black">
              Quick Search
            </div>

            <div className="relative mt-6">

              <Search
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                type="text"
                placeholder="Search resources..."
                className="
                  w-full
                  border-4
                  border-slate-950
                  pl-12
                  pr-4
                  py-4
                  font-bold
                  outline-none
                "
              />

            </div>

            <div className="
              mt-6
              text-sm
              text-slate-600
            ">
              Find guides, videos, downloads and support content.
            </div>

          </div>

        </div>

        {/* Resources */}

        <div className="grid lg:grid-cols-12 gap-6">

          {/* Featured */}

          <div
            className="
              lg:col-span-5
              bg-emerald-400
              border-4
              border-slate-950
              p-10
              shadow-[12px_12px_0_0_rgba(15,23,42,1)]
            "
          >

            <div className="
              text-xs
              uppercase
              font-black
              tracking-widest
            ">
              Featured Resource
            </div>

            <h3 className="
              mt-6
              text-5xl
              font-black
              leading-none
            ">
              START
              HERE.
            </h3>

            <p className="
              mt-6
              text-lg
              font-medium
            ">
              New to Everline? Follow our getting started
              guides and launch your platform quickly.
            </p>

            <button
              className="
                mt-8
                bg-slate-950
                text-white
                border-4
                border-slate-950
                px-8
                py-4
                font-black
                uppercase
                flex
                items-center
                gap-3
                shadow-[6px_6px_0_0_rgba(255,255,255,1)]
              "
            >
              Explore Guides
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Resource Cards */}

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">

            {resources.map((item) => {
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

                  <div
                    className="
                      w-14
                      h-14
                      border-4
                      border-slate-950
                      flex
                      items-center
                      justify-center
                      mb-5
                    "
                  >
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
                    mb-6
                  ">
                    {item.desc}
                  </p>

                  <div className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    uppercase
                    font-black
                  ">
                    View Resource
                    <ArrowRight size={16} />
                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom Support CTA */}

        <div
          className="
            mt-12
            bg-slate-950
            text-white
            border-4
            border-slate-950
            p-10
            shadow-[12px_12px_0_0_rgba(16,185,129,1)]
          "
        >

          <div className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
          ">

            <div>

              <div className="
                text-xs
                uppercase
                font-black
                tracking-widest
                text-emerald-400
              ">
                Need Help?
              </div>

              <h3 className="
                mt-4
                text-4xl
                font-black
              ">
                Support Available 24/7
              </h3>

              <p className="
                mt-3
                text-slate-300
              ">
                Our team is ready to help with setup,
                migration and technical support.
              </p>

            </div>

            <button
              className="
                bg-emerald-400
                text-slate-950
                border-4
                border-emerald-400
                px-8
                py-5
                font-black
                uppercase
                flex
                items-center
                gap-3
                shadow-[6px_6px_0_0_rgba(255,255,255,1)]
              "
            >
              <LifeBuoy size={18} />
              Contact Support
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}