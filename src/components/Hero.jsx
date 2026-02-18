import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.5 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen bg-slate-50 pt-24 pb-12 overflow-hidden flex flex-col items-center">

      {/* Soft top gradient */}
      <div className="absolute top-0 left-0 w-full h-[420px] bg-gradient-to-b from-blue-50 to-transparent -z-10" />

      {/* Content */}
      <div className="max-w-4xl px-6 text-center">

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Build Once.
          <br />

          {/* Highlighted phrase */}
          <span className="relative inline-block mt-3">
            <span className="relative z-10">
              Run <span className="text-blue-600">Forever</span>.
            </span>

            {/* Creative underline */}
            <span className="absolute left-0 bottom-2 w-full h-4 bg-blue-200/70 -rotate-2 rounded-md -z-10" />
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Everline Systems creates scalable digital solutions that automate
          your processes, manage your operations, and free you to focus on growth.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="px-8 py-4 bg-blue-600  text-white rounded-xl font-semibold hover:bg-blue-800 transition"
            style={{ color: "white" }} >
            Explore Products
          </Link>

          <Link
            to="/contact"
            className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition"
          >
            Talk to Us
          </Link>
        </div>

        {/* Product pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {["Eduline", "WhatsApp CRM", "Billing & Stock"].map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-white border border-slate-100 rounded-full text-sm font-medium text-slate-600 shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>

      </div>

      {/* Image */}
      <div
        ref={imgRef}
        className="mt-20 w-full max-w-5xl px-4 transition-all duration-1000 "

      >
        <img
          src="/imgtest.webp"
          alt="Dashboard preview"
          className="rounded-2xl shadow-2xl border border-white w-full"
        />
      </div>

    </section>
  );
}
