/**
 * SkillBar — Progress bar untuk menampilkan level keahlian.
 *
 * Props:
 *  - name (string)    : Nama skill
 *  - level (number)   : Level keahlian 0-100
 *  - color (string)   : "blue" | "purple" | "emerald" | "rose" | "cyan" | "gold" (default: "blue")
 *  - variant (string) : "light" | "dark" (default: "light")
 *  - showPercentage (bool): Tampilkan persentase (default: true)
 */
export default function SkillBar({
  name,
  level = 0,
  color = "blue",
  variant = "light",
  showPercentage = true,
}) {
  const colorMap = {
    blue: {
      bar: "from-blue-500 via-indigo-500 to-purple-500",
      glow: "shadow-blue-500/30",
      text: variant === "dark" ? "text-blue-400" : "text-indigo-600",
    },
    purple: {
      bar: "from-purple-500 via-violet-500 to-fuchsia-500",
      glow: "shadow-purple-500/30",
      text: variant === "dark" ? "text-purple-400" : "text-purple-600",
    },
    emerald: {
      bar: "from-emerald-500 via-green-500 to-teal-500",
      glow: "shadow-emerald-500/30",
      text: variant === "dark" ? "text-emerald-400" : "text-emerald-600",
    },
    rose: {
      bar: "from-rose-500 via-pink-500 to-red-500",
      glow: "shadow-rose-500/30",
      text: variant === "dark" ? "text-rose-400" : "text-rose-600",
    },
    cyan: {
      bar: "from-cyan-400 via-sky-500 to-blue-500",
      glow: "shadow-cyan-500/30",
      text: variant === "dark" ? "text-cyan-400" : "text-cyan-600",
    },
    gold: {
      bar: "from-amber-400 via-yellow-500 to-orange-500",
      glow: "shadow-amber-500/30",
      text: variant === "dark" ? "text-amber-400" : "text-amber-600",
    },
  };

  const scheme = colorMap[color] || colorMap.blue;
  const trackBg = variant === "dark" ? "bg-slate-700/50" : "bg-slate-100";
  const nameColor = variant === "dark" ? "text-slate-200" : "text-slate-700";

  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className={`text-xs font-bold ${nameColor} group-hover:text-slate-900 transition-colors`}>
          {name}
        </span>
        {showPercentage && (
          <span className={`text-xs font-black ${scheme.text}`}>{level}%</span>
        )}
      </div>
      <div className={`w-full ${trackBg} rounded-full h-2.5 overflow-hidden`}>
        <div
          className={`bg-gradient-to-r ${scheme.bar} h-2.5 rounded-full transition-all duration-1000 ease-out ${scheme.glow} shadow-md`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
