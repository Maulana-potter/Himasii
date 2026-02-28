import React from "react";

const News = () => {
  // Data Dummy Berita (Nanti bisa diganti API/Database)
  const newsData = [
    {
      id: 1,
      title: "HIMASI Sukses Gelar Workshop Web Development",
      date: "25 Feb 2026",
      category: "Akademik",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400",
      excerpt:
        "Workshop ini dihadiri oleh lebih dari 100 mahasiswa yang antusias belajar React JS dan Tailwind CSS.",
    },
    {
      id: 2,
      title: "Open Recruitment Pengurus Periode 2026/2027",
      date: "20 Feb 2026",
      category: "Organisasi",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400",
      excerpt:
        "Mari bergabung menjadi bagian dari keluarga besar HIMASI dan kembangkan soft skill kamu di sini.",
    },
    {
      id: 3,
      title: "Kunjungan Industri ke Startup Unicorn",
      date: "15 Feb 2026",
      category: "Event",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400",
      excerpt:
        "Mahasiswa diajak melihat langsung budaya kerja di perusahaan teknologi terkemuka.",
    },
    // Tambahkan data lain di sini...
  ];

  return (
    <div className="min-h-screen pt-24 px-6 pb-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Berita Terbaru</h1>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Ikuti perkembangan terkini seputar kegiatan, prestasi, dan informasi
          penting dari HIMASI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {/* Gambar Berita */}
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Konten Berita */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-3 text-sm">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {item.category}
                </span>
                <span className="text-foreground/60">{item.date}</span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 leading-tight hover:text-primary transition-colors cursor-pointer">
                {item.title}
              </h3>

              <p className="text-foreground/70 mb-4 flex-grow line-clamp-3">
                {item.excerpt}
              </p>

              <button className="text-primary font-semibold hover:underline self-start mt-auto">
                Baca Selengkapnya →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
