import React, { useState } from "react";
import { ArrowRight, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import groupPhoto from "../assets/image/bg.jpg"; // Asset kegiatan Anda

const Kegiatan = () => {
  const dataKegiatan = [
    {
      id: 1,
      tag: "Event Utama",
      title: "Pelantikan Pengurus",
      date: "12 Jan 2026",
      desc: "Peresmian kepengurusan HIMASI UMSU periode 2026-2027 sebagai langkah awal memulai inovasi digital.",
      img: groupPhoto,
    },
    {
      id: 2,
      tag: "Edukasi",
      title: "Workshop Desain",
      date: "05 Feb 2026",
      desc: "Pelatihan UI/UX Design intensif untuk meningkatkan skill visual mahasiswa dalam membangun antarmuka aplikasi.",
      img: groupPhoto,
    },
    {
      id: 3,
      tag: "Sosial",
      title: "HIMASI Goes to School",
      date: "20 Feb 2026",
      desc: "Program pengabdian masyarakat dengan memperkenalkan literasi teknologi dan coding dasar ke sekolah.",
      img: groupPhoto,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

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
            {dataKegiatan.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`relative p-5 rounded-2xl text-left transition-all duration-300 border ${
                  activeTab === index
                    ? "bg-card border-primary shadow-lg scale-[1.02] z-10"
                    : "bg-transparent border-border hover:border-primary/50 opacity-60"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest ${activeTab === index ? "text-primary" : "text-foreground/50"}`}
                  >
                    {item.tag}
                  </span>
                  <h4
                    className={`font-bold text-lg ${activeTab === index ? "text-foreground" : "text-foreground/80"}`}
                  >
                    {item.title}
                  </h4>
                </div>
                {activeTab === index && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary animate-fade-in">
                    <CheckCircle2 size={20} />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* SISI KANAN: Detail Content Card */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="h-full bg-card/30 backdrop-blur-md border border-border rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
              {/* Image Section */}
              <div className="md:w-1/2 relative overflow-hidden group">
                <img
                  src={dataKegiatan[activeTab].img}
                  alt={dataKegiatan[activeTab].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r"></div>

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4 md:top-4 md:bottom-auto bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-xl">
                  {dataKegiatan[activeTab].date}
                </div>
              </div>

              {/* Text Section */}
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center animate-fade-in">
                <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 leading-tight">
                  {dataKegiatan[activeTab].title}
                </h3>
                <p className="text-foreground/60 text-base leading-relaxed mb-8">
                  {dataKegiatan[activeTab].desc}
                </p>

                <button className="cosmic-button w-fit flex items-center gap-2 group/btn py-3 px-8">
                  Selengkapnya
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;
