import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#f7faf8] overflow-hidden border-t-4 border-slate-950 text-slate-900">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16,185,129,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16,185,129,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-300/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* Top Section */}

        <div className="grid lg:grid-cols-12 gap-6">

          {/* Brand */}

          <div className="
            lg:col-span-5
            bg-slate-950
            text-white
            border-4
            border-slate-950
            p-8
            shadow-[12px_12px_0_0_rgba(16,185,129,1)]
          ">

            <div className="
              inline-flex
              items-center
              px-3
              py-2
              bg-emerald-400
              text-slate-950
              font-black
              text-xs
              uppercase
              tracking-widest
              mb-6
            ">
              Everline Systems
            </div>

            <h2 className="
              text-5xl
              md:text-6xl
              font-black
              leading-none
            ">
              BUILD.
              <br />
              ONCE.
              <br />
              <span className="text-emerald-400">
                RUN FOREVER.
              </span>
            </h2>

            <p className="
              mt-8
              text-slate-300
              text-lg
              max-w-md
            ">
              Building products, platforms and systems
              that scale with businesses, educators and creators.
            </p>

          </div>

          {/* Links */}

          <div className="
            lg:col-span-7
            grid
            md:grid-cols-4
            gap-6
          ">

            <div className="
              bg-white
              border-4
              border-slate-950
              p-6
              shadow-[8px_8px_0_0_rgba(15,23,42,1)]
            ">
              <h4 className="
                text-xs
                uppercase
                font-black
                mb-5
              ">
                Products
              </h4>

              <div className="space-y-3 font-bold">

                <Link to="/products/eduline" className="block hover:text-emerald-600">
                  Eduline
                </Link>

                <Link to="/products/crm" className="block hover:text-emerald-600">
                  WhatsApp CRM
                </Link>

                <Link to="/products/booking" className="block hover:text-emerald-600">
                  Booking System
                </Link>

              </div>
            </div>

            <div className="
              bg-white
              border-4
              border-slate-950
              p-6
              shadow-[8px_8px_0_0_rgba(15,23,42,1)]
            ">
              <h4 className="
                text-xs
                uppercase
                font-black
                mb-5
              ">
                Solutions
              </h4>

              <div className="space-y-3 font-bold">

                <Link to="/solutions/education" className="block hover:text-emerald-600">
                  Educators
                </Link>

                <Link to="/solutions/business" className="block hover:text-emerald-600">
                  Businesses
                </Link>

                <Link to="/solutions/creators" className="block hover:text-emerald-600">
                  Creators
                </Link>

              </div>
            </div>

            <div className="
              bg-white
              border-4
              border-slate-950
              p-6
              shadow-[8px_8px_0_0_rgba(15,23,42,1)]
            ">
              <h4 className="
                text-xs
                uppercase
                font-black
                mb-5
              ">
                Resources
              </h4>

              <div className="space-y-3 font-bold">

                <Link to="/blog" className="block hover:text-emerald-600">
                  Blog
                </Link>

                <Link to="/docs" className="block hover:text-emerald-600">
                  Documentation
                </Link>

                <Link to="/support" className="block hover:text-emerald-600">
                  Support
                </Link>

              </div>
            </div>

            <div className="
              bg-emerald-400
              border-4
              border-slate-950
              p-6
              shadow-[8px_8px_0_0_rgba(15,23,42,1)]
            ">
              <h4 className="
                text-xs
                uppercase
                font-black
                mb-5
              ">
                Company
              </h4>

              <div className="space-y-3 font-bold">

                <Link to="/about" className="block">
                  About
                </Link>

                <Link to="/contact" className="block">
                  Contact
                </Link>

                <Link to="/careers" className="block">
                  Careers
                </Link>

              </div>

              <div className="
                mt-8
                text-xs
                uppercase
                font-black
              ">
                System Online ●
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="
          mt-12
          bg-white
          border-4
          border-slate-950
          p-6
          shadow-[8px_8px_0_0_rgba(15,23,42,1)]
        ">

          <div className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          ">

            <div className="
              font-black
              uppercase
              text-sm
            ">
              © {new Date().getFullYear()} Everline Systems
            </div>

            <div className="
              flex
              gap-6
              font-bold
            ">

              <Link
                to="/policy"
                className="hover:text-emerald-600"
              >
                Privacy
              </Link>

              <Link
                to="/terms-conditions"
                className="hover:text-emerald-600"
              >
                Terms
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}