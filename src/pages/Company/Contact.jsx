import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
              Get in Touch
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Let’s Build Your <br />
              <span className="text-slate-400 font-medium italic">Next Big System</span>
            </h1>
          </div>
          <p className="text-slate-600 text-lg max-w-sm leading-relaxed border-l-4 border-blue-600 pl-6">
            Whether you need a quick Eduline setup or a ground-up enterprise architecture, we’re ready.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* ==== LEFT: CONTACT INFO ==== */}
          <div className="lg:col-span-5 space-y-12">

            {/* Info Cards */}
            <div className="grid gap-8">
              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 shrink-0 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</h3>
                  <a href="mailto:contact@everlinesys.com" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    contact@everlinesys.com
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 shrink-0 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Call Support</h3>
                  <a href="tel:+919400690911" className="text-xl font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                    +91 94006 90911
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 shrink-0 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Office</h3>
                  <p className="text-xl font-bold text-slate-900 leading-tight">
                    Infopark Phase 2, Kochi <br />
                    <span className="text-slate-500 font-medium text-lg">Kerala, India — 682030</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="flex items-center gap-3 text-slate-900 font-bold mb-3">
                <Clock size={20} className="text-blue-600" />
                Response Time
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our sales and technical teams typically respond within <span className="text-slate-900 font-bold">2-4 business hours</span>. For urgent production issues, please use our 24/7 priority support line.
              </p>
            </div>
          </div>

          {/* ==== RIGHT: CONTACT FORM ==== */}
          <div className="lg:col-span-7">
            <form className="relative bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 text-black">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project or product needs..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none"
                />
              </div>

              <a
                href="https://wa.me/919400690911?text=Hello%20Everlinesys%2C%20I%20want%20to%20know%20more%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-green-700 shadow-xl shadow-green-500/30 transition-all active:scale-[0.98]"
             style={{color:"white"}} >
                Send 
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>


              <p className="mt-6 text-center text-xs text-slate-400">
                By clicking send, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}