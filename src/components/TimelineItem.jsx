/**
 * TimelineItem — Komponen timeline untuk pengalaman organisasi/kerja.
 *
 * Props:
 *  - title (string)       : Judul posisi/jabatan
 *  - organization (string): Nama organisasi
 *  - period (string)      : Periode waktu (misal "Jan 2026 - Sekarang")
 *  - description (string) : Deskripsi tugas/tanggung jawab
 *  - isActive (bool)      : Apakah posisi masih aktif (default: false)
 *  - variant (string)     : "light" | "dark" (default: "light")
 *  - color (string)       : "blue" | "emerald" | "rose" | "cyan" | "purple" (default: "blue")
 */
export default function TimelineItem({
  title,
  organization,
  period,
  description,
  isActive = false,
  variant = "light",
  color = "blue",
}) {
  const colorMap = {
    blue: {
      dot: "from-blue-500 to-indigo-600",
      badge: variant === "light" ? "bg-blue-50 text-blue-700" : "bg-blue-500/20 text-blue-300",
      org: variant === "light" ? "text-indigo-600" : "text-blue-400",
      hoverShadow: "group-hover:shadow-indigo-100",
    },
    emerald: {
      dot: "from-emerald-500 to-green-600",
      badge: variant === "light" ? "bg-emerald-50 text-emerald-700" : "bg-emerald-500/20 text-emerald-300",
      org: variant === "light" ? "text-emerald-600" : "text-emerald-400",
      hoverShadow: "group-hover:shadow-emerald-100",
    },
    rose: {
      dot: "from-rose-500 to-pink-600",
      badge: variant === "light" ? "bg-rose-50 text-rose-700" : "bg-rose-500/20 text-rose-300",
      org: variant === "light" ? "text-rose-600" : "text-rose-400",
      hoverShadow: "group-hover:shadow-rose-100",
    },
    cyan: {
      dot: "from-cyan-400 to-sky-600",
      badge: variant === "light" ? "bg-cyan-50 text-cyan-700" : "bg-cyan-500/20 text-cyan-300",
      org: variant === "light" ? "text-cyan-600" : "text-cyan-400",
      hoverShadow: "group-hover:shadow-cyan-100",
    },
    purple: {
      dot: "from-purple-500 to-violet-600",
      badge: variant === "light" ? "bg-purple-50 text-purple-700" : "bg-purple-500/20 text-purple-300",
      org: variant === "light" ? "text-purple-600" : "text-purple-400",
      hoverShadow: "group-hover:shadow-purple-100",
    },
  };

  const scheme = colorMap[color] || colorMap.blue;

  const cardBg = variant === "light"
    ? "bg-white border-slate-100"
    : "bg-slate-800/60 border-slate-700/50";
  const titleColor = variant === "light" ? "text-slate-900" : "text-white";
  const descColor = variant === "light" ? "text-slate-600" : "text-slate-300";

  const dotStyle = isActive
    ? `bg-gradient-to-br ${scheme.dot}`
    : variant === "light"
      ? "bg-slate-300"
      : "bg-slate-600";

  return (
    <div className="relative pl-12 group">
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1.5 w-8 h-8 ${dotStyle} rounded-full border-4 ${
          variant === "light" ? "border-white" : "border-slate-900"
        } shadow-md transition-transform duration-300 group-hover:scale-110 flex items-center justify-center`}
      >
        {isActive && <div className="w-2 h-2 bg-white rounded-full" />}
      </div>

      {/* Card */}
      <div
        className={`${cardBg} border p-6 sm:p-7 rounded-[1.5rem] shadow-sm transition-all duration-300 group-hover:shadow-2xl ${scheme.hoverShadow} group-hover:-translate-y-1`}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
          <h4 className={`font-black ${titleColor} text-lg sm:text-xl`}>{title}</h4>
          <span
            className={`inline-block px-4 py-1.5 ${scheme.badge} text-xs font-black rounded-full mt-2 sm:mt-0 w-fit`}
          >
            {period}
          </span>
        </div>
        <p className={`text-sm font-bold ${scheme.org} mb-3`}>{organization}</p>
        <p className={`${descColor} text-sm leading-relaxed font-medium`}>{description}</p>
      </div>
    </div>
  );
}
