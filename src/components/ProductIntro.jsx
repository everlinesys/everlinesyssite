import { CheckCircle2, MessageSquare, LineChart, ShieldCheck, Zap } from "lucide-react";

export default function ProductIntro() {
    return (
        <section className="bg-slate-50 py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-6">

                {/* ===== MAIN PRODUCT: EDULINE ===== */}
                <div className="mb-32 grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
                            <Zap size={16} />
                            <span>New Release</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                            Introducing Eduline <br />
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Brand Your Teaching
                            </span>
                        </h2>

                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            Launch your own white-label learning platform. Sell courses, manage students,
                            and scale your education business without touching a single line of code.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { text: "White-label platform", icon: <ShieldCheck className="text-blue-500" size={20} /> },
                                { text: "Student management", icon: <CheckCircle2 className="text-blue-500" size={20} /> },
                                { text: "Anti-piracy delivery", icon: <ShieldCheck className="text-blue-500" size={20} /> },
                                { text: "Real-time analytics", icon: <LineChart className="text-blue-500" size={20} /> },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                                    {item.icon}
                                    <span className="text-slate-700 font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                        {/* CTA */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">

                            <a
                                href="https://eduline.everlinesys.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-7 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
                                style={{ color: "white" }}  >
                                Visit Eduline Platform
                            </a>

                            <a
                                href="https://eduline.everlinesys.com"
                                className="inline-flex items-center justify-center px-7 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition"
                            >
                                Learn More
                            </a>

                        </div>

                    </div>

                    {/* Image with Decorative Backdrop */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-3xl blur-2xl opacity-50" />
                        <img
                            src="/edu1.webp"
                            alt="Eduline platform"
                            className="relative rounded-2xl shadow-2xl w-full border border-white hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* ===== SECONDARY PRODUCTS ===== */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                    {/* WhatsApp CRM */}
                    <div className="group bg-white p-2 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="overflow-hidden rounded-[1.5rem]">
                            <img
                                src="/crm1.webp"
                                alt="WhatsApp CRM"
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="px-8">
                            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                                <MessageSquare size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                Deal Chat - WhatsApp CRM
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Capture enquiries and automate responses. Convert conversations
                                into loyal customers using specialized WhatsApp workflows.
                            </p>
                        </div>
                        <div className="mx-10 mt-8 flex flex-col sm:flex-row gap-4 mb-8">

                            <a
                                href="https://dealchat.everlinesys.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-7 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
                                style={{ color: "white" }}  >
                                Visit Deal Chat
                            </a>

                            <a
                                href="https://dealchat.everlinesys.com"
                                className="inline-flex items-center justify-center px-7 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition"
                            >
                                Learn More
                            </a>

                        </div>
                    </div>

                    {/* Billing & Stock */}
                    <div className="group bg-white p-2 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="overflow-hidden rounded-[1.5rem]">
                            <img
                                src="/bil1.webp"
                                alt="Billing and Stock Management"
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="px-8">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <LineChart size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                Billing & Stock Management
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Simplify operations with automated billing, inventory tracking,
                                and professional business insights — all in one dashboard.
                            </p>
                        </div>
                        <div className="mx-10 mt-8 flex flex-col sm:flex-row gap-4 mb-8">

                            <a
                                href="api.whatsapp.com/send?phone=919400690911&text=Hello%20Everlinesys%2C%20I%20want%20to%20know%20more%20about%20your%20Billing%20and%20Stock%20Management%20product."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-7 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
                                style={{ color: "white" }}  >
                                Get Started
                            </a>

                            <a
                                href="api.whatsapp.com/send?phone=919400690911&text=Hello%20Everlinesys%2C%20I%20want%20to%20know%20more%20about%20your%20Billing%20and%20Stock%20Management%20product."
                                className="inline-flex items-center justify-center px-7 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition"
                            >
                                Learn More
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}