import { Link } from "react-router-dom";

/**
 * BackButton — Tombol navigasi kembali ke halaman sebelumnya atau home.
 *
 * Props:
 *  - to (string)      : URL tujuan (default: "/")
 *  - label (string)   : Teks tombol (default: "Kembali ke Home")
 *  - variant (string) : "light" | "dark" | "gradient" (default: "light")
 *  - className (string): Additional class names
 */
export default function BackButton({
  to = "/",
  label = "Kembali ke Home",
  variant = "light",
  className = "",
}) {
  const variants = {
    light:
      "bg-white/80 hover:bg-white text-slate-700 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md",
    dark:
      "bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/20 shadow-sm",
    gradient:
      "bg-gradient-to-r from-sky-500 to-rose-400 hover:from-sky-600 hover:to-rose-500 text-white border-0 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40",
  };

  return (
    <Link
      to={to}
      className={`
        inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl
        text-sm font-semibold
        transition-all duration-300
        hover:-translate-y-0.5 active:scale-95
        ${variants[variant]}
        ${className}
      `}
    >
      <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      {label}
    </Link>
  );
}
