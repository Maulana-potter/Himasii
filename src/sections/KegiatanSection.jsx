import React from "react";
import {
  MapPin,
  CalendarCheck,
  CheckCircle2,
  ArrowUpRight,
  Instagram,
} from "lucide-react";

// Import data dari file JSON yang sudah kita buat
import kegiatanData from "../data/kegiatan.json";

const KegiatanSection = () => {
  // Mengambil data dari JSON (karena bentuknya langsung array)
  const pastEvents = kegiatanData || [];

  return (
    <section className="py-24 bg-[hsl(var(--background))] transition-colors duration-300 relative overflow-hidden">
      {/* Background Decor (Garis-garis abstrak) */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* === HEADER: Judul Section === */}
        <div className="text-center mb-16 animate-[fade-in_0.7s_ease-out_forwards]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))] text-xs font-bold uppercase tracking-widest mb-4">
            <CheckCircle2 size={14} /> Jejak Rekam
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[hsl(var(--foreground))] text-glow tracking-tighter">
            Arsip Kegiatan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
              HIMASI.
            </span>
          </h1>
          <p className="mt-4 text-[hsl(var(--foreground))]/60 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            Momen-momen berharga dan kolaborasi yang telah kami lalui bersama
            untuk membangun integritas dan keahlian anggota.
          </p>
        </div>

        {/* === GRID CARD "SHOWCASE" === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pastEvents.map((item, index) => (
            <div
              key={item.id}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-xl hover:shadow-[hsl(var(--primary))]/30 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* 1. GAMBAR FULL HEIGHT */}
              <div className="absolute inset-0 z-0 bg-[hsl(var(--muted))]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                {/* Overlay Gradient (Gelap di bawah agar teks putih terbaca) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>

              {/* 2. TAG KATEGORI & LINK IG (Pojok Kiri Atas) */}
              <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                <span className="w-fit px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                  {item.tag}
                </span>

                {/* Tombol IG Kecil di bawah Tag */}
                {item.instagram && (
                  <a
                    href={item.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-[#E1306C] backdrop-blur-md border border-white/10 text-white/90 hover:text-white transition-all duration-300 text-[9px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                  >
                    <Instagram size={12} /> Postingan IG
                  </a>
                )}
              </div>

              {/* 3. KONTEN INFO (Di Bawah) */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {/* Garis Dekorasi Animasi */}
                <div className="w-12 h-1 bg-[hsl(var(--primary))] rounded-full mb-4 group-hover:w-full transition-all duration-700"></div>

                {/* Judul Kegiatan */}
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight tracking-tight drop-shadow-md">
                  {item.title}
                </h3>

                {/* Tanggal */}
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-4">
                  <CalendarCheck
                    size={16}
                    className="text-[hsl(var(--primary))]"
                  />
                  {item.date}
                </div>

                {/* Info Lokasi & Tombol Panah (Muncul saat hover - Slide Up Effect) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                  <div className="overflow-hidden">
                    <div className="pt-4 border-t border-white/20 flex justify-between items-center">
                      <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                        <MapPin
                          size={16}
                          className="text-[hsl(var(--secondary))]"
                        />
                        {item.location}
                      </div>

                      {/* Tombol Panah Utama (Juga Mengarah ke IG) */}
                      {item.instagram && (
                        <a
                          href={item.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-[hsl(var(--primary))] hover:scale-110 hover:rotate-12 transition-all shadow-lg"
                        >
                          <ArrowUpRight size={18} strokeWidth={2.5} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KegiatanSection;
