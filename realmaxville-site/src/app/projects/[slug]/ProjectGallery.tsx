"use client";
import { useState, useEffect, useCallback, useRef } from "react";

interface Props {
  images: string[];
  name: string;
}

export default function ProjectGallery({ images, name }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-surface-container-lowest" aria-labelledby="gallery-heading">
      <div className="section-inner space-y-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 id="gallery-heading" className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-2">
              VISUAL ARTIFACTS
            </h2>
            <p className="text-[#b0b3b4] text-sm">{images.length} images</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#b0b3b4] hover:bg-[#FFD700] hover:text-[#1a1200] hover:border-[#FFD700] transition-all cursor-pointer"
              aria-label="Scroll gallery left"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#b0b3b4] hover:bg-[#FFD700] hover:text-[#1a1200] hover:border-[#FFD700] transition-all cursor-pointer"
              aria-label="Scroll gallery right"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal scroll gallery */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="group relative overflow-hidden rounded-lg shrink-0 w-[300px] md:w-[400px] aspect-[4/3] cursor-pointer snap-start bg-white/2"
              aria-label={`View image ${i + 1} of ${images.length}`}
            >
              <img
                src={img}
                alt={`${name} — image ${i + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity uppercase bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  VIEW DRAWING
                </span>
              </div>
              <div className="absolute bottom-3 right-3 font-(--font-space-mono) text-[9px] tracking-widest text-white/40">
                {String(i + 1).padStart(2, "0")}
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
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#1a1200] hover:border-[#FFD700] transition-all cursor-pointer"
            aria-label="Close lightbox"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={() => setActiveIndex((i) => (i! - 1 + images.length) % images.length)}
            className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#1a1200] hover:border-[#FFD700] transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={() => setActiveIndex((i) => (i! + 1) % images.length)}
            className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#1a1200] hover:border-[#FFD700] transition-all cursor-pointer"
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
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-(--font-space-mono) text-xs text-white/60 tracking-widest">
            {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </section>
  );
}
