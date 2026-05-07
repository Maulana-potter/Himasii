import React from "react";
import { Link, useParams } from "react-router-dom";
import { newsData } from "../data/news";

const NewsDetail = () => {
  const { id } = useParams();
  const article = newsData.find((item) => item.id.toString() === id);

  if (!article) {
    return (
      <div className="min-h-screen pt-24 px-6 pb-12 max-w-5xl mx-auto">
        <p className="text-xl font-semibold text-foreground mb-6">
          Berita tidak ditemukan.
        </p>
        <Link
          to="/news"
          className="inline-block px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
        >
          Kembali ke Berita
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-6 pb-12 max-w-5xl mx-auto">
      <div className="mb-10">
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          ← Kembali ke Berita
        </Link>
      </div>

      <div className="overflow-hidden rounded-4xl bg-card border border-border shadow-xl">
        <div className="relative h-72 md:h-96 bg-slate-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-3">
                {article.title}
              </h1>
              <div className="text-sm text-foreground/60">
                {article.date} · <span>{article.category}</span>
              </div>
            </div>
            <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold">
              {article.category}
            </span>
          </div>

          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>{article.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
