import React from "react";
import { Instagram, Linkedin } from "lucide-react";

const DivisionCard = ({ data }) => {
  const isLeader = data.role.toLowerCase().includes("ketua");
  const isSecretary = data.role.toLowerCase().includes("sekretaris");
  const isVip = isLeader || isSecretary;

  return (
    <div className="relative group w-full transition-all duration-500">
      {/* Container Utama */}
      <div
        className={`relative flex flex-col bg-[hsl(var(--card))] border rounded-[2.5rem] p-7 transition-all duration-500
        ${
          isVip
            ? "border-[hsl(var(--primary)/0.4)] shadow-xl shadow-[hsl(var(--primary)/0.03)] scale-[1.02] z-10"
            : "border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.3)] shadow-sm"
        }
      `}
      >
        {/* Foto Profile - UKURAN UPDATED (Bigger & Clearer) */}
        <div className="relative flex justify-center mb-7">
          {/* Subtle Glow Ring untuk VIP */}
          {isVip && (
            <div className="absolute inset-0 m-auto w-36 h-36 bg-[hsl(var(--primary)/0.05)] rounded-full blur-xl transition-all duration-700 group-hover:bg-[hsl(var(--primary)/0.1)]"></div>
          )}

          <div
            className={`relative overflow-hidden rounded-full border-[3px] transition-all duration-700
            ${
              isVip
                ? "w-32 h-32 border-[hsl(var(--primary))]"
                : "w-28 h-28 border-[hsl(var(--border))] group-hover:border-[hsl(var(--primary)/0.5)]"
            }
          `}
          >
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Info Text */}
        <div className="text-center">
          <div className="mb-3 flex flex-col items-center gap-1.5">
            <span
              className={`text-[10px] font-black uppercase tracking-[0.3em]
              ${isVip ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--foreground)/0.4)]"}`}
            >
              {data.role}
            </span>
            {/* Garis Aksen menggunakan --secondary */}
            <div
              className={`h-[2.5px] rounded-full bg-[hsl(var(--secondary))] transition-all duration-700 
              ${isVip ? "w-10" : "w-0 group-hover:w-8"}`}
            ></div>
          </div>

          <h4
            className={`font-bold text-[hsl(var(--foreground))] tracking-tight leading-snug mb-5
            ${isVip ? "text-lg px-2" : "text-base text-[hsl(var(--foreground)/0.9)] px-1"}`}
          >
            {data.name}
          </h4>

          {/* Social Media - Clean & Aligned */}
          <div className="flex justify-center gap-5 pt-5 border-t border-[hsl(var(--border))] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <a
              href="#"
              className="text-[hsl(var(--foreground)/0.3)] hover:text-[hsl(var(--primary))] transition-all hover:scale-110"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="text-[hsl(var(--foreground)/0.3)] hover:text-[#0077b5] transition-all hover:scale-110"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionCard;
