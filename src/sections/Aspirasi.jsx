import React from "react";
import { Send, MessageSquare, Mail, GraduationCap } from "lucide-react";

const Aspirasi = () => {
  return (
    <section className="relative py-16 px-6 bg-background overflow-hidden transition-colors duration-300">
      {/* Ornamen Background - Efek Kosmik Halus */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full -z-10 animate-pulse-subtle"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* --- BAGIAN KIRI: TEKS PENJELASAN (RATA KIRI) --- */}
          <div className="lg:col-span-5 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-xs tracking-[0.3em] uppercase">
                <MessageSquare size={14} />
                Suara Mahasiswa
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Kotak <span className="text-primary text-glow">Aspirasi</span>
              </h2>
              <div className="h-1.5 w-16 bg-primary rounded-full"></div>
            </div>

            <p className="text-foreground/70 text-lg leading-relaxed max-w-md">
              Punya ide, kritik, atau saran untuk kemajuan HIMASI? Sampaikan
              aspirasimu di sini. Kami sangat menghargai setiap masukan demi
              menciptakan organisasi yang lebih baik dan inovatif.
            </p>

            {/* Ilustrasi Tambahan Kecil agar tidak kosong */}
            <div className="hidden lg:block pt-4">
              <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10 inline-block animate-float">
                <Send size={40} className="text-primary opacity-50" />
              </div>
            </div>
          </div>

          {/* --- BAGIAN KANAN: FORMULIR (MODERN GLASS CARD) --- */}
          <div className="lg:col-span-7 animate-fade-in-delay-1">
            <div className="bg-card/40 backdrop-blur-xl border border-border rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative">
              {/* Overlay Gradient Halus */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[2.5rem] pointer-events-none"></div>

              <form className="relative space-y-6">
                {/* Input Email */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-foreground/80 ml-1">
                    <Mail size={16} className="text-primary" />
                    Email Mahasiswa <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="nama@mhs.umsu.ac.id"
                    className="w-full px-6 py-4 rounded-2xl bg-background/50 border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-foreground"
                    required
                  />
                </div>

                {/* Input Kelas */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-foreground/80 ml-1">
                    <GraduationCap size={16} className="text-primary" />
                    Kelas / Angkatan <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: 5A Pagi / 2022"
                    className="w-full px-6 py-4 rounded-2xl bg-background/50 border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-foreground"
                    required
                  />
                </div>

                {/* Input Aspirasi */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-foreground/80 ml-1">
                    <MessageSquare size={16} className="text-primary" />
                    Pesan Aspirasi <span className="text-primary">*</span>
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tuliskan ide atau saranmu di sini..."
                    className="w-full px-6 py-4 rounded-2xl bg-background/50 border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-foreground resize-none"
                    required
                  ></textarea>
                </div>

                {/* Tombol Kirim - Menggunakan Cosmic Style */}
                <button
                  type="submit"
                  className="cosmic-button w-full flex items-center justify-center gap-3 py-4 text-lg group"
                >
                  Kirim Aspirasi
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aspirasi;
