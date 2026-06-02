import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroDev() {
    return (
        <section
            className="relative pt-24 pb-16 overflow-hidden flex flex-col items-center bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('/bg.jpg')",
            }}
        >

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-white/45 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative max-w-4xl px-4 sm:px-6 text-center">

                {/* Trust badge */}
                <div className="inline-flex items-center px-4 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full">
                    4+ Years of Digital Excellence
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
                    Digital Excellence
                    <br />
                    for Growing Businesses
                </h1>

                <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto">
                    Drive your business forward with high-performance websites,
                    SEO strategies, and scalable digital systems built for
                    reliability, speed, and long-term growth.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

                    <Link
                        to="/contact"
                        className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition"
                    style={{color:"white"}}>
                        Start a Project
                    </Link>

                    <Link
                        to="/products"
                        className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition"
                    >
                        Our Products
                    </Link>

                </div>

                {/* Trust metrics */}
                <div className="mt-10 grid grid-cols-3 gap-6 text-center max-w-md mx-auto">

                    <div>
                        <p className="text-2xl font-bold text-slate-900">4+</p>
                        <p className="text-sm text-slate-500">Years Experience</p>
                    </div>

                    <div>
                        <p className="text-2xl font-bold text-slate-900">50+</p>
                        <p className="text-sm text-slate-500">Projects Built</p>
                    </div>

                    <div>
                        <p className="text-2xl font-bold text-slate-900">24/7</p>
                        <p className="text-sm text-slate-500">Support</p>
                    </div>

                </div>

            </div>

        </section>
    );
}