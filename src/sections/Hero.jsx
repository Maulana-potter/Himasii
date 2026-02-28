import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";

// Import assets
import logo from "../assets/Logo.png";
import groupPhoto from "../assets/image/bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background transition-colors duration-300">
      {/* 1. Background Layer */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full lg:w-8/12 h-full">
          <img
            src={groupPhoto}
            alt="HIMASI UMSU"
            className="w-full h-full object-cover opacity-80 dark:opacity-40 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
        </div>
      </div>

      {/* 2. Content Layer */}
      <div className="container relative z-10 mx-auto px-6 py-10 lg:py-0">
        {/* Menggunakan items-center agar kolom kiri dan kanan sejajar tinggi tengahnya di laptop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* --- KOLOM KIRI (Laptop: Teks) / (Mobile: Judul & Deskripsi Terpisah Logo) --- */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* 1. Bagian Judul */}
            <div className="flex flex-col items-center lg:items-start order-1">
              <div className="animate-fade-in opacity-0 fill-mode-forwards flex items-center gap-2 mb-4">
                <GraduationCap
                  size={20}
                  className="text-primary animate-pulse-subtle"
                />
                <span className="font-medium tracking-wide text-foreground/80 md:text-lg text-sm">
                  Universitas Muhammadiyah Sumatera Utara
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-black leading-[1.1] mb-6 lg:mb-8 animate-fade-in-delay-1 opacity-0 fill-mode-forwards text-foreground">
                Himpunan Mahasiswa <br />
                <span className="text-primary text-glow">Sistem Informasi</span>
              </h1>
            </div>

            {/* 2. LOGO (Mobile Only: Muncul di Tengah) */}
            {/* Kita pakai 'lg:hidden' agar logo ini tidak muncul dua kali di laptop */}
            <div className="lg:hidden flex justify-center my-8 animate-fade-in-delay-2 opacity-0 fill-mode-forwards order-2">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full"></div>
                <div className="relative p-6 rounded-[2.5rem] bg-card/20 backdrop-blur-md border border-white/10 shadow-2xl">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-40 h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* 3. Bagian Deskripsi & Tombol */}
            <div className="flex flex-col items-center lg:items-start order-3">
              <p className="text-foreground/70 text-base md:text-xl max-w-2xl mb-10 leading-relaxed animate-fade-in-delay-2 opacity-0 fill-mode-forwards">
                Wadah kolaborasi dan inovasi untuk mengembangkan potensi
                mahasiswa dalam menghadapi tantangan teknologi di masa depan.
              </p>

              <div className="flex flex-wrap gap-4 md:gap-5 justify-center lg:justify-start animate-fade-in-delay-3 opacity-0 fill-mode-forwards">
                <Link
                  to="/about"
                  className="cosmic-button group flex items-center gap-3 px-8 md:px-10 py-3 md:py-4 text-base md:text-lg"
                >
                  Tentang Kami
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  to="/kegiatan"
                  className="px-8 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-full border-2 border-border font-bold text-foreground bg-card/30 backdrop-blur-sm hover:border-primary transition-all duration-300"
                >
                  Lihat Kegiatan
                </Link>
              </div>
            </div>
          </div>

          {/* --- KOLOM KANAN (Laptop Only: Logo) --- */}
          {/* 'hidden lg:flex' artinya hilang di mobile, muncul di laptop */}
          <div className="hidden lg:col-span-4 lg:flex justify-end animate-fade-in-delay-2 opacity-0 fill-mode-forwards">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full animate-pulse-subtle"></div>
              <div className="relative p-10 rounded-[2.5rem] bg-card/20 backdrop-blur-md border border-white/10 shadow-2xl card-hover">
                <img
                  src={logo}
                  alt="Logo HIMASI"
                  className="w-64 h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-20 meteor w-32 animate-meteor opacity-20 hidden md:block"></div>
    </section>
  );
};

export default Hero;
