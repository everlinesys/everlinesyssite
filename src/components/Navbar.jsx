import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header full-w">
            <div className="container">
                <Link to="/" className="logo">EVERLINESYS</Link>

                <nav className="nav">
                    <Link to="/products" className="link">Products</Link>
                    <Link to="/pricing" className="link">Pricing</Link>
                    <Link to="/solutions" className="link">Solutions</Link>
                    <Link to="/resources" className="link">Resources</Link>
                    <Link to="/company" className="link">Company</Link>
                </nav>

                <div className="actions">
                    <Link to="/login" className="login">Login</Link>
                    <Link to="/get-started" className="cta">Get Started</Link>
                </div>
            </div>
        </header>

    );
}

