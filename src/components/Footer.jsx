import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-wide">
              EVERLINESYS
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              Building powerful SaaS tools for educators, businesses,
              and creators worldwide.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/products/eduline" className="hover:text-white transition">
                Eduline
              </Link>
              <Link to="/products/crm" className="hover:text-white transition">
                WhatsApp CRM
              </Link>
              <Link to="/products/booking" className="hover:text-white transition">
                Booking System
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/solutions/education" className="hover:text-white transition">
                For Educators
              </Link>
              <Link to="/solutions/business" className="hover:text-white transition">
                For Businesses
              </Link>
              <Link to="/solutions/creators" className="hover:text-white transition">
                For Creators
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/blog" className="hover:text-white transition">
                Blog
              </Link>
              <Link to="/docs" className="hover:text-white transition">
                Documentation
              </Link>
              <Link to="/support" className="hover:text-white transition">
                Support
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
              <Link to="/careers" className="hover:text-white transition">
                Careers
              </Link>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Everline Systems</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}