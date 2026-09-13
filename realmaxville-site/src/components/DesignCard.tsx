"use client";
import Link from "next/link";
import { useCurrency } from "@/lib/currency-context";
import type { Design } from "@/lib/designs-data";

export default function DesignCard({ design }: { design: Design }) {
  const { formatPrice } = useCurrency();

  return (
    <Link href={`/designs/${design.slug}`} className="group block">
      <article className="glass-card rounded-xl overflow-hidden border border-white/5 hover:border-[#FFD700]/40 transition-all">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={design.cover}
            alt={`${design.name} architectural design`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-80" />

          {/* Price badge */}
          <div className="absolute top-4 right-4 bg-[#FFD700] text-[#1a1200] font-bold text-sm px-3 py-1 rounded-full shadow-lg">
            {formatPrice(design.priceUSD)}
          </div>

          {/* Type tag */}
          <div className="absolute bottom-4 left-4">
            <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700] bg-[#050505]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-[#FFD700]/25">
              {design.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3">
          <h3 className="text-lg font-bold text-[#e5e2e1] group-hover:text-[#FFD700] transition-colors">
            {design.name}
          </h3>

          {/* Specs */}
          <div className="flex items-center gap-4 text-sm text-[#b0b3b4]">
            {design.beds > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" /></svg>
                {design.beds} Bed
              </span>
            )}
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {design.baths} Bath
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              {design.area}
            </span>
          </div>

          <p className="text-[#b0b3b4] text-sm leading-relaxed line-clamp-2">
            {design.description}
          </p>

          {/* View button */}
          <div className="flex items-center gap-2 text-[#FFD700] font-(--font-space-mono) text-[11px] tracking-[0.15em] uppercase mt-1">
            View Design
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
