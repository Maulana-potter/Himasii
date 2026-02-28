import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowUp, Instagram, MapPin } from "lucide-react";

// Icon TikTok Custom (SVG)
const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 14v1a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h2v2" />
    <path d="M11 11.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0Z" />
    <path d="M16 11.5V1a1.5 1.5 0 0 1 1.5 1.5h.5A2.5 2.5 0 0 0 20.5 5v0a2.5 2.5 0 0 0 1 1" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // DATA: Daftar Link Navigasi
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Kegiatan", path: "/kegiatan" },
    { name: "Pengurus", path: "/pengurus" },
    { name: "Berita", path: "/news" },
    { name: "Galeri", path: "/gallery" },
  ];

  // DATA: Link Sosial Media
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/himasi_kampus",
      label: "Instagram",
    },
    {
      icon: TikTokIcon,
      href: "https://tiktok.com/@himasi_kampus",
      label: "TikTok",
    },
  ];

  return (
    <footer className="bg-card text-foreground py-12 mt-20 border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* 1. Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-4">HIMASI</h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Himpunan Mahasiswa Sistem Informasi. Wadah aspirasi, kreasi, dan
              inovasi bagi seluruh mahasiswa Sistem Informasi.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-foreground/70">
              <MapPin size={18} className="text-primary" />
              <span>Gedung Fakultas Ilmu Komputer, Lt. 1</span>
            </div>
          </div>

          {/* 2. Navigasi (Di-render pakai .map) */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-primary mb-4">
              Navigasi
            </h4>
            <nav className="grid grid-cols-2 gap-3 font-medium text-foreground/80">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={scrollToTop}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* 3. Kontak & Sosmed */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-primary mb-4">
              Hubungi Kami
            </h4>

            <div className="space-y-3 mb-6">
              <a
                href="mailto:himasi@univ.ac.id"
                className="flex items-center justify-center md:justify-end space-x-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>himasi@univ.ac.id</span>
              </a>
              <a
                href="https://wa.me/6281234567890"
                className="flex items-center justify-center md:justify-end space-x-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>+62 812 3456 7890</span>
              </a>
            </div>

            {/* Social Media (Di-render pakai .map) */}
            <div className="flex justify-center md:justify-end space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} HIMASI. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group p-3 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all duration-300 shadow-md transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp
              size={20}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
