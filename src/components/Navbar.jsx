import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold text-blue-600" style={{ fontWeight: "bold" }}>
                        EVERLINESYS
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/products" className="text-sm font-medium hover:text-blue-600">Products</Link>
                        <Link to="/pricing" className="text-sm font-medium hover:text-blue-600">Pricing</Link>
                        <Link to="/solutions" className="text-sm font-medium hover:text-blue-600">Solutions</Link>
                        <Link to="/resources" className="text-sm font-medium hover:text-blue-600">Resources</Link>
                        <Link to="/company" className="text-sm font-medium hover:text-blue-600">Company</Link>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/login" className="text-sm font-medium hover:text-blue-600">
                            Login
                        </Link>
                        <Link
                            to="/get-started"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                            style={{ color: "white" }}  >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ background: "transparent", color: "blue" }}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden border-t bg-white">
                    <div className="px-4 py-4 flex flex-col gap-4">

                        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
                        <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
                        <Link to="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link>
                        <Link to="/resources" onClick={() => setMenuOpen(false)}>Resources</Link>
                        <Link to="/company" onClick={() => setMenuOpen(false)}>Company</Link>

                        <hr />

                        <Link to="/login" onClick={() => setMenuOpen(false)}>
                            Login
                        </Link>

                        <Link
                            to="/get-started"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
                            onClick={() => setMenuOpen(false)}
                            style={{ color: "white" }}
                        >
                            Get Started
                        </Link>

                    </div>
                </div>
            )}
        </header>
    );
}
