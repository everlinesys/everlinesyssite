import { color } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
    return (
        <section className="relative py-28 bg-white overflow-hidden">

            {/* Tilted background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[490vw] -ml-[20vw]  h-80 bg-blue-600 rotate-[-3deg]" />
            </div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto px-6 text-center text-white">

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Unleash the power of your operations
                </h2>

                <p className="text-lg md:text-xl text-blue-100 mb-10">
                    Start with a ready platform or build a complete system
                    tailored to your organization.
                </p>

                {/* Actions */}
                <div className="flex flex-wrap justify-center gap-6">

                    {/* 🔥 HARD CTA */}
                    <Link
                        to="/products/eduline"
                        className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold shadow hover:bg-blue-50 transition"
                    >
                        Start with Eduline
                    </Link>

                    {/* 🧊 SOFT CTA */}
                    <Link
                        to="/contact"
                        className="border text-white border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 text-black transition"
                        style={{ color: "white" }}  >
                        Discuss Your Requirements
                    </Link>

                </div>

            </div>
        </section>
    );
}
