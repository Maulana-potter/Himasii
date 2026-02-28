import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import logoImg from "../assets/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 1. CEK: Apakah kita sedang di Home?
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBackground = isScrolled
    ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-3"
    : "bg-transparent py-6";

  const getTextColor = () => {
    if (isScrolled) return "text-slate-800 dark:text-white";

    if (isHomePage) {
      return "text-secondary/80";
    } else {
      return "text-white/90";
    }
  };

  const textColorClass = getTextColor();

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackground}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* === LOGO SECTION === */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            {logoImg ? (
              <img
                src={logoImg}
                alt="HIMASI Logo"
                className="w-full h-full object-contain drop-shadow-md hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
                <Sparkles size={20} className="text-primary" />
              </div>
            )}
          </div>

          <div className="flex flex-col">
            {/* Teks Logo mengikuti logika bunglon */}
            <span
              className={`text-xl font-black tracking-tighter leading-none transition-colors duration-300 ${textColorClass}`}
            >
              HIMASI
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">
              UMSU
            </span>
          </div>
        </Link>

        {/* === DESKTOP MENU === */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "Tentang Kami", path: "/about" },
            { name: "Kegiatan", path: "/kegiatan" },
            { name: "Pengurus", path: "/pengurus" },
            { name: "Gallery", path: "/gallery" },
          ].map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`font-bold text-sm uppercase tracking-widest transition-colors duration-300 relative group ${isActive ? "text-primary" : textColorClass} hover:text-primary`}
              >
                {item.name}
                {/* Garis Bawah Animasi */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* === MOBILE MENU TOGGLE === */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${textColorClass}`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === MOBILE DROPDOWN (Tetap Putih biar aman) === */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-border shadow-2xl transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {[
            { name: "Home", path: "/" },
            { name: "Tentang Kami", path: "/about" },
            { name: "Kegiatan", path: "/kegiatan" },
            { name: "Pengurus", path: "/pengurus" },
            { name: "Gallery", path: "/gallery" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-bold pl-4 border-l-4 transition-all ${location.pathname === item.path ? "border-primary text-primary bg-primary/5 py-2 rounded-r-lg" : "border-transparent text-slate-700 dark:text-white hover:text-primary"}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
