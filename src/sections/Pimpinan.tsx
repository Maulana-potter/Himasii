import React from "react";
import wenny from "../assets/image/WENNY.png";
import salsa from "../assets/image/SALSA.png";
import annisa from "../assets/image/CACA.png";

const Pimpinan = () => {
  const pimpinan = [
    {
      name: "Alifah Salsabila",
      role: "Sekretaris",
      img: salsa,
      delay: "animate-fade-in-delay-1",
    },
    {
      name: "Wenny Dinasti Utami",
      role: "Ketua Umum",
      img: wenny,
      delay: "animate-fade-in",
    },
    {
      name: "Annisa Fadiyah",
      role: "Bendahara",
      img: annisa,
      delay: "animate-fade-in-delay-2",
    },
  ];

  return (
    // 1. Mengurangi padding section (py-24 jadi py-12) agar jarak antar section lebih rapat
    <section className="relative py-12 px-6 bg-background overflow-hidden transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* 2. Mengurangi margin bawah judul (mb-10 jadi mb-6) */}
        <div className="text-center mb-6 space-y-0.5">
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
            Pimpinan <span className="text-primary text-glow">HIMASI</span>
          </h2>
          <p className="text-foreground/50 font-medium tracking-[0.3em] uppercase text-[10px] md:text-xs">
            Masa Bakti 2026 — 2027
          </p>
        </div>

        {/* 3. Merapatkan gap antar kartu pimpinan (gap-10 jadi gap-4) */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-6 md:gap-4 lg:gap-6">
          {pimpinan.map((person, index) => (
            <div
              key={index}
              className={`relative group flex flex-col items-center ${person.delay} opacity-0 fill-mode-forwards ${
                person.role === "Ketua Umum"
                  ? "md:translate-y-2 z-20 scale-105"
                  : "z-10 scale-95"
              }`}
            >
              {/* 4. Mengurangi tinggi container agar lebih padat */}
              <div className="relative w-72 h-[420px] md:w-80 md:h-[480px] flex flex-col items-center justify-end">
                <div className="absolute inset-0 bg-primary/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>

                {/* Glassmorphism Body Card */}
                <div className="absolute bottom-0 w-full h-[70%] bg-card/40 backdrop-blur-xl border border-border rounded-[2.5rem] shadow-2xl overflow-hidden card-hover">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent"></div>
                </div>

                {/* Foto Pop-out - Dibuat nempel bawah tanpa gap */}
                <img
                  src={person.img}
                  alt={person.name}
                  className="absolute bottom-0 w-[115%] h-[105%] object-contain z-10 animate-float drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-105"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />

                {/* Badge Nama - Jarak bottom dikurangi agar lebih kompak */}
                <div className="absolute bottom-6 left-0 w-full px-6 z-20 text-center">
                  <div className="bg-background/60 backdrop-blur-lg border border-white/10 py-3 rounded-2xl shadow-2xl transform transition-all group-hover:-translate-y-1">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-0.5 tracking-tight">
                      {person.name}
                    </h3>
                    <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                      {person.role}
                    </p>
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

export default Pimpinan;
