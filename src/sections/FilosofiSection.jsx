import React from "react";
import { Settings, Link2, Crosshair, Palette } from "lucide-react";

const logoImg = "/Logo.png";

const FilosofiSection = () => {
  // Data Filosofi Lambang (AD/ART Bab VII Pasal 14)
  const filosofiList = [
    {
      icon: Settings,
      title: "Roda Gigi",
      desc: "Melambangkan proses penggerak dan pengembangan ilmu pengetahuan dan teknologi yang tiada henti.",
    },
    {
      icon: Link2,
      title: "Huruf S & I Terkait",
      desc: "Melambangkan kekompakan dan sinergitas yang tak terputus antar anggota HIMASI.",
    },
    {
      icon: Crosshair,
      title: "Titik Pada Huruf I",
      desc: "Menandakan bahwa HIMASI adalah organisasi yang fokus mencapai satu tujuan bersama secara presisi.",
    },
    {
      icon: Palette,
      title: "Warna Identitas",
      desc: "Hitam melambangkan Ketegasan, Cyan melambangkan Kecerdasan & Teknologi, dan Putih melambangkan Kesucian.",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[hsl(var(--background))] overflow-hidden transition-colors duration-300">
      {/* Background Decor (Glow dari sudut bawah) */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[hsl(var(--secondary))]/10 to-[hsl(var(--primary))]/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Kontainer Utama berbingkai halus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center bg-[hsl(var(--card))]/50 p-8 md:p-12 lg:p-16 rounded-[3rem] border border-[hsl(var(--border))] shadow-2xl shadow-[hsl(var(--primary))]/5">
          {/* BAGIAN KIRI: Visual Logo & Slogan */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center h-full min-h-[350px]">
            {/* Efek Cahaya di Belakang Logo */}
            <div className="absolute w-[140%] h-[140%] bg-[hsl(var(--primary))]/10 rounded-full blur-[80px] -z-10"></div>

            <img
              src={logoImg}
              alt="Lambang HIMASI"
              className="relative w-72 md:w-80 lg:w-96 object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
            />

            {/* Pill/Badge Slogan Resmi */}
            <div className="absolute bottom-0 translate-y-1/2 px-6 py-2.5 rounded-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] shadow-lg">
              <span className="text-xs font-bold tracking-widest text-[hsl(var(--secondary))] uppercase">
                Est. 2026
              </span>
            </div>
          </div>

          {/* BAGIAN KANAN: Daftar Penjelasan (Filosofi) */}
          <div className="lg:col-span-7">
            {/* Header Bagian Kanan */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                Bab VII Pasal 14
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[hsl(var(--foreground))] tracking-tighter mb-4">
                Makna Lambang.
              </h2>
              <p className="text-lg text-[hsl(var(--foreground))]/70 leading-relaxed max-w-lg">
                Setiap elemen pada lambang HIMASI memiliki filosofi dan arti
                mendalam yang mencerminkan visi dan identitas organisasi.
              </p>
            </div>

            {/* Grid Daftar Makna (2 Kolom di Tablet/Desktop) */}
            <div className="grid sm:grid-cols-2 gap-y-12 gap-x-10">
              {filosofiList.map((item, index) => (
                <div key={index} className="flex gap-5 group">
                  {/* Ikon di Kiri Teks */}
                  <div className="shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--background))] border border-[hsl(var(--border))] flex items-center justify-center group-hover:border-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary))]/5 transition-all duration-300 shadow-sm">
                      <item.icon
                        size={22}
                        className="text-[hsl(var(--primary))] group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Teks Penjelasan */}
                  <div>
                    <h4 className="text-lg font-bold text-[hsl(var(--foreground))] mb-2 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[hsl(var(--foreground))]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilosofiSection;
