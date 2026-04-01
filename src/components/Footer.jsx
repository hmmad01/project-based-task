/**
 * Footer — Footer reusable untuk semua halaman.
 *
 * Props:
 *  - variant (string) : "light" | "dark" (default: "light")
 *  - teamName (string): Nama tim (default: "Portfolio Tim T2B")
 */
export default function Footer({ variant = "light", teamName = "Portfolio Tim T2B" }) {
  const year = new Date().getFullYear();

  const bg = variant === "dark"
    ? "bg-slate-900/80 backdrop-blur-xl border-t border-slate-700/50"
    : "bg-white/60 backdrop-blur-xl border-t border-slate-200/50";
  const textMain = variant === "dark" ? "text-slate-400" : "text-slate-500";
  const textAccent = variant === "dark" ? "text-white" : "text-slate-700";

  return (
    <footer className={`${bg} mt-auto transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Team branding */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-rose-400 flex items-center justify-center shadow-md">
              <span className="text-white text-sm font-black">P</span>
            </div>
            <div>
              <p className={`text-sm font-bold ${textAccent}`}>{teamName}</p>
              <p className={`text-xs ${textMain}`}>Universitas Brawijaya</p>
            </div>
          </div>

          {/* Center: Tagline */}
          <p className={`text-xs ${textMain} text-center`}>
            Bangun kerja sama tim dan kolaborasi 🚀
          </p>

          {/* Right: Copyright */}
          <p className={`text-xs ${textMain}`}>
            © {year} {teamName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
