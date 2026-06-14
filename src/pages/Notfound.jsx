import { Link } from "react-router-dom";
import { AlertTriangle, Home, Compass, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen w-[100vw] bg-[#f4f4f0] flex items-center justify-center px-6 py-12 font-sans text-slate-900 selection:bg-emerald-400 selection:text-slate-900 relative overflow-hidden">
      
      {/* Structural Tech Grid Mesh Underlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0f172a 2px, transparent 2px)', backgroundSize: '24px 24px' }} 
      />

      {/* ================= MAIN INTERACTIVE ERROR PANEL ================= */}
      <div className="bg-white border-4 border-slate-900 p-8 md:p-12 text-center max-w-2xl w-full shadow-[12px_12px_0_0_rgba(15,23,42,1)] relative overflow-hidden">
        
        {/* Hardware Status Ribbon Indicator */}
        <div className="absolute top-0 left-0 right-0 bg-slate-900 text-emerald-400 font-mono text-[10px] font-semibold py-1.5 px-4 flex justify-between items-center border-b-4 border-slate-900">
          <span className="flex items-center gap-1.5">
            <Terminal size={12} /> STATUS: EXCEPTION_DETECTED
          </span>
          <span className="bg-red-500 text-white px-1.5 py-0.5 text-[8px] animate-pulse">
            ERR_404
          </span>
        </div>

        {/* Large Massive Error Code Marker */}
        <div className="mt-6 mb-4 relative inline-block">
          <h1 className="text-7xl md:text-9xl font-semibold text-slate-900 uppercase tracking-tighter select-none leading-none">
            404
          </h1>
          {/* Tilted Graphic Sticker Tag */}
          <div className="absolute -bottom-2 -right-4 bg-emerald-400 text-slate-900 font-mono text-xs font-semibold uppercase tracking-wider px-2 py-0.5 border-2 border-slate-900 shadow-[2px_2px_0_0_rgba(15,23,42,1)] transform rotate-3">
            ! BROKEN_PATH
          </div>
        </div>

        {/* Informational Diagnostics */}
        <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight text-slate-900 mb-4 flex items-center justify-center gap-2">
          <AlertTriangle size={24} className="text-slate-900" strokeWidth={3} /> Request Node Missing
        </h2>

        <p className="text-sm md:text-base text-slate-700 font-semibold max-w-md mx-auto mb-10 leading-relaxed border-l-4 border-slate-900 pl-4 text-left">
          The requested routing target does not map to any active operational cluster. The system asset may have changed validation coordinates or expired.
        </p>

        {/* ================= RE-ROUTING BUTTON ACTIONS ================= */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 border-b-4 border-slate-900 pb-8 mb-8">
          
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-400 text-slate-900 font-mono font-semibold text-xs uppercase tracking-wider border-2 border-slate-900 shadow-[4px_4px_0_0_rgba(15,23,42,1)] hover:shadow-[1px_1px_0_0_rgba(15,23,42,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
          >
            <Home size={14} strokeWidth={3} /> Return to Cluster Home
          </Link>

          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#f4f4f0] text-slate-900 font-mono font-semibold text-xs uppercase tracking-wider border-2 border-slate-900 shadow-[4px_4px_0_0_rgba(15,23,42,1)] hover:shadow-[1px_1px_0_0_rgba(15,23,42,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-slate-50 transition-all duration-150"
          >
            <Compass size={14} strokeWidth={3} /> Inspect Core Products
          </Link>

        </div>

        {/* ================= QUICK LINK QUICK-PATHS ================= */}
        <div>
          <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-widest block mb-3">
            // POPULAR_ROUTING_FALLBACKS
          </span>
          <div className="flex justify-center gap-3 flex-wrap">
            {[
              { path: "/products/eduline", label: "Eduline" },
              { path: "/pricing", label: "Pricing Matrix" },
              { path: "/contact", label: "Core Helpdesk" }
            ].map((link, idx) => (
              <Link 
                key={idx}
                to={link.path} 
                className="text-xs font-mono font-semibold uppercase px-2.5 py-1 bg-[#f4f4f0] border-2 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}