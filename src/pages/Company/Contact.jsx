import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (<section className="bg-[#f5f5f3] py-24 lg:py-32"> <div className="max-w-7xl mx-auto px-6 lg:px-8">


    {/* Header */}
    <div className="max-w-4xl mb-20">

      <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
        Contact Us
      </span>

      <h1 className="mt-4 text-5xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-slate-900">
        Let's discuss
        your next project.
      </h1>

      <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl">
        Whether you're looking for a learning platform,
        business automation, or custom software,
        we'd love to learn more about your goals.
      </p>

    </div>

    <div className="grid lg:grid-cols-12 gap-10">

      {/* Left */}
      <div className="lg:col-span-4">

        <div className="bg-white rounded-3xl border border-slate-200 p-8">

          <h2 className="text-2xl font-semibold text-slate-900">
            Contact Information
          </h2>

          <div className="mt-8 space-y-8">

            <div className="flex gap-4">
              <Mail className="text-blue-700 shrink-0" />

              <div>
                <div className="text-sm text-slate-500">
                  Email
                </div>

                <div className="font-medium text-slate-900">
                  contact@everlinesys.com
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-blue-700 shrink-0" />

              <div>
                <div className="text-sm text-slate-500">
                  Phone
                </div>

                <div className="font-medium text-slate-900">
                  +91 94006 90911
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-blue-700 shrink-0" />

              <div>
                <div className="text-sm text-slate-500">
                  Location
                </div>

                <div className="font-medium text-slate-900">
                  Kakkanad, Kochi
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="mt-6 bg-slate-900 text-white rounded-3xl p-8">

          <div className="text-sm uppercase tracking-wide text-blue-400">
            Preferred Contact Method
          </div>

          <h3 className="mt-3 text-2xl font-semibold">
            WhatsApp
          </h3>

          <p className="mt-4 text-slate-300">
            Get a response quickly and discuss your requirements directly.
          </p>

          <a
            href="https://wa.me/919400690911"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-white text-slate-900 px-5 py-3 rounded-full font-medium"
          >
            Chat on WhatsApp
            <MessageSquare size={18} />
          </a>

        </div>

      </div>

      {/* Form */}
      <div className="lg:col-span-8">

        <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-10">

          <h2 className="text-2xl font-semibold text-slate-900">
            Tell us about your project
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mt-8">

            <input
              type="text"
              placeholder="Name"
              className="border border-slate-300 rounded-xl p-4 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Email"
              className="border border-slate-300 rounded-xl p-4 outline-none focus:border-blue-600"
            />

          </div>

          <input
            type="text"
            placeholder="Company"
            className="mt-5 w-full border border-slate-300 rounded-xl p-4 outline-none focus:border-blue-600"
          />

          <textarea
            rows={7}
            placeholder="Tell us about your project..."
            className="mt-5 w-full border border-slate-300 rounded-xl p-4 outline-none resize-none focus:border-blue-600"
          />

          <button className="mt-8 inline-flex items-center gap-2 bg-slate-900 text-white px-7 py-4 rounded-full font-medium">
            Send Inquiry
            <ArrowRight size={18} />
          </button>

        </div>

      </div>

    </div>

  </div>
  </section>


  );
}
