import React from "react";

const GallerySection = () => {
  // Data foto dengan perbandingan tinggi yang variatif (Pinterest Style)
  const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg",
    "16.jpeg",
    "17.jpeg",
    "18.jpeg",
    "19.jpeg",
    "20.jpeg",
    "21.jpeg",
    "22.jpeg",
    "23.jpeg",
    "24.jpeg",
    "25.jpeg",
    "26.jpeg",
    "27.jpeg",
    "28.jpeg",
    "29.jpeg",
    "30.jpeg",
    "31.JPG",
    "32.JPG",
    "33.JPG",
    "34.JPG",
    "35.JPG",
    "DSC_0009.JPG",
    "DSC_1065.JPG",
    "DSC_1072.JPG",
    "DSC_1080.JPG",
    "DSC_1088.JPG",
    "DSC_1187.JPG",
    "DSC_1194.JPG",
    "DSC_1198.JPG",
    "DSC_1201.JPG",
    "DSC_1231.JPG",
    "DSC_1265.JPG",
    "DSC_1272.JPG",
    "DSC_12981.JPG",
    "DSC_1335.JPG",
    "DSC_1388.JPG",
    "DSC_1461.JPG",
    "DSC_1478.JPG",
    "DSC_1494.JPG",
    "DSC_1527.JPG",
    "DSC_1544.JPG",
    "DSC_1617.JPG",
    "DSC_1620.JPG",
    "DSC_1624.JPG",
  ];

  return (
    <section className="py-24 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-6">
        {/* Masonry Layout: Tanpa tombol, tanpa teks hover */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((fileName, index) => {
            const heightClasses = [
              "aspect-[3/4]",
              "aspect-square",
              "aspect-[2/3]",
              "aspect-[4/5]",
              "aspect-[3/2]",
              "aspect-[4/3]",
              "aspect-[3/5]",
            ];
            return (
              <div
                key={fileName}
                className="relative group overflow-hidden rounded-[2.5rem] bg-[hsl(var(--muted))] break-inside-avoid border border-[hsl(var(--border))] transition-all duration-700 hover:border-[hsl(var(--primary)/0.3)] hover:shadow-2xl"
              >
                {/* Image with subtle zoom on hover */}
                <img
                  src={`/images/gallery/${fileName}`}
                  alt={`HIMASI Gallery ${index + 1}`}
                  className={`w-full ${heightClasses[index % heightClasses.length]} object-cover transition-transform duration-1000 ease-out group-hover:scale-105`}
                />

                {/* Sangat Minimal Overlay: Hanya merubah sedikit warna saat di-hover agar terasa interaktif */}
                <div className="absolute inset-0 bg-[hsl(var(--primary)/0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
