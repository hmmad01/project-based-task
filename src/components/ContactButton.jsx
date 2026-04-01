/**
 * ContactButton — Tombol kontak / social link yang reusable.
 *
 * Props:
 *  - platform (string) : Nama platform (WhatsApp, LinkedIn, Instagram, Email, GitHub, dll)
 *  - url (string)      : URL link
 *  - label (string)    : Teks yang ditampilkan
 *  - color (string)    : "emerald" | "blue" | "rose" | "purple" | "slate" | "gradient" (default: "blue")
 *  - variant (string)  : "light" | "dark" | "filled" (default: "light")
 *  - icon (node)       : Custom icon (optional, akan auto-detect dari platform jika tidak diisi)
 *  - onClick (func)    : Custom click handler (optional)
 */

const platformIcons = {
  whatsapp: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.393.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.098.824z"/>
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  email: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
};

const colorMap = {
  emerald: {
    filled: "bg-emerald-500 hover:bg-emerald-600 text-white",
    light: "bg-white/80 hover:bg-emerald-50 text-slate-700 border-slate-200 hover:border-emerald-300",
    dark: "bg-white/10 hover:bg-emerald-500 text-white border-white/10 hover:border-emerald-400",
    iconBg: "bg-emerald-500",
    iconHover: "group-hover:bg-white group-hover:text-emerald-500",
  },
  blue: {
    filled: "bg-blue-600 hover:bg-blue-700 text-white",
    light: "bg-white/80 hover:bg-blue-50 text-slate-700 border-slate-200 hover:border-blue-300",
    dark: "bg-white/10 hover:bg-blue-600 text-white border-white/10 hover:border-blue-400",
    iconBg: "bg-blue-600",
    iconHover: "group-hover:bg-white group-hover:text-blue-600",
  },
  rose: {
    filled: "bg-rose-500 hover:bg-rose-600 text-white",
    light: "bg-white/80 hover:bg-rose-50 text-slate-700 border-slate-200 hover:border-rose-300",
    dark: "bg-white/10 hover:bg-rose-500 text-white border-white/10 hover:border-rose-400",
    iconBg: "bg-rose-500",
    iconHover: "group-hover:bg-white group-hover:text-rose-500",
  },
  purple: {
    filled: "bg-purple-600 hover:bg-purple-700 text-white",
    light: "bg-white/80 hover:bg-purple-50 text-slate-700 border-slate-200 hover:border-purple-300",
    dark: "bg-white/10 hover:bg-purple-600 text-white border-white/10 hover:border-purple-400",
    iconBg: "bg-purple-600",
    iconHover: "group-hover:bg-white group-hover:text-purple-600",
  },
  slate: {
    filled: "bg-slate-800 hover:bg-slate-900 text-white",
    light: "bg-white/80 hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400",
    dark: "bg-white/10 hover:bg-slate-700 text-white border-white/10 hover:border-slate-500",
    iconBg: "bg-slate-700",
    iconHover: "group-hover:bg-white group-hover:text-slate-700",
  },
  gradient: {
    filled: "bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 hover:opacity-90 text-white",
    light: "bg-white/80 hover:bg-pink-50 text-slate-700 border-slate-200 hover:border-pink-300",
    dark: "bg-white/10 hover:bg-gradient-to-tr hover:from-amber-400 hover:via-pink-500 hover:to-purple-600 text-white border-white/10",
    iconBg: "bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600",
    iconHover: "group-hover:bg-white group-hover:text-pink-500",
  },
};

export default function ContactButton({
  platform = "email",
  url = "#",
  label,
  color = "blue",
  variant = "light",
  icon,
  onClick,
}) {
  const scheme = colorMap[color] || colorMap.blue;
  const platformKey = platform.toLowerCase();
  const displayIcon = icon || platformIcons[platformKey] || platformIcons.email;

  const Tag = onClick ? "button" : "a";
  const linkProps = onClick
    ? { onClick }
    : { href: url, target: url.startsWith("mailto:") ? undefined : "_blank", rel: "noreferrer" };

  return (
    <Tag
      {...linkProps}
      className={`
        group flex items-center gap-4 p-3.5 rounded-2xl border
        transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.98]
        ${scheme[variant]}
        cursor-pointer w-full
      `}
    >
      <div
        className={`${scheme.iconBg} ${scheme.iconHover} text-white p-2.5 rounded-xl transition-all duration-300 flex-shrink-0`}
      >
        {displayIcon}
      </div>
      <div className="min-w-0 text-left">
        <span className="block font-bold text-sm">{platform}</span>
        {label && (
          <span className="block text-xs opacity-70 truncate">{label}</span>
        )}
      </div>
    </Tag>
  );
}
