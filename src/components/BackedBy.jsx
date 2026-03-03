import {
  SiGoogle,
  SiGoogleanalytics,
  SiAmazon,
  SiHostinger,
  SiGodaddy,
  SiVercel,
  SiStreamlabs,
  SiMeta,
  SiFirebase
} from "react-icons/si";

export default function BackedBy() {
  const partners = [
    { icon: SiGoogle, name: "Google" },
    { icon: SiGoogleanalytics, name: "Google Analytics" },
    { icon: SiAmazon, name: "AWS" },
    { icon: SiHostinger, name: "Hostinger" },
    { icon: SiGodaddy, name: "GoDaddy" },
    { icon: SiVercel, name: "Vercel" },
    { icon: SiStreamlabs, name: "Bunny Stream" },
    { icon: SiMeta, name: "Meta Business" },
    { icon: SiGoogle, name: "Google AdSense" },
    { icon: SiFirebase, name: "Firebase" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Backed by <span className="text-blue-600">Global Technology Leaders</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our platforms are powered by world-class infrastructure, 
            trusted globally for performance, scalability, and security.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center">
          {partners.map((partner, i) => {
            const Icon = partner.icon;
            return (
              <div
                key={i}
                className="group flex flex-col items-center justify-center gap-3 
                           text-slate-400 hover:text-blue-600 
                           transition-all duration-300"
              >
                <Icon size={48} className="grayscale group-hover:grayscale-0 transition duration-300" />
                <span className="text-sm font-medium text-center">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}