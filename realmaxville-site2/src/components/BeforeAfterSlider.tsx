"use client";

import React, { useState, useRef } from "react";
import { Sparkles, MoveHorizontal, Layers, Eye } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-24 bg-[#0A0C10] relative overflow-hidden border-t border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Architectural Reality</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            FROM 3D PARAMETRIC RENDER TO <span className="text-gold-gradient">PHYSICAL MASTERPIECE</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Drag the interactive slider below to witness how our structural engineers turn hyper-detailed 3D digital wireframes into breathtaking built luxury reality with zero compromise on precision.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative h-[450px] sm:h-[600px] w-full rounded-3xl overflow-hidden border border-[#E6C687]/30 shadow-2xl select-none cursor-ew-resize"
        >
          {/* AFTER IMAGE (Physical Reality) - Base layer */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/images/projects/mrs-margaret.jpg"
              alt="Built Physical Masterpiece"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-[#00F5A0]/40 text-[#00F5A0] text-xs font-mono uppercase tracking-wider flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#00F5A0]" />
              <span>Built Physical Reality</span>
            </div>
          </div>

          {/* BEFORE IMAGE (3D Wireframe CAD) - Overlay Layer clipped by sliderPos */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="/images/projects/double-face-home.jpg"
              alt="3D Parametric Wireframe"
              className="w-full h-full object-cover filter contrast-125 saturate-50 brightness-90 hue-rotate-180"
            />
            <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-[#E6C687]/40 text-[#E6C687] text-xs font-mono uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E6C687]" />
              <span>3D CAD Wireframe Concept</span>
            </div>
          </div>

          {/* Slider Vertical Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#E6C687] via-white to-[#E6C687] z-30 shadow-[0_0_15px_#E6C687]"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Center Slider Handle Button */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#E6C687] text-black border-4 border-[#0E1015] flex items-center justify-center shadow-gold-glow">
              <MoveHorizontal className="w-6 h-6 animate-pulse" />
            </div>
          </div>

        </div>

        {/* Footer info banner */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0] animate-ping" />
            <span>Project Featured: The Grand Solstice Villa (Ikoyi, Lagos)</span>
          </div>
          <div>
            <span>Tolerance Margin: <strong className="text-white">&lt; 0.5mm structural variance</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
}
