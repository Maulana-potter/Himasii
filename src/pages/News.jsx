import React from "react";
import { Link } from "react-router-dom";
import { newsData } from "../data/news";

const News = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Berita</h1>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Ikuti perkembangan terkini seputar kegiatan, prestasi, dan informasi
          penting dari HIMASI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((item) => (
          <Link
            key={item.id}
            to={`/news/${item.id}`}
            className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group"
          >
            {/* Gambar Berita */}
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Konten Berita */}
            <div className="p-6 flex flex-col grow">
              <div className="flex items-center justify-between mb-3 text-sm">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {item.category}
                </span>
                <span className="text-foreground/60">{item.date}</span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-foreground/70 mb-4 grow line-clamp-3">
                {item.excerpt}
              </p>

              <span className="text-primary font-semibold self-start mt-auto">
                Baca Selengkapnya →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;
