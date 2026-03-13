import React from "react";
import { Instagram, Linkedin, Github } from "lucide-react";

const DivisionCard = ({ data }) => {
  const isLeader = data.role.toLowerCase().includes("ketua");
  const isSecretary = data.role.toLowerCase().includes("sekretaris");
  const isVip = isLeader || isSecretary;

  const socials = data.socials || {};

  return (
    <div className="relative group w-full h-full transition-all duration-500">
      {/* Container Utama */}
      <div
        className={`relative flex flex-col items-center h-full bg-[hsl(var(--card))] border rounded-[2rem] p-5 lg:p-6 transition-all duration-500 text-center
        ${
          isVip
            ? "border-[hsl(var(--primary)/0.3)] shadow-lg bg-gradient-to-b from-[hsl(var(--primary)/0.03)] to-transparent z-10 scale-[1.01]"
            : "border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.3)] hover:shadow-xl shadow-sm hover:-translate-y-1"
        }
      `}
      >
        {/* 1. FOTO MAX JUMBO (Ditambah Sedikit Lagi) */}
        <div
          className={`relative mb-6 rounded-full overflow-hidden transition-all duration-500
            ${
              isVip
                ? "w-48 h-48 sm:w-56 sm:h-56 border-[8px] border-[hsl(var(--primary)/0.2)]"
                : "w-36 h-36 sm:w-44 sm:h-44 border-[6px] border-[hsl(var(--border))] group-hover:border-[hsl(var(--primary)/0.4)]"
            }
          `}
        >
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* 2. KONTEN TEKS (Rata Tengah) */}
        <div className="flex flex-col items-center flex-1 w-full">
          <span
            className={`text-[11px] font-black uppercase tracking-[0.25em] mb-2
            ${isVip ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--foreground)/0.4)]"}`}
          >
            {data.role}
          </span>

          <h4
            className={`font-bold text-[hsl(var(--foreground))] tracking-tight leading-snug mb-4
            ${isVip ? "text-2xl px-2" : "text-lg px-1"}`}
          >
            {data.name}
          </h4>

          {/* Spacer otomatis agar posisi elemen bawah selalu sejajar */}
          <div className="flex-1"></div>

          {/* Garis Aksen di Tengah */}
          <div
            className={`h-[2px] rounded-full bg-[hsl(var(--secondary))] transition-all duration-500 mb-5 mt-2 ${isVip ? "w-12" : "w-8 group-hover:w-12"}`}
          ></div>

          {/* 3. SOSIAL MEDIA (Di Tengah Bawah) */}
          <div className="flex items-center justify-center gap-5">
            {socials.instagram && (
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--foreground)/0.3)] hover:text-[#E1306C] transition-all hover:scale-110"
              >
                <Instagram size={18} />
              </a>
            )}

            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--foreground)/0.3)] hover:text-[#0077b5] transition-all hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
            )}

            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--foreground)/0.3)] hover:text-[hsl(var(--primary))] transition-all hover:scale-110"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionCard;
