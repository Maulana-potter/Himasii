import React from "react";

const MomentSection = () => {
  // --- DATA FOTO MOMEN ---
  const moments = [
    "/images/gallery/1.jpeg",
    "/images/gallery/2.jpeg",
    "/images/gallery/3.jpeg",
    "/images/gallery/4.jpeg",
    "/images/gallery/5.jpeg",
    "/images/gallery/6.jpeg",
    "/images/gallery/7.jpeg",
    "/images/gallery/8.jpeg",
  ];

  return (
    <section className="relative py-24 bg-[hsl(var(--background))] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* TEKS RAKSASA DI TENGAH */}
        <div className="absolute inset-0 flex items-center justify-center  z-20">
          <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-black  drop-shadow-sm text-white">
            HIMASI 2026
          </h2>
        </div>

        {/* AREA SLIDER FOTO BERJALAN */}
        <div className="relative w-full h-[300px] md:h-[450px] flex items-center overflow-hidden">
          {/* FADES (Kabut di ujung kiri & kanan) */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[hsl(var(--background))] to-transparent z-30 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[hsl(var(--background))] to-transparent z-30 pointer-events-none"></div>

          <div className="flex w-max hover:[animation-play-state:paused]">
            {/* TRACK 1 */}
            <div
              className="flex items-center"
              style={{
                animation: "infinite-scroll 24s linear infinite",
                animationPlayState: "running",
              }}
            >
              {moments.map((img, index) => (
                <div
                  key={`track1-${index}`}
                  // Grayscale dan opacity dihapus. Fotonya sekarang full color!
                  className="group relative w-[260px] md:w-[380px] h-[300px] md:h-[400px] mx-6 md:mx-10 overflow-hidden -skew-x-12 border-2 border-[hsl(var(--border))] shadow-xl transition-all duration-500 hover:z-40 hover:-translate-y-4 hover:scale-[1.02] cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Momen ${index}`}
                    className="absolute inset-0 w-full h-full object-cover skew-x-12 scale-125 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Lapisan gelap transparan (hitam 30%) yang akan hilang jadi terang benderang saat di-hover */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 skew-x-12 scale-125"></div>
                </div>
              ))}
            </div>

            {/* TRACK 2 (Duplikat) */}
            <div
              className="flex items-center"
              aria-hidden="true"
              style={{
                animation: "infinite-scroll 24s linear infinite",
                animationPlayState: "running",
              }}
            >
              {moments.map((img, index) => (
                <div
                  key={`track2-${index}`}
                  className="group relative w-[260px] md:w-[380px] h-[300px] md:h-[400px] mx-6 md:mx-10 overflow-hidden -skew-x-12 border-2 border-[hsl(var(--border))] shadow-xl transition-all duration-500 hover:z-40 hover:-translate-y-4 hover:scale-[1.02] cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Momen ${index}`}
                    className="absolute inset-0 w-full h-full object-cover skew-x-12 scale-125 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 skew-x-12 scale-125"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentSection;
