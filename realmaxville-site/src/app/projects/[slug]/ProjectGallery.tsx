"use client";
import { useState, useEffect, useCallback } from "react";

interface Props {
  images: string[];
  name: string;
}

export default function ProjectGallery({ images, name }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (activeIndex === null) return;
    if (e.key === "Escape") setActiveIndex(null);
    if (e.key === "ArrowRight") setActiveIndex((i) => (i !== null ? (i + 1) % images.length : null));
    if (e.key === "ArrowLeft") setActiveIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [activeIndex, images.length]);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.classList.add("modal-open");
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, handleKeyDown]);

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#0e0e0e" }} aria-labelledby="gallery-heading">
      <div className="section-inner space-y-12">
        <div>
          <h2 id="gallery-heading" className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-2">
            PROJECT GALLERY
          </h2>
          <p className="text-[#b0b3b4] text-sm">{images.length} images</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer bg-white/2"
              aria-label={`View image ${i + 1} of ${images.length}`}
            >
              <img
                src={img}
                alt={`${name} — image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${activeIndex + 1} of ${images.length}`}
          onClick={(e) => { if (e.target === e.currentTarget) setActiveIndex(null); }}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Close */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#c7f300] hover:text-[#171e00] hover:border-[#c7f300] transition-all cursor-pointer"
            aria-label="Close lightbox"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={() => setActiveIndex((i) => (i! - 1 + images.length) % images.length)}
            className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#c7f300] hover:text-[#171e00] hover:border-[#c7f300] transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={() => setActiveIndex((i) => (i! + 1) % images.length)}
            className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#c7f300] hover:text-[#171e00] hover:border-[#c7f300] transition-all cursor-pointer"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={images[activeIndex]}
            alt={`${name} — image ${activeIndex + 1}`}
            className="relative max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
          />

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-[var(--font-space-mono)] text-xs text-white/60 tracking-widest">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
