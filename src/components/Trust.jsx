export default function Trust() {
  return (
    <section className="bg-blue-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-4 font-semibold">
            Supporting education and training sectors
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Built for Diverse Learning Environments
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Coaching Institutes */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-100">
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200"
              alt="Coaching institutes"
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-gray-900">
                Coaching Institutes
              </h3>
              <p className="text-gray-600 text-sm">
                Managing batches, schedules, and student engagement.
              </p>
            </div>
          </div>

          {/* Online Educators */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-100">
            <img
              src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=1200"
              alt="Online educators"
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-gray-900">
                Online Educators
              </h3>
              <p className="text-gray-600 text-sm">
                Delivering courses and content globally.
              </p>
            </div>
          </div>

          {/* Skill Training */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-100">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
              alt="Skill training centers"
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-gray-900">
                Skill Training Centers
              </h3>
              <p className="text-gray-600 text-sm">
                Structured programs with performance tracking.
              </p>
            </div>
          </div>

          {/* Language Schools */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-100">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200"
              alt="Language schools"
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-gray-900">
                Language Schools
              </h3>
              <p className="text-gray-600 text-sm">
                Interactive learning with flexible schedules.
              </p>
            </div>
          </div>

          {/* Educational Institutions */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-100">
            <img
              src="https://lh6.googleusercontent.com/proxy/AwoohQqzY7NKT_XKyVaIxZ3uaoAwOUq2KfrSH2nWTxjguWSrVm2c7zxNgwMzqSkA0hBz0OntdCfFMN2iK0aRR_dHm1AN"
              alt="Educational institutions"
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-gray-900">
                Educational Institutions
              </h3>
              <p className="text-gray-600 text-sm">
                Supporting digital transformation initiatives.
              </p>
            </div>
          </div>

          {/* Corporate Training */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-100">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Corporate training programs"
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-gray-900">
                Corporate Training Programs
              </h3>
              <p className="text-gray-600 text-sm">
                Workforce development, onboarding, and professional upskilling.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
