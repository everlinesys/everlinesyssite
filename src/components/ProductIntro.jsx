export default function ProductIntro() {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* ===== EDULINE — FULL WIDTH ===== */}
                <div className="mb-24 grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Introducing  Eduline  <br /> <span className="text-2xl text-blue-600">Brand Your Teaching</span>
                        </h2>


                        <p className="text-lg text-gray-600 mb-6">
                            Launch your own learning platform, sell courses, manage students,
                            and build your education business without technical complexity.
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li>✔ White-label platform</li>
                            <li>✔ Course & student management</li>
                            <li>✔ Secure content delivery (No piracy)</li>
                            <li>✔ Payments & analytics</li>
                        </ul>
                    </div>

                    {/* Image */}
                    <div>
                        <img
                            src="/edu1.webp"
                            alt="Eduline platform"
                            className="rounded-2xl shadow-xl w-full"
                        />
                    </div>
                </div>

                {/* ===== SECOND ROW — 50/50 ===== */}
                <div className="grid md:grid-cols-2 gap-12">

                    {/* WhatsApp CRM */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <img
                            src="/crm1.webp"
                            alt="WhatsApp CRM"
                            className="rounded-xl mb-6 w-full"
                        />

                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            WhatsApp-Based CRM
                        </h3>

                        <p className="text-gray-600">
                            Capture enquiries, automate responses, and convert conversations
                            into customers directly through WhatsApp workflows.
                        </p>
                    </div>

                    {/* Billing & Stock */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <img
                            src="/bil1.webp"
                            alt="Billing and Stock Management"
                            className="rounded-xl mb-6 w-full"
                        />

                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Billing & Stock Management
                        </h3>

                        <p className="text-gray-600">
                            Simplify operations with automated billing, inventory tracking,
                            reports, and business insights — all in one system.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
