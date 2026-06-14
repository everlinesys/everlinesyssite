import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Globe2, Menu, Search, X } from "lucide-react";

const primaryLinks = [
  { label: "Why Everline", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Products", to: "/products" },
  { label: "Resources", to: "/resources" },
  { label: "About Us", to: "/company" },
];

const utilityLinks = [
  { label: "Partners", to: "/resources", hasMenu: true },
  { label: "Support", to: "/contact" },
  { label: "Login", to: "/login", hasMenu: true },
  { label: "Explore Products", to: "/products" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="hidden h-10 items-center justify-end gap-8 text-[13px] font-medium text-slate-950 lg:flex">
          {utilityLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="inline-flex items-center gap-1.5 transition hover:text-emerald-700"
            >
              {link.label}
              {link.hasMenu && <ChevronDown className="h-3.5 w-3.5 text-slate-400" />}
            </Link>
          ))}

          <button
            type="button"
            className="inline-flex items-center gap-1.5 transition hover:text-emerald-700"
            aria-label="Change language"
          >
            <Globe2 className="h-[18px] w-[18px]" />
            <span>EN</span>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </button>
        </div>

        <div className="flex h-[92px] items-center justify-between gap-6 lg:h-[94px]">
          <Link
            to="/"
            className="shrink-0 text-[34px] font-semibold leading-none tracking-tight text-slate-950 sm:text-[42px] lg:text-[46px]"
          >
            everline<span className="text-emerald-600">.</span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-9 xl:gap-11 lg:flex">
            {primaryLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="whitespace-nowrap text-[16px] font-medium text-slate-950 transition hover:text-emerald-700 xl:text-[17px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <button
              type="button"
              className="text-slate-500 transition hover:text-slate-950"
              aria-label="Search"
            >
              <Search className="h-7 w-7 stroke-[1.5]" />
            </button>

            <Link
              to="/contact"
              className="rounded-full border-2 border-emerald-800 px-7 py-3.5 text-[16px] font-semibold text-emerald-950 transition hover:bg-emerald-800 hover:text-white"
            >
              Let's Connect
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-950 lg:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="flex flex-col gap-1 px-5 py-5">
            {primaryLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-slate-950 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full border-2 border-slate-950 px-5 py-3 text-center font-semibold text-slate-950"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
