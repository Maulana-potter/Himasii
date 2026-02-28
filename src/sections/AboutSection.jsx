import React from "react";
import { Target, Zap, Layout, CheckCircle2 } from "lucide-react";
import logoImg from "../assets/Logo.png";

const AboutSection = () => {
  return (
    <section className="relative py-20 bg-[hsl(var(--background))] transition-colors duration-300 overflow-hidden">
      {/* Background Decor (Subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[hsl(var(--primary))]/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6">
        {/* 1. Header Ringkas */}
        <div className="text-center mb-12 animate-[fade-in_0.7s_ease-out_forwards]">
          <h2 className="text-sm font-bold tracking-[0.3em] text-[hsl(var(--primary))] uppercase mb-2">
            Tentang Kami
          </h2>
          <h1 className="text-3xl md:text-5xl font-black text-[hsl(var(--foreground))] text-glow">
            HIMASI <span className="text-[hsl(var(--primary))]">Identity.</span>
          </h1>
        </div>

        {/* 2. THE MAIN COMPACT CARD (Satu Panel Besar) */}
        <div className="relative rounded-[2.5rem] bg-[hsl(var(--card))] border border-[hsl(var(--border))] overflow-hidden shadow-2xl shadow-[hsl(var(--primary))]/5 animate-[fade-in_0.7s_ease-out_0.2s_forwards] opacity-0">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* KOLOM KIRI: VISUAL LOGO (4 Kolom) */}
            <div className="lg:col-span-5 bg-[hsl(var(--secondary))]/5 relative flex items-center justify-center p-12 min-h-[400px]">
              {/* Decorative Circle */}
              <div className="absolute w-64 h-64 border border-[hsl(var(--primary))]/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute w-48 h-48 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl animate-[pulse-subtle_3s_ease-in-out_infinite]"></div>

              {/* Logo Floating */}
              <img
                src={logoImg}
                alt="Logo HIMASI"
                className="relative w-48 h-48 object-contain drop-shadow-xl animate-[float_6s_ease-in-out_infinite] z-10"
              />
            </div>

            {/* KOLOM KANAN: KONTEN TEKS (7 Kolom) */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center space-y-8">
              {/* Filosofi Logo */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                    <Layout size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">
                    Filosofi Logo
                  </h3>
                </div>
                <p className="text-[hsl(var(--foreground))]/80 leading-relaxed text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Garis Pemisah Halus */}
              <div className="w-full h-[1px] bg-[hsl(var(--border))]"></div>

              {/* Visi */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))]">
                    <Target size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">
                    Visi Organisasi
                  </h3>
                </div>
                <div className="p-4 rounded-xl bg-[hsl(var(--background))] border-l-4 border-[hsl(var(--primary))]">
                  <p className="text-[hsl(var(--foreground))]/90 font-medium italic">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. FOOTER PANEL: MISI (Grid Horizontal di Bawah) */}
          <div className="bg-[hsl(var(--primary))]/5 border-t border-[hsl(var(--border))] p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Label Misi */}
              <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold text-sm">
                <Zap size={16} fill="currentColor" /> Misi Kami
              </div>

              {/* Grid Item Misi (Compact) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                {[
                  "Lorem ipsum dolor sit amet consectetur.",
                  "Adipiscing elit sed do eiusmod tempor.",
                  "Incididunt ut labore et dolore magna.",
                  "Ut enim ad minim veniam quis nostrud.",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-[hsl(var(--foreground))]/80"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-[hsl(var(--secondary))] shrink-0"
                    />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
