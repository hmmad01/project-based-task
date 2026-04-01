import { Link, useLocation } from "react-router-dom";

/**
 * Navbar — Navigation bar reusable untuk semua halaman.
 *
 * Props:
 *  - title (string)   : Judul yang ditampilkan di navbar (default: "Portfolio Tim")
 *  - showBack (bool)   : Tampilkan tombol kembali ke home (default: auto-detect)
 *  - variant (string)  : "light" | "dark" | "glass" (default: "glass")
 */
export default function Navbar({ title = "Portfolio Tim", showBack, variant = "glass" }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const shouldShowBack = showBack !== undefined ? showBack : !isHome;

  const variants = {
    glass:
      "bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-lg shadow-black/5",
    light:
      "bg-white border-b border-gray-200 shadow-sm",
    dark:
      "bg-slate-900/90 backdrop-blur-xl border-b border-slate-700/50 shadow-lg",
  };

  const textColor = variant === "dark" ? "text-white" : "text-slate-800";
  const subtextColor = variant === "dark" ? "text-slate-300" : "text-slate-500";
  const btnStyle =
    variant === "dark"
      ? "bg-white/10 hover:bg-white/20 text-white border-white/10"
      : "bg-white/80 hover:bg-white text-slate-700 border-slate-200/80 hover:border-slate-300";

  return (
    <nav className={`sticky top-0 z-50 ${variants[variant]} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Back button or Logo */}
          <div className="flex items-center gap-3">
            {shouldShowBack && (
              <Link
                to="/"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-95 ${btnStyle}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Kembali
              </Link>
            )}
            <div className={`flex items-center gap-2 ${shouldShowBack ? "" : ""}`}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-rose-400 flex items-center justify-center shadow-md">
                <span className="text-white text-sm font-black">P</span>
              </div>
              <h1 className={`text-lg font-bold ${textColor} hidden sm:block`}>{title}</h1>
            </div>
          </div>

          {/* Right: Status indicator */}
          <div className={`flex items-center gap-2 text-xs font-medium ${subtextColor}`}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="hidden sm:inline">Online</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
