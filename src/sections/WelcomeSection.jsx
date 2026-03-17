import React from "react";
import {
  Users, // Ikon untuk HUMAS
  Cpu, // Ikon untuk RISTEK
  GraduationCap, // Ikon untuk PSDM
  MonitorPlay, // Ikon untuk MEDINFO
} from "lucide-react";

const WelcomeSection = () => {
  // Data 4 Divisi HIMASI UMSU
  const divisions = [
    { name: "HUMAS", desc: "Hubungan Masyarakat", icon: Users },
    { name: "RISTEK", desc: "Riset & Teknologi", icon: Cpu },
    { name: "PSDM", desc: "Pengembangan SDM", icon: GraduationCap },
    { name: "MEDINFO", desc: "Media & Informasi", icon: MonitorPlay },
  ];

  return (
    <section className="relative py-24 bg-[hsl(var(--background))] overflow-hidden transition-colors duration-300">
      {/* Efek Cahaya Halus di Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-gradient-to-b from-[hsl(var(--primary))]/10 to-transparent rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center text-center">
        {/* TEKS SAMBUTAN */}
        <p className="text-base md:text-lg lg:text-xl text-[hsl(var(--foreground))]/90 font-bold leading-relaxed max-w-4xl mb-12 drop-shadow-sm">
          Selamat datang di Website HIMASI, Himpunan Mahasiswa Sistem Informasi!
          <br />
          <br />
          Organisasi mahasiswa yang berdedikasi untuk mengembangkan potensi
          akademik, profesional, dan sosial di bidang Sistem Informasi. Dengan
          berbagai kegiatan seperti seminar, pelatihan, hingga proyek
          kolaboratif, kami bertujuan untuk menciptakan lingkungan belajar yang
          inspiratif sekaligus membangun jejaring yang solid di antara
          mahasiswa.
        </p>

        {/* STATISTIK (Angka disesuaikan menjadi 4 Divisi) */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[2px] w-8 md:w-16 bg-[hsl(var(--border))] rounded-full"></div>
          <h3 className="text-lg md:text-xl font-black text-[hsl(var(--foreground))] tracking-wide">
            63 Anggota{" "}
            <span className="text-[hsl(var(--primary))] px-2">—</span> 4 Divisi
          </h3>
          <div className="h-[2px] w-8 md:w-16 bg-[hsl(var(--border))] rounded-full"></div>
        </div>

        {/* GRID 4 DIVISI */}
        {/* Diubah menjadi md:grid-cols-4 agar pas dibagi 4 rata di layar sedang/besar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full mb-14">
          {divisions.map((div, i) => (
            <div
              key={i}
              className="group aspect-square flex flex-col items-center justify-center p-4 md:p-6 text-center rounded-3xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/50 hover:shadow-2xl shadow-sm transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Efek Hover Glow di dalam Card */}
              <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Ikon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[hsl(var(--background))] border border-[hsl(var(--border))] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--primary))] transition-colors duration-500 z-10">
                <div.icon
                  size={28}
                  className="text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary-foreground))] transition-colors duration-500"
                />
              </div>

              {/* Teks Divisi */}
              <div className="z-10 flex flex-col gap-1">
                <h4 className="font-black text-[hsl(var(--foreground))] text-lg md:text-xl tracking-wide group-hover:text-[hsl(var(--primary))] transition-colors">
                  {div.name}
                </h4>
                {/* Tambahan kepanjangan nama divisi (samar) */}
                <span className="text-[10px] md:text-xs text-[hsl(var(--foreground))]/60 font-medium">
                  {div.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* TOMBOL INFO LEBIH LANJUT */}
        <a
          href="/Pengurus"
          className="px-8 py-4 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold text-lg hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Info Lebih Lanjut
        </a>
      </div>
    </section>
  );
};

export default WelcomeSection;
