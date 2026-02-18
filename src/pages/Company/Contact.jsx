export default function Contact() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Tell us about your needs — product setup or custom system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* ===== LEFT — INFO ===== */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              How can we help you?
            </h2>

            <p className="text-gray-600 mb-8">
              Whether you're exploring our products or planning a custom
              platform, our team will guide you to the right solution.
            </p>

            <div className="space-y-6 text-gray-700">

              <div>
                <p className="font-semibold">Email</p>
                <p>contact@everlinesys.com</p>
              </div>

              <div>
                <p className="font-semibold">Phone</p>
                <p>+91 9400 690 911</p>
              </div>

              <div>
                <p className="font-semibold">Location</p>
                <p>Kochi, India</p>
              </div>

            </div>

          </div>

          {/* ===== RIGHT — FORM ===== */}
          <div className="bg-gray-50 p-8 rounded-2xl border">

            <form className="space-y-5">

              <div>
                <label className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Enquiry Type
                </label>
                <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Product Enquiry</option>
                  <option>Custom System</option>
                  <option>Pricing</option>
                  <option>Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Describe your requirements"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
