import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo_icon.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Tutup menu ketika route berubah
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Esc untuk menutup
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="inline-flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-auto md:h-14" />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-emerald-700"
                : "text-gray-700 hover:text-gray-900"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/doa"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-emerald-700"
                : "text-gray-700 hover:text-gray-900"
            }
          >
            Lihat Doa
          </NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100/70"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.3 5.71L12 12l6.3 6.29l-1.41 1.42L10.59 13.4l-6.3 6.3L2.88 18.3L9.17 12L2.88 5.71L4.29 4.3l6.3 6.3l6.3-6.3z"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden transition-[max-height] duration-300 overflow-hidden ${
          open ? "max-h-48" : "max-h-0"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-5 pb-4 flex flex-col gap-2 text-[15px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "rounded-lg px-3 py-2 " +
              (isActive
                ? "bg-emerald-50 text-emerald-700"
                : "text-gray-700 hover:bg-gray-50")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/doa"
            className={({ isActive }) =>
              "rounded-lg px-3 py-2 " +
              (isActive
                ? "bg-emerald-50 text-emerald-700"
                : "text-gray-700 hover:bg-gray-50")
            }
          >
            Lihat Doa
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
