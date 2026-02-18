export default function Capabilities() {
  return (
    <section className="relative bg-white py-18 overflow-hidden">

      {/* Tilt background */}
      <div className="absolute top-0 md:top-6 left-0 w-full pointer-events-none z-1 overflow">
        <div className="w-[140vw] -ml-[50vw] h-39  rotate-[-2deg]" style={{backgroundColor:"#2563eb"}} />
      </div> <div className="absolute top-10 md:top-10 left-0 w-full pointer-events-none z-2">
        <div className="w-[500vw] ml-[4vw] h-65 md:h-45  rotate-[-2deg]" style={{backgroundColor:"#2563eb"}} />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 z-9 mt-0">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Start with a Product / <span className="text-gray-900"> Build a Complete System</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto ">
            Most teams begin with one of our ready-to-use platforms.
            As you grow, Everline Systems can unify your operations into
            a single intelligent system tailored to your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* PRODUCTS */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Launch Faster with Our Products
            </h3>

            <p className="text-gray-600 mb-6">
              Deploy proven solutions designed to handle real-world operations —
              from education platforms to customer management and business tools.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>✔ Eduline — Build and brand your own learning platform</li>
              <li>✔ WhatsApp CRM — Turn conversations into customers</li>
              <li>✔ Billing & Stock — Manage operations with clarity</li>
              <li>✔ Quick deployment with minimal setup</li>
              <li>✔ Scales as your business grows</li>
            </ul>
          </div>

          {/* CUSTOM SYSTEMS */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Transform Your Business with Custom Systems
            </h3>

            <p className="text-gray-600 mb-6">
              When off-the-shelf tools aren’t enough, we design and build
              fully integrated platforms tailored to your workflows,
              data, and long-term strategy.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>✔ Business process analysis & system architecture</li>
              <li>✔ Custom platforms and automation solutions</li>
              <li>✔ Websites, apps, and internal tools</li>
              <li>✔ Integration of all your software into one system</li>
              <li>✔ Long-term digital transformation support</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
