import React from "react";
import { Sparkles, Target } from "lucide-react";

const logoImg = "/Logo.png"; // Sesuaikan path logo kamu

const IdentitySection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[hsl(var(--background))] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[hsl(var(--primary))]/10 to-transparent rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/4"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* BAGIAN KIRI: Teks & Fungsi */}
          <div className="flex flex-col items-start text-left animate-[fade-in_0.7s_ease-out_forwards]">
            {/* Label Kecil */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] text-xs font-bold tracking-[0.2em] uppercase mb-8">
              <Sparkles size={14} />
              Identitas Organisasi
            </div>

            {/* Judul & Slogan */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[hsl(var(--foreground))] tracking-tighter mb-6 leading-[1.1]">
              Systemize <br />
              the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
                Future!
              </span>
            </h1>

            <p className="text-lg text-[hsl(var(--foreground))]/60 max-w-xl mb-12 leading-relaxed">
              Himpunan Mahasiswa Sistem Informasi (HIMASI) Universitas
              Muhammadiyah Sumatera Utara. Bergerak bersama mengintegrasikan
              teknologi dan nilai-nilai keislaman.
            </p>

            {/* Kotak Fungsi Organisasi (Menonjol) */}
            <div className="relative p-8 rounded-3xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-xl shadow-[hsl(var(--primary))]/5 w-full max-w-xl group hover:border-[hsl(var(--primary))]/30 transition-colors duration-500">
              <div className="absolute -top-6 left-8 bg-[hsl(var(--background))] p-3 rounded-2xl border border-[hsl(var(--border))] group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                <Target size={24} className="text-[hsl(var(--primary))]" />
              </div>
              <h3 className="mt-2 text-sm font-bold text-[hsl(var(--foreground))] uppercase tracking-widest text-[hsl(var(--primary))] mb-3">
                Fungsi HIMASI
              </h3>
              <p className="text-base text-[hsl(var(--foreground))]/80 leading-relaxed font-medium italic">
                "Sebagai wadah pengembangan keilmuan, minat, dan bakat serta
                sarana penyalur aspirasi dan komunikasi mahasiswa Sistem
                Informasi."
              </p>
            </div>
          </div>

          {/* BAGIAN KANAN: Visual Logo Mengambang */}
          <div className="relative flex justify-center items-center h-full min-h-[400px] animate-[fade-in_1s_ease-out_0.3s_forwards] opacity-0 lg:order-last order-first">
            {/* Lingkaran Dekoratif di belakang logo */}
            <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] border border-[hsl(var(--border))] rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-[320px] h-[320px] md:w-[460px] md:h-[460px] border border-[hsl(var(--border))]/50 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

            <img
              src={logoImg}
              alt="Logo HIMASI"
              className="relative w-64 md:w-80 object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite] z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;
