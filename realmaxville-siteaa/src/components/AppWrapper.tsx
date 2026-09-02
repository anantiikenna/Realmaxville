"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CostEstimator from "./CostEstimator";
import { X } from "lucide-react";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isEstimatorModalOpen, setIsEstimatorModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-[#07080A]">
      <Navbar onOpenEstimator={() => setIsEstimatorModalOpen(true)} />
      
      <main className="grow">
        {children}
      </main>

      <Footer />

      {/* Global Cost Estimator Modal overlay if triggered via Navbar button */}
      {isEstimatorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#07080A] rounded-3xl border border-[#E6C687]/40 p-4 sm:p-6 shadow-2xl">
            <button
              onClick={() => setIsEstimatorModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:text-[#E6C687] border border-white/10"
              aria-label="Close estimator"
            >
              <X className="w-5 h-5" />
            </button>

            <CostEstimator />
          </div>
        </div>
      )}
    </div>
  );
}
