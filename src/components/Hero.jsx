import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-slate-50 pt-20 pb-12 overflow-hidden flex flex-col items-center">

      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50 to-transparent -z-10" />

      {/* Content */}
      <div className="max-w-4xl px-4 sm:px-6 text-center">

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Build Once.
          <br />

          <span className="relative inline-block mt-2">
            <span className="relative z-10">
              Run <span className="text-blue-600">Forever <svg
                viewBox="0 0 200 20"
                className="absolute -bottom-4 left-0 w-full text-blue-600 fill-none stroke-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  d="M5 15 Q 50 5, 100 15 T 195 15"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg></span>.
            </span>

            {/* underline */}
            <span className="absolute left-0 bottom-1 w-full h-3 bg-blue-200/70 -rotate-2 rounded-md -z-10" />
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Everline Systems builds scalable digital platforms that automate
          operations, manage workflows, and power your growth.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/products"
            className="px-6 py-3 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-900 transition"
            style={{ color: "white" }}  >
            Explore Products
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition"
          >
            Talk to Us
          </Link>

        </div>

        {/* Product pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {["Eduline", "WhatsApp CRM", "Billing & Stock"].map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600 shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>

      </div>

      {/* Image */}
      {/* Image */}
      <motion.div
        ref={imgRef}
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-12 w-full max-w-5xl px-4"
      >
        <img
          src="/imgtest.webp"
          alt="Dashboard preview"
          className="rounded-xl shadow-2xl border border-white w-full"
        />
      </motion.div>


    </section>
  );
}
