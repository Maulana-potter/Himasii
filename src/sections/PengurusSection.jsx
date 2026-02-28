import React, { useState } from "react";
import { Users, Info, LayoutGrid } from "lucide-react";

// IMPORT KOMPONEN
import LeaderCard from "../components/LeaderCard";
import DivisionCard from "../components/DivisionCard";

// IMPORT DATA JSON
import pengurusData from "../data/pengurus.json";

const PengurusSection = () => {
  const [activeTab, setActiveTab] = useState("Humas");

  // Logika memisahkan VIP (Ketua/Sekdiv) dan Anggota Biasa
  const currentMembers = pengurusData.divisi[activeTab] || [];
  const vips = currentMembers.filter(
    (m) =>
      m.role.toLowerCase().includes("ketua") ||
      m.role.toLowerCase().includes("sekretaris"),
  );
  const regulars = currentMembers.filter(
    (m) =>
      !m.role.toLowerCase().includes("ketua") &&
      !m.role.toLowerCase().includes("sekretaris"),
  );

  return (
    <section className="py-24 bg-[hsl(var(--background))] min-h-screen relative overflow-hidden">
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--primary))]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[hsl(var(--secondary))]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* === HEADER SECTION === */}
        <div className="text-center mb-24">
          <h2 className="text-[10px] font-black tracking-[0.4em] text-[hsl(var(--primary))] uppercase mb-4 inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--primary))/0.08] border border-[hsl(var(--primary))/0.2]">
            Executive Board
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-[hsl(var(--foreground))] tracking-tighter">
            Struktur{" "}
            <span className="text-[hsl(var(--primary))]">Kepengurusan.</span>
          </h1>
          <p className="mt-6 text-[hsl(var(--foreground))/0.5] max-w-xl mx-auto text-sm font-medium leading-relaxed">
            Membangun sinergi melalui kolaborasi yang inklusif untuk mewujudkan
            visi HIMASI 2026/2027.
          </p>
        </div>

        {/* === BAGIAN 1: PIMPINAN UMUM (PIRAMIDA) === */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-10 mb-40">
          <div className="order-2 md:order-1">
            <LeaderCard data={pengurusData.pimpinan[1]} />
          </div>
          <div className="order-1 md:order-2">
            <LeaderCard data={pengurusData.pimpinan[0]} isMain={true} />
          </div>
          <div className="order-3 md:order-3">
            <LeaderCard data={pengurusData.pimpinan[2]} />
          </div>
        </div>

        {/* === BAGIAN 2: DIVISI DENGAN LAYOUT TIER === */}
        <div className="max-w-6xl mx-auto">
          {/* NAVIGASI TAB */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(pengurusData.divisi).map((divName) => (
              <button
                key={divName}
                onClick={() => setActiveTab(divName)}
                className={`relative px-10 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 border
                  ${
                    activeTab === divName
                      ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] border-[hsl(var(--primary))] shadow-xl shadow-[hsl(var(--primary))/0.2] -translate-y-1"
                      : "bg-[hsl(var(--card))] text-[hsl(var(--foreground))/0.4] border-[hsl(var(--border))] hover:border-[hsl(var(--primary))/0.5] hover:text-[hsl(var(--primary))]"
                  }`}
              >
                {divName}
              </button>
            ))}
          </div>

          {/* PANEL DIVISI */}
          <div className="relative">
            {/* Divisi Header Info */}
            <div className="flex items-center justify-between mb-12 px-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--primary))/0.1] flex items-center justify-center text-[hsl(var(--primary))]">
                  <LayoutGrid size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[hsl(var(--foreground))]">
                    Divisi {activeTab}
                  </h3>
                  <div className="h-1 w-10 bg-[hsl(var(--secondary))] rounded-full mt-1"></div>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-[hsl(var(--foreground))/0.3] uppercase tracking-widest">
                <Info size={14} />
                Tier Based Layout
              </div>
            </div>

            {/* GRID SISTEM: TIERED */}
            <div className="space-y-10">
              {/* TIER 1: KETUA & SEKRETARIS (Besar & Di Atas) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {vips.map((member) => (
                  <DivisionCard key={member.id} data={member} />
                ))}
              </div>

              {/* TIER 2: ANGGOTA (Grid Kecil & Di Bawah) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {regulars.map((member) => (
                  <DivisionCard key={member.id} data={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PengurusSection;
