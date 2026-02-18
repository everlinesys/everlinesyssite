import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen  min-w-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        {/* Big 404 */}
        <h1 className="text-7xl font-extrabold text-gray-900 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back to building something great.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Go Home
          </Link>

          <Link
            to="/products"
            className="border border-gray-300 px-6 py-3 rounded-lg font-medium text-gray-800 hover:bg-gray-100 transition"
          >
            Explore Products
          </Link>
        </div>

        {/* Optional suggestion links */}
        <div className="mt-10 text-sm text-gray-500">
          Popular pages:
          <div className="flex justify-center gap-4 mt-2 flex-wrap">
            <Link to="/products/eduline" className="hover:text-blue-600">
              Eduline
            </Link>
            <Link to="/pricing" className="hover:text-blue-600">
              Pricing
            </Link>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
