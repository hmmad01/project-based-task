/**
 * SectionCard — Card pembungkus untuk section konten (About, Skills, Projects, dll).
 *
 * Props:
 *  - title (string)     : Judul section
 *  - icon (string|node) : Emoji atau React node icon
 *  - variant (string)   : "light" | "dark" | "gradient" (default: "light")
 *  - className (string) : Additional class names
 *  - children (node)    : Konten di dalam card
 *  - hoverable (bool)   : Enable hover animation (default: true)
 *  - fullWidth (bool)   : Span full grid width (default: false)
 */
export default function SectionCard({
  title,
  icon,
  variant = "light",
  className = "",
  children,
  hoverable = true,
  fullWidth = false,
}) {
  const variants = {
    light:
      "bg-white/90 backdrop-blur-xl border border-slate-100 shadow-xl shadow-slate-200/30",
    dark:
      "bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 shadow-xl shadow-black/30 text-white",
    gradient:
      "bg-gradient-to-br from-slate-900 to-blue-900 border border-white/10 shadow-xl shadow-slate-900/30 text-white",
  };

  const titleColor = variant === "light" ? "text-slate-800" : "text-white";
  const accentBar = variant === "light"
    ? "bg-gradient-to-r from-sky-500 to-indigo-500"
    : "bg-gradient-to-r from-cyan-400 to-blue-500";

  const hoverClasses = hoverable
    ? "hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    : "transition-all duration-300";

  return (
    <div
      className={`
        rounded-[2rem] p-7 sm:p-8 relative overflow-hidden group
        ${variants[variant]}
        ${hoverClasses}
        ${fullWidth ? "col-span-full" : ""}
        ${className}
      `}
    >
      {/* Decorative corner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-100/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Title */}
      {title && (
        <h3 className={`text-xl font-black ${titleColor} mb-5 flex items-center gap-3`}>
          {icon && (
            <span className="text-xl flex-shrink-0">{icon}</span>
          )}
          <span className={`w-8 h-1 ${accentBar} rounded-full group-hover:w-12 transition-all duration-500`} />
          {title}
        </h3>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
