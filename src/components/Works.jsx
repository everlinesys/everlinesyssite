import { motion } from "framer-motion";

const projects = [
  {
    name: "Mathritva Ayur",
    url: "https://mathritvaayur.com",
    img: "/works/math.png",
    bg: "bg-orange-50",
  },
  {
    name: "Proftek Systems",
    url: "https://profteksystems.com",
    img: "/works/proftek.png",
    bg: "bg-blue-50",
  },
  {
    name: "VBreeze Fans",
    url: "https://vbreezefans.com",
    img: "/works/vbreeze.png",
    bg: "bg-sky-50",
  },
  {
    name: "Euphoria International",
    url: "https://euphoriainternational.in",
    img: "/works/euphoria.png",
    bg: "bg-purple-50",
  },
  {
    name: "LatAsia",
    url: "https://latasia.in",
    img: "/works/latasia.png",
    bg: "bg-green-50",
  },
  {
    name: "Axiom Learning",
    url: "https://axiom-learning.vercel.app",
    img: "/works/axiom.png",
    bg: "bg-indigo-50",
  },
  {
    name: "ASP Fin Academy",
    url: "https://aspfinacademy.com",
    img: "/works/aspfin.png",
    bg: "bg-amber-50",
  },
  {
    name: "India Trip Plan",
    url: "https://theindiatripplan.com",
    img: "/works/indiatrip.png",
    bg: "bg-emerald-50",
  },
  {
    name: "Eduline",
    url: "https://eduline.everlinesys.com",
    img: "/works/eduline.png",
    bg: "bg-blue-50",
  },
];

export default function Works() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-blue-600">
            Selected Work
          </p>

          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
            Platforms & Websites We've Built
          </h2>

          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Over the past 4 years we’ve built websites, platforms
            and automation systems for businesses, startups,
            and educators.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              className={`rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition ${project.bg}`}
            >

              {/* Screenshot */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-5 bg-white">
                <h3 className="font-semibold text-slate-900">
                  {project.name}
                </h3>

                <p className="text-sm text-slate-500 mt-1 break-all">
                  {project.url.replace("https://", "")}
                </p>
              </div>

            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}