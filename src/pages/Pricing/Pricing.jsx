export default function Pricing() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pricing Overview
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our pricing varies by product, usage, and scale.
            Choose a solution to see detailed plans tailored to your needs.
          </p>
        </div>

        {/* Product Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* ===== EDULINE ===== */}
          <div className="border rounded-2xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Eduline</h3>

            <p className="text-gray-600 mb-6">
              Subscription-based pricing depending on number of
              students, features, and customization level.
            </p>

            <a
              href="https://eduline.yoursite.com/pricing"
              target="_blank"
              className="text-blue-600 font-semibold hover:underline"
            >
              View Eduline Pricing →
            </a>
          </div>

          {/* ===== WHATSAPP CRM ===== */}
          <div className="border rounded-2xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">
              WhatsApp CRM
            </h3>

            <p className="text-gray-600 mb-6">
              Flexible pricing based on number of agents,
              message volume, and automation features.
            </p>

            <a
              href="https://crm.yoursite.com/pricing"
              target="_blank"
              className="text-blue-600 font-semibold hover:underline"
            >
              View CRM Pricing →
            </a>
          </div>

          {/* ===== BILLING & STOCK ===== */}
          <div className="border rounded-2xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">
              Billing & Stock
            </h3>

            <p className="text-gray-600 mb-6">
              Plans designed for businesses of different sizes,
              from small operations to enterprise workflows.
            </p>

            <a
              href="https://billing.yoursite.com/pricing"
              target="_blank"
              className="text-blue-600 font-semibold hover:underline"
            >
              View Billing Pricing →
            </a>
          </div>

          {/* ===== CUSTOM SYSTEMS ===== */}
          <div className="border rounded-2xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">
              Custom Systems
            </h3>

            <p className="text-gray-600 mb-6">
              Tailored solutions priced based on requirements,
              integrations, and implementation scope.
            </p>

            <a
              href="/contact"
              className="text-blue-600 font-semibold hover:underline"
            >
              Request Consultation →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
