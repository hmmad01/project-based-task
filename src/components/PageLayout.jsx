import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * PageLayout — Layout wrapper yang meng-include Navbar dan Footer secara otomatis.
 *
 * Props:
 *  - children (node)      : Konten halaman
 *  - variant (string)     : "light" | "dark" (default: "light") — menentukan theme keseluruhan
 *  - navTitle (string)    : Judul di navbar (default: "Portfolio Tim")
 *  - showNav (bool)       : Tampilkan navbar (default: true)
 *  - showFooter (bool)    : Tampilkan footer (default: true)
 *  - className (string)   : Additional class names untuk content area
 *  - maxWidth (string)    : Max width content (default: "max-w-7xl")
 *  - noPadding (bool)     : Hapus padding bawaan (default: false)
 */
export default function PageLayout({
  children,
  variant = "light",
  navTitle = "Portfolio Tim",
  showNav = true,
  showFooter = true,
  className = "",
  maxWidth = "max-w-7xl",
  noPadding = false,
}) {
  const bgStyle =
    variant === "dark"
      ? "bg-slate-950 text-white min-h-screen"
      : "min-h-screen bg-gradient-to-br from-sky-50 via-white to-rose-50 text-gray-800";

  const navVariant = variant === "dark" ? "dark" : "glass";
  const footerVariant = variant === "dark" ? "dark" : "light";

  return (
    <div className={`${bgStyle} flex flex-col font-sans`}>
      {showNav && <Navbar title={navTitle} variant={navVariant} />}

      <main
        className={`
          flex-1 ${maxWidth} mx-auto w-full
          ${noPadding ? "" : "px-4 sm:px-6 lg:px-8 py-8"}
          ${className}
        `}
      >
        {children}
      </main>

      {showFooter && <Footer variant={footerVariant} />}
    </div>
  );
}
