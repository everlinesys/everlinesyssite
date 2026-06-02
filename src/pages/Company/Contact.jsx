import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="relative py-32 bg-[#f7faf8] overflow-hidden text-slate-900">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16,185,129,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16,185,129,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-emerald-300/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="mb-20">

          <div className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            bg-white
            border-2
            border-slate-950
            shadow-[4px_4px_0_0_rgba(15,23,42,1)]
            text-xs
            uppercase
            tracking-widest
            font-black
          ">
            ● Contact
          </div>

          <h2 className="
            mt-8
            text-5xl
            md:text-7xl
            font-black
            tracking-tight
            leading-none
            text-slate-950
          ">
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span className="text-emerald-600">
              REMARKABLE.
            </span>
          </h2>

        </div>

        <div className="grid lg:grid-cols-12 gap-6">

          {/* Left */}

          <div className="lg:col-span-5 space-y-6">

            {/* Contact Card */}

            <div className="
              bg-slate-950
              text-white
              border-4
              border-slate-950
              p-8
              shadow-[12px_12px_0_0_rgba(16,185,129,1)]
            ">

              <div className="
                text-xs
                uppercase
                tracking-widest
                font-black
                text-emerald-400
              ">
                Contact Information
              </div>

              <div className="mt-8 space-y-8">

                <div className="flex gap-4">
                  <Mail className="text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xs uppercase font-black text-slate-400">
                      Email
                    </div>
                    <div className="text-xl font-black">
                      contact@everlinesys.com
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xs uppercase font-black text-slate-400">
                      Phone
                    </div>
                    <div className="text-xl font-black">
                      +91 94006 90911
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xs uppercase font-black text-slate-400">
                      Location
                    </div>
                    <div className="text-xl font-black">
                      Kakkanad
                    </div>
                    <div className="text-slate-400">
                      Near Infopark Phase 2
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Response Card */}

            <div className="
              bg-white
              border-4
              border-slate-950
              p-8
              shadow-[8px_8px_0_0_rgba(15,23,42,1)]
            ">

              <Clock className="mb-4" />

              <div className="
                text-xs
                uppercase
                font-black
              ">
                Response Time
              </div>

              <div className="
                mt-4
                text-4xl
                font-black
              ">
                2-4 Hours
              </div>

              <p className="
                mt-3
                text-slate-600
              ">
                Typical response time during business hours.
              </p>

            </div>

          </div>

          {/* Form */}

          <div className="
            lg:col-span-7
            bg-white
            border-4
            border-slate-950
            p-8
            md:p-10
            shadow-[12px_12px_0_0_rgba(15,23,42,1)]
          ">

            <div className="
              text-xs
              uppercase
              tracking-widest
              font-black
              mb-8
            ">
              Start A Conversation
            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  border-4
                  border-slate-950
                  p-4
                  font-bold
                  outline-none
                  focus:bg-emerald-50
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  border-4
                  border-slate-950
                  p-4
                  font-bold
                  outline-none
                  focus:bg-emerald-50
                "
              />

            </div>

            <input
              type="text"
              placeholder="Company / Organization"
              className="
                mt-5
                w-full
                border-4
                border-slate-950
                p-4
                font-bold
                outline-none
                focus:bg-emerald-50
              "
            />

            <textarea
              rows={7}
              placeholder="Tell us about your project..."
              className="
                mt-5
                w-full
                border-4
                border-slate-950
                p-4
                font-bold
                outline-none
                resize-none
                focus:bg-emerald-50
              "
            />

            <div className="
              mt-8
              flex
              flex-col
              md:flex-row
              gap-4
            ">

              <a
                href="https://wa.me/919400690911?text=Hello%20Everline%20Systems"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1
                  bg-emerald-400
                  text-slate-950
                  border-4
                  border-slate-950
                  py-5
                  px-6
                  font-black
                  uppercase
                  flex
                  items-center
                  justify-center
                  gap-3
                  shadow-[8px_8px_0_0_rgba(15,23,42,1)]
                  hover:translate-x-1
                  hover:translate-y-1
                  hover:shadow-none
                  transition-all
                "
              >
                Send Message
                <Send size={18} />
              </a>

              <a
                href="mailto:contact@everlinesys.com"
                className="
                  px-8
                  border-4
                  border-slate-950
                  py-5
                  font-black
                  uppercase
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-white
                "
              >
                Email Us
                <ArrowUpRight size={18} />
              </a>

            </div>

            <p className="
              mt-6
              text-xs
              uppercase
              font-black
              text-slate-400
            ">
              Build Once. Run Forever.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}