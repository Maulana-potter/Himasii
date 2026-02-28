import React from "react";
import { Instagram, Linkedin, Github } from "lucide-react";

const LeaderCard = ({ data, isMain = false }) => {
  return (
    <div
      className={`relative group w-full transition-all duration-500 
      ${isMain ? "md:-mt-10 scale-105 z-20" : "scale-100 z-10"}`}
    >
      {/* 1. Dekorasi Aksen Belakang - Menggunakan warna --primary (Teal) */}
      <div className="absolute top-4 -right-2 w-full h-full bg-[hsl(var(--primary)/0.1)] rounded-[2.5rem] -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>

      {/* 2. Main Card Container */}
      <div className="relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[2.5rem] p-5 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-[hsl(var(--primary)/0.3)]">
        {/* Foto Profile - Tetap Berwarna & Bersih */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-6">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Social Media - Minimalist Floating (Hanya warna --primary) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 p-2 bg-[hsl(var(--card)/0.8)] backdrop-blur-md rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <a
              href="#"
              className="p-2.5 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2.5 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2.5 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Info Text - Menggunakan --primary & --secondary secara presisi */}
        <div className="px-2 text-center">
          <div className="flex flex-col items-center gap-1 mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[hsl(var(--primary))]">
              {data.role}
            </span>
            {/* Garis Aksen menggunakan --secondary (Biru HIMASI) */}
            <div className="h-1 w-8 rounded-full bg-[hsl(var(--secondary))]"></div>
          </div>

          <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] tracking-tight mb-2">
            {data.name}
          </h3>

          <p className="text-[11px] text-[hsl(var(--foreground)/0.5)] leading-relaxed font-medium">
            Himpunan Mahasiswa Sistem Informasi
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
