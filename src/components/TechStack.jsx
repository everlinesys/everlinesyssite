import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiAmazon,
  SiDocker,
  SiVercel
} from "react-icons/si";

export default function TechStack() {
  const tech = [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiAmazon, name: "AWS" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiVercel, name: "Vercel" },
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Technologies We <span className="text-blue-600">Use & Master</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We build scalable systems using modern, battle-tested technologies
            trusted by high-growth startups and enterprises worldwide.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {tech.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-3xl p-6 shadow-lg border border-slate-100 
                           flex flex-col items-center justify-center 
                           transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Icon
                  size={40}
                  className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300"
                />
                <span className="mt-4 text-sm font-semibold text-slate-700 text-center">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}