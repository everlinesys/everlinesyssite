import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const columns = [
  {
    title: "Products",
    links: [
      ["Eduline", "/products/eduline"],
      ["Deal Chat", "/products/crm"],
      ["Billing & Stock", "/products/billing"],
      ["Pricing", "/pricing"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Education", "/solutions"],
      ["Automation", "/solutions"],
      ["Custom Software", "/solutions"],
      ["Consulting", "/solutions"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/company"],
      ["Resources", "/resources"],
      ["Contact", "/contact"],
      ["Support", "/contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Link to="/" className="text-4xl font-semibold tracking-tight">
              everline<span className="text-emerald-400">.</span>
            </Link>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Everline Systems builds software products, business platforms,
              and custom systems for organizations that want practical digital growth.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-emerald-950 transition hover:bg-emerald-400"
            >
              Let's connect
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-semibold text-white">{column.title}</h3>
                <div className="mt-5 space-y-3">
                  {column.links.map(([label, to]) => (
                    <Link key={label} to={to} className="block text-sm text-slate-400 transition hover:text-emerald-300">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>{"\u00A9"} {new Date().getFullYear()} Everline Systems. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <Link to="/policy" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="transition hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
