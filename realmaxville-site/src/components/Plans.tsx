"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import ScrollReveal from "./ScrollReveal";
import { Plan, PaginatedResponse } from "@/lib/types";

const PAGE_SIZE = 9;

const fallbackPlans: (Plan & { _fallback?: boolean })[] = [
  { id: "1", name: "MODERN VILLA PLAN", slug: "modern-villa-plan", type: "Residential", beds: 4, baths: 3, sqft: 3200, price: 250000, est_build_cost: "₦15M+", description: "Contemporary 4-bedroom villa with open-plan living, private pool, and landscaped garden.", features: ["4 Bedrooms", "3 Bathrooms", "Double Garage", "Pool Area", "Smart Home"], sku: "RMV-2024-VR", image_url: null, gallery_urls: [], pdf_url: null, is_published: true, created_at: "", updated_at: "", _fallback: true },
  { id: "2", name: "URBAN APARTMENT COMPLEX", slug: "urban-apartment-complex", type: "Commercial", beds: 12, baths: 12, sqft: 8500, price: 750000, est_build_cost: "₦45M+", description: "12-unit apartment block with modern amenities, parking, and communal spaces.", features: ["12 Units", "Parking Garage", "Elevator", "Security", "Generator"], sku: "RMV-2024-UC", image_url: null, gallery_urls: [], pdf_url: null, is_published: true, created_at: "", updated_at: "", _fallback: true },
  { id: "3", name: "EXECUTIVE DUPLEX", slug: "executive-duplex", type: "Residential", beds: 5, baths: 4, sqft: 4100, price: 350000, est_build_cost: "₦22M+", description: "Luxury 5-bedroom duplex with study, cinema room, and servant quarters.", features: ["5 Bedrooms", "Cinema Room", "Study", "Maid's Quarters", "BQ"], sku: "RMV-2024-ED", image_url: null, gallery_urls: [], pdf_url: null, is_published: true, created_at: "", updated_at: "", _fallback: true },
  { id: "4", name: "COMMERCIAL OFFICE BLOCK", slug: "commercial-office-block", type: "Commercial", beds: 0, baths: 8, sqft: 12000, price: 1200000, est_build_cost: "₦85M+", description: "Multi-story office building with conference rooms, parking, and retail space.", features: ["5 Floors", "Conference Hall", "Retail Space", "Underground Parking", "Fiber"], sku: "RMV-2024-CO", image_url: null, gallery_urls: [], pdf_url: null, is_published: true, created_at: "", updated_at: "", _fallback: true },
  { id: "5", name: "TERRACE HOUSES", slug: "terrace-houses", type: "Multi-Family", beds: 3, baths: 3, sqft: 2800, price: 450000, est_build_cost: "₦28M+", description: "Set of 4 terraced houses with shared amenities and private gardens.", features: ["3 Bedrooms Each", "Private Garden", "Shared Pool", "24/7 Security", "Estate"], sku: "RMV-2024-TH", image_url: null, gallery_urls: [], pdf_url: null, is_published: true, created_at: "", updated_at: "", _fallback: true },
  { id: "6", name: "HOSPITALITY RESORT", slug: "hospitality-resort", type: "Commercial", beds: 20, baths: 20, sqft: 25000, price: 3500000, est_build_cost: "₦250M+", description: "Boutique resort with 20 rooms, restaurant, spa, and conference facility.", features: ["20 Rooms", "Restaurant", "Spa & Gym", "Conference Hall", "Pool"], sku: "RMV-2024-HR", image_url: null, gallery_urls: [], pdf_url: null, is_published: true, created_at: "", updated_at: "", _fallback: true },
];

function formatPrice(naira: number): string {
  return "₦" + naira.toLocaleString("en-NG");
}

interface Props {
  initialPlans?: Plan[];
  initialTypes?: string[];
  hasDb?: boolean;
}

export default function Plans({ initialPlans, initialTypes, hasDb = false }: Props) {
  const [plans, setPlans] = useState<Plan[]>(hasDb && initialPlans?.length ? initialPlans : fallbackPlans);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Plan | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const types = hasDb && initialTypes?.length ? initialTypes : ["All", "Residential", "Commercial", "Multi-Family"];

  const fetchPlans = useCallback(async (pageNum: number, type: string, append = false) => {
    if (!hasDb) return;
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(pageNum) });
      if (type !== "All") params.set("type", type);

      const res = await fetch(`/api/plans?${params}`);
      const result: PaginatedResponse<Plan> = await res.json();

      setPlans((prev) => append ? [...prev, ...result.data] : result.data);
      setHasMore(pageNum < result.totalPages);
    } catch {
      // fallback data already set
    }
    setLoading(false);
  }, [hasDb]);

  useEffect(() => {
    if (!hasDb) return;
    setPage(1);
    fetchPlans(1, filter, false);
  }, [filter, hasDb, fetchPlans]);

  useEffect(() => {
    if (!hasDb || !sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !loading) {
          const nextPage = page + 1;
          setPage(nextPage);
          fetchPlans(nextPage, filter, true);
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, loading, page, filter, hasDb, fetchPlans]);

  const closeModal = useCallback(() => {
    setSelected(null);
    document.body.classList.remove("modal-open");
  }, []);

  useEffect(() => {
    if (selected) {
      document.body.classList.add("modal-open");
      closeRef.current?.focus();
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
        if (e.key === "Tab" && modalRef.current) {
          const focusable = modalRef.current.querySelectorAll<HTMLElement>("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      };
      document.addEventListener("keydown", handleKey);
      return () => { document.removeEventListener("keydown", handleKey); document.body.classList.remove("modal-open"); };
    }
  }, [selected, closeModal]);

  const handleFilterChange = (t: string) => {
    setFilter(t);
    setPlans([]);
    setPage(1);
    setHasMore(true);
  };

  return (
    <section className="site-container" style={{ paddingTop: "6rem", paddingBottom: "6rem" }} aria-labelledby="plans-heading">
      <ScrollReveal>
        <div className="text-center space-y-4 mb-16">
          <h2 id="plans-heading" className="text-4xl md:text-[48px] font-extrabold uppercase tracking-tight">
            AVAILABLE PLANS
          </h2>
          <p className="text-[#b0b3b4] max-w-2xl mx-auto">
            Purchase architectural and structural plans for your next building project.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-16" role="group" aria-label="Filter plans by type">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => handleFilterChange(t)}
              aria-pressed={filter === t}
              className={`px-6 py-2.5 rounded-full font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] uppercase transition-all duration-300 active:scale-95 min-h-[44px] flex items-center ${
                filter === t
                  ? "bg-[#c7f300] text-[#171e00] font-bold"
                  : "bg-white/5 text-[#c4c7c7] hover:bg-white/10 hover:text-[#c7f300] border border-[#c7f300]/20"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <ScrollReveal key={`${plan.id}-${i}`} delay={Math.min(i * 100, 500)}>
            <div className="glass-panel group flex flex-col rounded-2xl overflow-hidden cyber-border h-full">
              <div className="relative h-56 overflow-hidden blueprint-grid">
                {plan.image_url ? (
                  <img src={plan.image_url} alt={plan.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" loading="lazy" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity" aria-hidden="true">
                        {plan.type === "Residential" ? "🏠" : plan.type === "Commercial" ? "🏢" : "🏬"}
                      </span>
                    </div>
                  </>
                )}
                <div className="absolute top-4 left-4 bg-[#c7f300]/10 backdrop-blur-md px-3 py-1 rounded-full border border-[#c7f300]/20">
                  <span className="font-[var(--font-space-mono)] text-[10px] tracking-[0.1em] text-[#c7f300]">{plan.type.toUpperCase()}</span>
                </div>
              </div>

              <div className="p-8 flex flex-col gap-6 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-[#e5e2e1] group-hover:text-[#c7f300] transition-colors">
                      {plan.name}
                    </h3>
                    <p className="font-[var(--font-space-mono)] text-[10px] text-[#8e9192] mt-1">SKU: {plan.sku}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-[#c7f300]">{formatPrice(plan.price)}</span>
                    <p className="font-[var(--font-space-mono)] text-[10px] text-[#8e9192]">BLUEPRINT</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-4" role="list">
                  {plan.beds > 0 && (
                    <div className="flex flex-col items-center border-r border-white/5" role="listitem">
                      <span className="text-[#c7f300] text-sm" aria-hidden="true">🛏</span>
                      <span className="font-[var(--font-space-mono)] text-[10px] text-[#e5e2e1] mt-1">{plan.beds} BED</span>
                    </div>
                  )}
                  <div className="flex flex-col items-center border-r border-white/5" role="listitem">
                    <span className="text-[#c7f300] text-sm" aria-hidden="true">🚿</span>
                    <span className="font-[var(--font-space-mono)] text-[10px] text-[#e5e2e1] mt-1">{plan.baths} BATH</span>
                  </div>
                  <div className="flex flex-col items-center" role="listitem">
                    <span className="text-[#c7f300] text-sm" aria-hidden="true">📐</span>
                    <span className="font-[var(--font-space-mono)] text-[10px] text-[#e5e2e1] mt-1">{plan.sqft.toLocaleString()} SQFT</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2" role="list">
                  {plan.features.slice(0, 3).map((f) => (
                    <span key={f} role="listitem" className="px-2 py-1 rounded bg-white/5 font-[var(--font-space-mono)] text-[10px] text-[#8e9192]">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <span className="font-[var(--font-space-mono)] text-[10px] text-[#8e9192] block">EST. BUILD COST</span>
                    <span className="text-sm font-bold text-[#c7f300]">{plan.est_build_cost}</span>
                  </div>
                  <button
                    onClick={() => setSelected(plan)}
                    className="bg-white text-black px-6 py-3 rounded-xl font-[var(--font-space-mono)] text-[12px] tracking-[0.1em] hover:bg-[#c7f300] transition-colors active:scale-95 flex items-center gap-2"
                    aria-label={`View details for ${plan.name}`}
                  >
                    VIEW DETAILS
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Infinite scroll sentinel */}
      {hasDb && (
        <>
          <div ref={sentinelRef} className="h-4" aria-hidden="true" />
          {loading && (
            <div className="flex justify-center py-12">
              <div className="flex items-center gap-3 text-[#8e9192]">
                <div className="w-5 h-5 border-2 border-[#c7f300]/30 border-t-[#c7f300] rounded-full animate-spin" />
                <span className="font-[var(--font-space-mono)] text-xs tracking-wider">LOADING MORE PLANS...</span>
              </div>
            </div>
          )}
          {!hasMore && plans.length > 0 && (
            <div className="text-center py-12">
              <p className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#8e9192]">
                ALL {plans.length} PLANS LOADED
              </p>
            </div>
          )}
        </>
      )}

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div ref={modalRef} className="bg-[#131313] rounded-2xl border border-[#c7f300]/20 max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 id="modal-title" className="text-xl font-bold text-[#e5e2e1]">{selected.name}</h3>
              <button
                ref={closeRef}
                onClick={closeModal}
                className="text-[#b0b3b4] hover:text-[#e5e2e1] text-xl w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            {selected.image_url && (
              <img src={selected.image_url} alt={selected.name} className="w-full h-48 object-cover rounded-xl mb-6" />
            )}

            <div className="h-32 rounded-xl blueprint-grid bg-[#0e0e0e] mb-6 flex items-center justify-center">
              <span className="text-3xl font-bold text-[#c7f300]/30">{formatPrice(selected.price)}</span>
            </div>
            <p className="text-sm text-[#b0b3b4] mb-8">{selected.description}</p>
            <div className="space-y-3 mb-8" role="list">
              {selected.features.map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm text-[#c4c7c7]" role="listitem">
                  <span className="w-5 h-5 rounded-full bg-[#c7f300]/20 flex items-center justify-center text-[#c7f300] text-xs" aria-hidden="true">✓</span>
                  {f}
                </div>
              ))}
            </div>
            <div className="mb-8 p-4 rounded-xl bg-white/5 border border-[#c7f300]/10">
              <p className="text-xs text-[#8e9192]">Includes: Architectural drawings, Structural plans, Electrical layout, Plumbing diagrams, Bill of Quantities</p>
            </div>
            <button className="w-full py-4 rounded-xl bg-[#c7f300] text-[#171e00] font-bold font-[var(--font-space-mono)] text-sm tracking-[0.1em] hover:shadow-[0_0_20px_rgba(199,243,0,0.3)] transition-all active:scale-[0.98]">
              PAY {formatPrice(selected.price)} — PURCHASE NOW
            </button>
            <p className="mt-3 text-center font-[var(--font-space-mono)] text-[10px] text-[#8e9192]">SECURE PAYMENT · INSTANT DOWNLOAD · SUPPORT INCLUDED</p>
          </div>
        </div>
      )}
    </section>
  );
}
