import React, { useState } from "react";
import { ArrowRight, Sparkles, CalendarDays, ExternalLink } from "lucide-react";

// Import data JSON
import kegiatanData from "../data/kegiatan.json";

const Kegiatan = () => {
  // Kode baru: Ambil 3 terakhir, lalu balik urutannya (terbaru di paling depan)
  const recentKegiatan = kegiatanData ? kegiatanData.slice(-3).reverse() : [];

  // State untuk melacak indeks kegiatan yang sedang menjadi "Featured" (Utama)
  const [featuredIndex, setFeaturedIndex] = useState(0);

  // Jika data kosong
  if (!recentKegiatan || recentKegiatan.length === 0) {
    return (
      <div className="py-24 text-center text-[hsl(var(--foreground))]/50 bg-[hsl(var(--background))]">
        Belum ada data kegiatan.
      </div>
    );
  }

  // Pisahkan data menjadi 1 Featured dan array sisanya
  const featuredEvent = recentKegiatan[featuredIndex];
  const otherEvents = recentKegiatan.filter(
    (_, index) => index !== featuredIndex,
  );

  return (
    <section className="relative py-24 bg-[hsl(var(--background))] overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[hsl(var(--primary))]/10 to-transparent rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-[hsl(var(--primary))] font-bold text-xs tracking-[0.3em] uppercase mb-4">
              <Sparkles size={14} />
              Program & Aktivitas
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[hsl(var(--foreground))] tracking-tighter">
              Kegiatan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
                HIMASI.
              </span>
            </h2>
          </div>

          {/* Tombol Lihat Semua (Opsional) */}
          <a
            href="/kegiatan"
            className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--primary))] transition-colors group"
          >
            Lihat Semua Kegiatan
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        {/* --- GRID UTAMA (BENTO STYLE) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* SISI KIRI: FEATURED EVENT (Card Besar) - Mengambil 8 Kolom */}
          <div className="lg:col-span-8 group relative rounded-[2.5rem] overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-xl hover:shadow-2xl transition-all duration-500 h-[500px] lg:h-[600px] flex flex-col justify-end">
            {/* Background Image animasi Fade-in saat berganti */}
            <img
              key={featuredEvent.id} // Key penting agar memicu animasi ulang saat ganti foto
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 animate-[fade-in_0.5s_ease-out_forwards]"
            />

            {/* Overlay Gradient (Lebih gelap di bawah untuk teks) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/20 to-transparent mix-blend-overlay"></div>

            {/* Badge Kategori */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
              <span className="px-4 py-2 rounded-full bg-[hsl(var(--primary))] text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                {featuredEvent.tag || "Event Utama"}
              </span>
            </div>

            {/* Konten Featured */}
            <div
              key={`content-${featuredEvent.id}`}
              className="relative z-20 p-8 md:p-12 w-full max-w-3xl animate-[fade-in_0.5s_ease-out_forwards]"
            >
              <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-4">
                <CalendarDays
                  size={16}
                  className="text-[hsl(var(--primary))]"
                />
                {featuredEvent.date}
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                {featuredEvent.title}
              </h3>

              <p className="text-white/70 text-base md:text-lg line-clamp-2 md:line-clamp-3 mb-8">
                {featuredEvent.desc ||
                  "Kegiatan mahasiswa HIMASI UMSU yang penuh dengan kolaborasi dan pembelajaran inovatif."}
              </p>

              <a
                href={featuredEvent.instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-[hsl(var(--primary))] hover:text-white transition-colors duration-300 shadow-lg"
              >
                Lihat di Instagram
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* SISI KANAN: LIST EVENT LAINNYA (Tumpukan Card Kecil) - Mengambil 4 Kolom */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {otherEvents.map((event) => {
              // Cari index asli dari event ini di array recentKegiatan
              const originalIndex = recentKegiatan.findIndex(
                (e) => e.id === event.id,
              );

              return (
                <div
                  key={event.id}
                  onClick={() => setFeaturedIndex(originalIndex)} // Jadikan Featured saat diklik
                  className="group relative flex-1 min-h-[200px] lg:min-h-0 rounded-[2rem] overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-end p-6"
                >
                  {/* Background Image Card Kecil */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Konten Card Kecil */}
                  <div className="relative z-20">
                    <span className="text-[10px] font-bold text-[hsl(var(--primary))] uppercase tracking-widest mb-2 block">
                      {event.tag || "Kegiatan"}
                    </span>
                    <h4 className="text-xl font-bold text-white leading-tight mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
                      {event.title}
                    </h4>
                    <div className="flex items-center gap-2 text-white/60 text-xs font-medium">
                      <CalendarDays size={14} />
                      {event.date}
                    </div>
                  </div>

                  {/* Icon Panah Muncul saat Hover */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight size={18} className="text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;
