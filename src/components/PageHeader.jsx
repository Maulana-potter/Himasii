import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
// Import gambar background default
const defaultBg = "/images/bg.JPG";

const PageHeader = ({ title, description, bgImage, parentPage = "Home" }) => {
  return (
    <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage || defaultBg}
          alt="Header Background"
          className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-[20s] ease-linear"
        />
        <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-[2px] transition-colors duration-300"></div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-center pt-8">
        <div
          className="animate-fade-in opacity-0 fill-mode-forwards inline-flex items-center gap-2 px-4 py-2 rounded-full 
          bg-slate-100/50 dark:bg-white/10 
          border border-slate-300 dark:border-white/20 
          backdrop-blur-md mb-6 transition-colors duration-300"
        >
          <Link
            to="/"
            className="flex items-center gap-1 text-slate-600 dark:text-white/80 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <Home size={12} /> {parentPage}
          </Link>
          <ChevronRight
            size={12}
            className="text-slate-400 dark:text-white/50"
          />
          <span className="text-primary font-bold text-xs uppercase tracking-widest">
            {title}
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-black 
          text-slate-900 dark:text-white 
          mb-6 tracking-tight leading-tight drop-shadow-sm transition-colors duration-300 animate-fade-in-delay-1 opacity-0 fill-mode-forwards"
        >
          {title}
        </h1>

        {description && (
          <div className="animate-fade-in-delay-2 opacity-0 fill-mode-forwards flex flex-col items-center gap-4">
            <div className="w-12 h-1.5 bg-primary rounded-full"></div>

            <p
              className="max-w-2xl text-base md:text-lg font-medium leading-relaxed 
              text-slate-700 dark:text-white/90 
              transition-colors duration-300"
            >
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
