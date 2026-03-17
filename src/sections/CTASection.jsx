import React from "react";
import { ArrowRight, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 bg-[hsl(var(--background))] overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        {/* Kotak CTA Utama - Diganti ke warna Card agar jauh lebih kalem */}
        <div className="relative rounded-[3rem] bg-[hsl(var(--card))] border border-[hsl(var(--border))] overflow-hidden p-10 md:p-16 lg:p-20 shadow-xl shadow-[hsl(var(--primary))]/5">
          {/* Background Patterns & Glow (Sangat halus, tidak menusuk mata) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--primary))]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[hsl(var(--secondary))]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

          {/* Elemen Dekoratif - Dibuat sangat samar */}
          <div className="absolute top-10 left-10 opacity-[0.03] hidden md:block">
            <Users size={120} className="text-[hsl(var(--foreground))]" />
          </div>

          {/* Konten CTA */}
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[hsl(var(--foreground))] tracking-tighter mb-6 leading-tight">
              Kenali Para Penggerak <br />
              {/* Teks HIMASI diberi efek gradasi halus */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
                HIMASI UMSU.
              </span>
            </h2>

            <p className="text-[hsl(var(--foreground))]/70 text-lg md:text-xl max-w-2xl mb-10 font-medium leading-relaxed">
              Lihat lebih dekat struktur kepengurusan dan divisi-divisi yang
              bekerja keras mewujudkan visi dan misi organisasi untuk periode
              ini.
            </p>

            {/* Tombol Arah ke Halaman Pengurus - Warna mencolok dipindah ke tombol saja */}
            <a
              href="/pengurus"
              className="group flex items-center gap-3 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-8 py-4 rounded-full font-bold text-lg hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              Lihat Susunan Pengurus
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
