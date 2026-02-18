import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    quote: "Eduline transformed how we deliver training programs. Everything is now managed from one platform.",
    name: "Rahul Menon",
    role: "Director, Apex Training Institute",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
  },
  {
    quote: "Our WhatsApp CRM increased conversion rates dramatically by organizing all enquiries in one place.",
    name: "Neha Kapoor",
    role: "Operations Head, SkillHub",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
  },
  {
    quote: "Billing and inventory tracking became effortless. We saved hours every week.",
    name: "Arjun Patel",
    role: "Owner, TechMart",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?q=80&w=800",
  },
  {
    quote: "Everline Systems built a custom platform that unified all our operations into one dashboard.",
    name: "Priya Nair",
    role: "CEO, EduSphere",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=800",
  },
  {
    quote: "Automation reduced manual work by over 60%. Our team now focuses on growth instead of processes.",
    name: "Karan Shah",
    role: "Founder, Growth Academy",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800",
  },
  {
    quote: "From website to internal tools, EverlineSys delivered a complete digital transformation.",
    name: "Aisha Khan",
    role: "Director, LearnPro Institute",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 }),
  };

  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      <div className="mx-auto px-6">
        
        <div className="relative text-white bg-black rounded-[1rem] shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
          <div className="grid md:grid-cols-5 items-stretch">
            
            {/* Image Section */}
            <div className="md:col-span-2 relative min-h-[400px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  src={reviews[index].image}
                  alt={reviews[index].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="md:col-span-3 p-8 md:p-16 flex flex-col justify-center relative">
              <div className="absolute top-10 right-10 text-slate-100 select-none">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V5C14.017 4.44772 14.4647 4 15.017 4H20.017C21.1216 4 22.017 4.89543 22.017 6V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 7.55228 3.017 7V5C3.017 4.44772 3.46472 4 4.017 4H9.017C10.1216 4 11.017 4.89543 11.017 6V15C11.017 18.3137 8.33071 21 5.017 21H3.017Z" />
                </svg>
              </div>

              <div className="relative ">
                <p className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4">
                  Testimonials
                </p>

                <div className="min-h-[160px]">
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xl md:text-2xl font-medium text-slate-100 leading-snug italic"
                    >
                      "{reviews[index].quote}"
                    </motion.h3>
                  </AnimatePresence>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-slate-100">{reviews[index].name}</p>
                    <p className="text-slate-500 text-sm">{reviews[index].role}</p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={next}
                      className="p-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-10 gap-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`transition-all duration-300 rounded-full ${
                i === index ? "w-8 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
              } h-2`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple Icon Components (or use Lucide-react)
const ChevronLeft = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);