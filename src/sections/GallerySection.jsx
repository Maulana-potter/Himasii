import React from "react";

const GallerySection = () => {
  // Data foto dengan perbandingan tinggi yang variatif (Pinterest Style)
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
      height: "aspect-[3/4]",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      height: "aspect-square",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      height: "aspect-[2/3]",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1528605248644-14dd0432201e",
      height: "aspect-[4/5]",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
      height: "aspect-square",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      height: "aspect-[3/2]",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      height: "aspect-[4/3]",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
      height: "aspect-[3/5]",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
      height: "aspect-square",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      height: "aspect-[3/4]",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1529070532901-ba8c182ac170",
      height: "aspect-[2/3]",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      height: "aspect-square",
    },
  ];

  return (
    <section className="py-24 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-6">
        {/* Masonry Layout: Tanpa tombol, tanpa teks hover */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative group overflow-hidden rounded-[2.5rem] bg-[hsl(var(--muted))] break-inside-avoid border border-[hsl(var(--border))] transition-all duration-700 hover:border-[hsl(var(--primary)/0.3)] hover:shadow-2xl"
            >
              {/* Image with subtle zoom on hover */}
              <img
                src={`${img.url}?q=80&w=800`}
                alt="HIMASI Documentation"
                className={`w-full ${img.height} object-cover transition-transform duration-1000 ease-out group-hover:scale-105`}
              />

              {/* Sangat Minimal Overlay: Hanya merubah sedikit warna saat di-hover agar terasa interaktif */}
              <div className="absolute inset-0 bg-[hsl(var(--primary)/0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
