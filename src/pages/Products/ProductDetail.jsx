import { useParams, Link } from "react-router-dom";
import { Terminal, Cpu, HardDrive, ShieldAlert, Layers, HelpCircle } from "lucide-react";

export default function ProductDetail() {
  const { productName } = useParams();
  const formattedName = productName ? productName.replace("-", " ") : "SYSTEM_NODE";

  return (
    <section className="bg-[#f4f4f0] py-16 lg:py-24 border-b-4 border-slate-900 font-sans text-slate-900 selection:bg-emerald-400 selection:text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TERMINAL BREADCRUMB HEADER ================= */}
        <div className="mb-10 flex items-center justify-between border-4 border-slate-900 bg-white p-4 shadow-[4px_4px_0_0_rgba(15,23,42,1)]">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500 border border-slate-900" />
              <span className="w-3 h-3 rounded-full bg-yellow-500 border border-slate-900" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 border border-slate-900" />
            </div>
            <span className="text-xs font-mono font-semibold text-slate-400">|</span>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase text-slate-800">
              <Terminal size={14} className="text-emerald-500" />
              <span>apps / catalog / </span>
              <span className="text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5">{productName}</span>
            </div>
          </div>
          <Link to="/pricing" className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors hidden sm:block">
            // VIEW_PRICING_MATRIX
          </Link>
        </div>

        {/* ================= MAIN TWO-COLUMN BENTO GRID ================= */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT PANEL: CORE DEPLOYMENT METRICS (8 Columns) */}
          <div className="lg:col-span-8 bg-white border-4 border-slate-900 p-8 md:p-12 shadow-[10px_10px_0_0_rgba(15,23,42,1)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-slate-900 text-emerald-400 font-mono text-[9px] font-semibold px-3 py-1 border-b-2 border-l-2 border-slate-900 tracking-widest">
              DEPLOYMENT_CORE_v4.2
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-emerald-400 border-2 border-slate-900 text-slate-900 text-xs font-mono font-semibold uppercase tracking-wider shadow-[2px_2px_0_0_rgba(15,23,42,1)] -rotate-1 mb-8">
                ✦ Live Node Environment
              </div>

              <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 uppercase tracking-tighter leading-none mb-6">
                {formattedName}
              </h1>

              <p className="text-base md:text-lg text-slate-700 font-semibold max-w-2xl border-l-4 border-slate-900 pl-4 py-1 mb-8">
                Deploying automated infrastructure, real-time sync systems, and custom database pipelines tuned explicitly to the performance metrics of {formattedName}.
              </p>
            </div>

            {/* Simulated Live Diagnostic Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t-4 border-slate-900">
              {[
                { label: "SYS_UPTIME", val: "99.99%", icon: <Cpu size={14} /> },
                { label: "DATA_SYNC_RATE", val: "< 14ms", icon: <HardDrive size={14} /> },
                { label: "ENCRYPTION", val: "AES_256", icon: <ShieldAlert size={14} /> }
              ].map((metric, i) => (
                <div key={i} className="bg-[#f4f4f0] border-2 border-slate-900 p-3 shadow-[3px_3px_0_0_rgba(15,23,42,1)]">
                  <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[9px] font-semibold uppercase tracking-wider mb-1">
                    {metric.icon} {metric.label}
                  </div>
                  <div className="text-lg font-mono font-semibold text-slate-900">{metric.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL: ACTIONS & RESOURCES (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Box 1: Configuration Action Block */}
            <div className="bg-slate-900 text-white border-4 border-slate-900 p-8 shadow-[10px_10px_0_0_rgba(52,211,153,1)] relative flex-grow flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-slate-800 border-2 border-white/20 flex items-center justify-center mb-6 shadow-[2px_2px_0_0_rgba(255,255,255,1)]">
                  <Layers size={18} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold uppercase tracking-tight mb-3">Initialize Architecture</h3>
                <p className="text-xs font-semibold text-slate-400 leading-relaxed mb-8">
                  Connect with our solutions engineers to mount custom instance frameworks for {formattedName} inside your business server block.
                </p>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-400 text-slate-900 font-mono font-semibold text-xs uppercase tracking-wider border-2 border-slate-900 shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:shadow-[1px_1px_0_0_rgba(255,255,255,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
              >
                Request Access Code
              </Link>
            </div>

            {/* Box 2: Static Resource Checklist */}
            <div className="bg-white border-4 border-slate-900 p-6 shadow-[10px_10px_0_0_rgba(15,23,42,1)]">
              <div className="flex items-center gap-2 font-mono text-[10px] font-semibold text-slate-400 uppercase border-b-2 border-slate-900 pb-2 mb-4">
                <HelpCircle size={12} className="text-slate-900" /> SYSTEM_DOCUMENTATION
              </div>
              <ul className="space-y-2 text-xs font-semibold text-slate-800">
                <li className="flex items-center gap-2 hover:text-emerald-600 cursor-pointer">✦ REST_API_Endpoints_v4.pdf</li>
                <li className="flex items-center gap-2 hover:text-emerald-600 cursor-pointer">✦ Cluster_Scaling_Guidelines.md</li>
                <li className="flex items-center gap-2 hover:text-emerald-600 cursor-pointer">✦ Multi_Tenant_Auth_Flow.json</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}