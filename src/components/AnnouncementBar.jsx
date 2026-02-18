import { MapPin, Calendar } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-black text-white">
      
      <div className="max-w-7xl mx-auto flex items-start gap-4 px-4 sm:px-6 lg:px-8 py-5">

        {/* Left Color Band */}
        <div className="w-1.5 h-16 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full" />

        {/* Content */}
        <div className="flex flex-col gap-2">

          <p className="text-lg sm:text-xl font-bold">
            Product Launch — Eduline Teaching
          </p>

          <p className="text-sm text-gray-300 flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              27 Feb 2026
            </span>

            <span className="flex items-center gap-1">
              <MapPin size={14} />
              Infopark Phase 2, Kochi
            </span>

            <span className="hidden sm:inline">
              #1 Online Teaching Tool
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}
