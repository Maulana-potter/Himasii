import React from "react";
import {
  MapPin,
  CalendarCheck,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

// Ganti dengan import gambar kegiatan asli Anda
const img1 = "/images/bg.JPG";
// import img2 from "../assets/image/kegiatan2.jpg";
// import img3 from "../assets/image/kegiatan3.jpg";

const KegiatanSection = () => {
  // Data Dummy: Kegiatan yang SUDAH LEWAT (Past Events)
  const pastEvents = [
    {
      id: 1,
      title: "Inaugurasi & Pelantikan 2026",
      date: "20 Februari 2026",
      location: "Aula Utama UMSU",
      image: img1,
      tag: "Ceremony",
    },
    {
      id: 2,
      title: "HIMASI Tech Camp V",
      date: "10-12 Januari 2026",
      location: "Bumi Perkemahan Sibolangit",
      image: img1, // Ganti gambar beda-beda nanti
      tag: "Outdoor",
    },
    {
      id: 3,
      title: "Workshop Laravel & React",
      date: "15 Desember 2025",
      location: "Lab Komputer 2",
      image: img1,
      tag: "Workshop",
    },
  ];

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
        {/* HEADER: Judul Section */}
        <div className="text-center mb-16 animate-[fade-in_0.7s_ease-out_forwards]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))] text-xs font-bold uppercase tracking-widest mb-4">
            <CheckCircle2 size={14} /> Jejak Rekam
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[hsl(var(--foreground))] text-glow">
            Arsip Kegiatan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
              HIMASI.
            </span>
          </h1>
          <p className="mt-4 text-[hsl(var(--foreground))]/60 max-w-2xl mx-auto">
            Momen-momen berharga dan kolaborasi yang telah kami lalui bersama
            untuk membangun integritas dan keahlian anggota.
          </p>
        </div>

        {/* GRID CARD "SHOWCASE" */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pastEvents.map((item, index) => (
            <div
              key={item.id}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-xl hover:shadow-[hsl(var(--primary))]/30 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* 1. GAMBAR FULL HEIGHT */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {/* Overlay Gradient (Gelap di bawah agar teks terbaca) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>

              {/* 2. TAG KATEGORI (Pojok Kiri Atas) */}
              <div className="absolute top-6 left-6 z-20">
                <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>

              {/* 3. KONTEN (Di Bawah) */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {/* Garis Dekorasi */}
                <div className="w-12 h-1 bg-[hsl(var(--primary))] rounded-full mb-4 group-hover:w-full transition-all duration-700"></div>

                {/* Judul & Tanggal */}
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium mb-4">
                  <CalendarCheck
                    size={16}
                    className="text-[hsl(var(--primary))]"
                  />
                  {item.date}
                </div>

                {/* Info Lokasi (Hanya muncul saat hover - Slide Up Effect) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                  <div className="overflow-hidden">
                    <div className="pt-4 border-t border-white/20 flex justify-between items-center">
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <MapPin
                          size={16}
                          className="text-[hsl(var(--secondary))]"
                        />
                        {item.location}
                      </div>

                      {/* Tombol Panah Kecil */}
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[hsl(var(--primary))] hover:scale-110 transition-all cursor-pointer">
                        <ArrowUpRight size={16} />
                      </div>
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
