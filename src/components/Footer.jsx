import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>EVERLINESYS</h2>
          <p>
            Building powerful SaaS tools for educators, businesses,
            and creators worldwide.
          </p>
        </div>

        {/* Products */}
        <div className="footer-column">
          <h4>Products</h4>
          <Link to="/products/eduline">Eduline</Link>
          <Link to="/products/crm">WhatsApp CRM</Link>
          <Link to="/products/booking">Booking System</Link>
        </div>

        {/* Solutions */}
        <div className="footer-column">
          <h4>Solutions</h4>
          <Link to="/solutions/education">For Educators</Link>
          <Link to="/solutions/business">For Businesses</Link>
          <Link to="/solutions/creators">For Creators</Link>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h4>Resources</h4>
          <Link to="/blog">Blog</Link>
          <Link to="/docs">Documentation</Link>
          <Link to="/support">Support</Link>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Everline Systems</p>

        <div className="footer-legal">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
