import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#f4f4f0] border-b-4 border-slate-900 font-sans selection:bg-emerald-400 selection:text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo Box - Neo Brutalist Style */}
                    <Link
                        to="/"
                        className="px-4 py-2 bg-emerald-400 border-2 border-slate-900 text-slate-900 font-black tracking-tighter uppercase shadow-[3px_3px_0_0_rgba(15,23,42,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_rgba(15,23,42,1)] transition-all"
                        style={{ color: "black" }}>
                        EVERLINESYS
                    </Link>

                    {/* Desktop Menu - Block Cells */}
                    <nav className="hidden md:flex items-center gap-1 bg-white border-2 border-slate-900 p-1 shadow-[4px_4px_0_0_rgba(15,23,42,1)]">
                        {[
                            { name: "Products", path: "/products" },
                            { name: "Pricing", path: "/pricing" },
                            { name: "Solutions", path: "/solutions" },
                            { name: "Resources", path: "/resources" },
                            { name: "Company", path: "/company" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="px-4 py-2 text-sm font-black text-slate-900 uppercase tracking-tight hover:bg-emerald-400 border border-transparent hover:border-slate-900 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            to="/get-started"
                            className="px-5 py-2.5 bg-slate-900 text-white border-2 border-slate-900 text-sm font-black uppercase tracking-wider shadow-[4px_4px_0_0_rgba(52,211,153,1)] hover:shadow-[1px_1px_0_0_rgba(52,211,153,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                            style={{ color: "white" }}>
                            Get Started →
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 bg-white border-2 border-slate-900 text-slate-900 shadow-[3px_3px_0_0_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
                    </button>

                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="md:hidden fixed inset-x-0 top-20 bg-[#f4f4f0] border-b-4 border-slate-900 z-40 p-6 shadow-xl animate-none">
                    <div className="flex flex-col gap-3 bg-white border-4 border-slate-900 p-4 shadow-[6px_6px_0_0_rgba(15,23,42,1)]">

                        {[
                            { name: "Products", path: "/products" },
                            { name: "Pricing", path: "/pricing" },
                            { name: "Solutions", path: "/solutions" },
                            { name: "Resources", path: "/resources" },
                            { name: "Company", path: "/company" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className="p-3 font-black text-slate-900 uppercase border-2 border-transparent hover:border-slate-900 hover:bg-emerald-400 transition-all text-left"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <hr className="border-t-4 border-slate-900 my-2" />

                        <Link
                            to="/get-started"
                            className="bg-slate-900 text-white font-black uppercase text-center py-4 border-2 border-slate-900 shadow-[4px_4px_0_0_rgba(52,211,153,1)]"
                            onClick={() => setMenuOpen(false)}
                        >
                            Get Started →
                        </Link>

                    </div>
                </div>
            )}
        </header>
    );
}