import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const reviews = [
  {
    quote:
      "Eduline transformed how we deliver training programs. Everything is now managed from one platform.",
    name: "Rahul Menon",
    role: "Director, Apex Training Institute",
    image:
      "https://images.unsplash.com/photo-1607081692251-d689f1b9af84?q=80&w=387",
  },
  {
    quote:
      "Our WhatsApp CRM increased conversion rates dramatically by organizing all enquiries in one place.",
    name: "Neha Kapoor",
    role: "Operations Head, SkillHub",
    image:
      "https://images.unsplash.com/photo-1607189200597-4d0923ef98c6?q=80&w=387",
  },
  {
    quote:
      "Automation reduced manual work by over 60%. Our team now focuses on growth instead of processes.",
    name: "Karan Shah",
    role: "Founder, Growth Academy",
    image:
      "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?q=80&w=464",
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

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
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-300/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-slate-950 font-black uppercase text-xs tracking-widest">
            ● Testimonials
          </div>

          <h2 className="mt-6 text-5xl md:text-7xl font-black tracking-tight text-slate-950">
            PEOPLE
            <br />
            LOVE WHAT
            <br />
            WE BUILD.
          </h2>

        </div>

        {/* Main Bento */}

        <div className="grid lg:grid-cols-12 gap-6">

          {/* Quote */}

          <div className="lg:col-span-8 bg-slate-950 text-white border-4 border-slate-950 p-10 md:p-14 shadow-[12px_12px_0_0_rgba(16,185,129,1)]">

            <div className="text-emerald-400 text-8xl font-black leading-none">
              "
            </div>

            <AnimatePresence mode="wait">

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-3xl md:text-5xl font-black leading-tight mt-4">
                  {reviews[index].quote}
                </h3>

                <div className="mt-12">

                  <div className="text-2xl font-black">
                    {reviews[index].name}
                  </div>

                  <div className="text-emerald-300 uppercase tracking-wider text-sm mt-2">
                    {reviews[index].role}
                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* Profile Card */}

          <div className="lg:col-span-4 bg-white border-4 border-slate-950 overflow-hidden shadow-[12px_12px_0_0_rgba(15,23,42,1)]">

            <div className="relative h-[420px]">

              <AnimatePresence mode="wait">

                <motion.img
                  key={index}
                  src={reviews[index].image}
                  alt={reviews[index].name}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.15, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />

              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <div className="bg-emerald-400 text-slate-950 inline-block px-3 py-1 font-black text-xs uppercase">
                  Verified Client
                </div>

              </div>

            </div>

          </div>

          {/* Controls */}

          <div className="lg:col-span-3 bg-white border-4 border-slate-950 p-8 shadow-[8px_8px_0_0_rgba(15,23,42,1)]">

            <div className="text-xs uppercase font-black mb-6">
              Navigation
            </div>

            <div className="flex gap-3">

              <button
                onClick={prev}
                className="
                  flex-1
                  bg-white
                  border-4
                  border-slate-950
                  py-4
                  font-black
                  hover:bg-emerald-400
                  transition
                "
              >
                ←
              </button>

              <button
                onClick={next}
                className="
                  flex-1
                  bg-emerald-400
                  border-4
                  border-slate-950
                  py-4
                  font-black
                  hover:bg-emerald-300
                  transition
                "
              >
                →
              </button>

            </div>

          </div>

          {/* Stat */}

          <div className="lg:col-span-3 bg-emerald-400 border-4 border-slate-950 p-8 shadow-[8px_8px_0_0_rgba(15,23,42,1)]">

            <div className="text-xs uppercase font-black">
              Satisfaction
            </div>

            <div className="text-7xl font-black mt-4">
              98%
            </div>

          </div>

          {/* Banner */}

          <div className="lg:col-span-6 bg-white border-4 border-slate-950 p-8 shadow-[8px_8px_0_0_rgba(15,23,42,1)]">

            <div className="text-xs uppercase font-black">
              Build Once. Run Forever.
            </div>

            <h3 className="text-3xl md:text-4xl font-black mt-4">
              Trusted by educators,
              businesses and growing brands.
            </h3>

          </div>

        </div>

      </div>
    </section>
  );
}