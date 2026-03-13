import React, { useState } from "react";
import { ArrowRight, Calendar, Sparkles, CheckCircle2 } from "lucide-react";

// Import data JSON
import kegiatanData from "../data/kegiatan.json";

const Kegiatan = () => {
  // Ambil data kegiatan dari JSON, JIKA ADA potong (slice) maksimal hanya 3 item
  const recentKegiatan = kegiatanData ? kegiatanData.slice(0, 3) : [];

  const [activeTab, setActiveTab] = useState(0);

  // Jika data kosong, tampilkan pesan kosong (mencegah error)
  if (!recentKegiatan || recentKegiatan.length === 0) {
    return (
      <div className="py-16 text-center text-foreground/50">
        Tidak ada data kegiatan.
      </div>
    );
  }

  return (
    <section className="relative py-16 px-6 bg-background overflow-hidden transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        {/* --- HEADER (Rata Kiri & Kompak) --- */}
        <div className="mb-12 animate-fade-in text-left">
          <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-[0.3em] uppercase mb-3">
            <Sparkles size={14} />
            Program & Aktivitas
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Agenda <span className="text-primary text-glow">HIMASI</span>
          </h2>
        </div>

        {/* --- GRID UTAMA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* SISI KIRI: Navigasi Tab (List Judul) */}
          <div className="lg:col-span-4 flex flex-col gap-3 order-2 lg:order-1">
            {recentKegiatan.map((item, index) => {
              const isActive = activeTab === index;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative p-5 rounded-2xl text-left transition-all duration-300 border 
                  ${
                    isActive
                      ? "bg-card border-primary shadow-lg scale-[1.02] z-10"
                      : "bg-transparent border-border hover:border-primary/50 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest ${
                        isActive ? "text-primary" : "text-foreground/50"
                      }`}
                    >
                      {item.tag}
                    </span>
                    <h4
                      className={`font-bold text-lg ${
                        isActive ? "text-foreground" : "text-foreground/80"
                      }`}
                    >
                      {item.title}
                    </h4>
                  </div>

                  {isActive && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary animate-fade-in">
                      <CheckCircle2 size={20} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* SISI KANAN: Detail Content Card */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="h-full bg-card/30 backdrop-blur-md border border-border rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
              {/* Image Section */}
              <div className="md:w-1/2 relative overflow-hidden group">
                <img
                  src={recentKegiatan[activeTab].image} // Diubah dari .img ke .image (Sesuai dengan nama key di JSON kamu)
                  alt={recentKegiatan[activeTab].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r"></div>

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4 md:top-4 md:bottom-auto bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-xl">
                  {recentKegiatan[activeTab].date}
                </div>
              </div>

              {/* Text Section */}
              <div
                className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center animate-fade-in"
                key={activeTab}
              >
                {" "}
                {/* Ditambahkan key={activeTab} agar animasi jalan tiap ganti tab */}
                <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 leading-tight">
                  {recentKegiatan[activeTab].title}
                </h3>
                {/* Deskripsi (Kita tambahkan conditional jika di JSON tidak ada "desc") */}
                <p className="text-foreground/60 text-base leading-relaxed mb-8">
                  {recentKegiatan[activeTab].desc ||
                    "Lihat detail kegiatan dan dokumentasi lengkap dari acara ini dengan menekan tombol di bawah."}
                </p>
                {/* Tombol ke Instagram (jika ada di JSON) */}
                <a
                  href={recentKegiatan[activeTab].instagram || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button w-fit flex items-center gap-2 group/btn py-3 px-8 text-sm"
                >
                  Selengkapnya di IG
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;
