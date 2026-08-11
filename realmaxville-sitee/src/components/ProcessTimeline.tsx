"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  Compass, 
  Layers, 
  FileCheck, 
  Building, 
  Key,
  ChevronRight
} from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Discovery & Site Topography Analysis",
      icon: Compass,
      duration: "Weeks 1 - 3",
      description: "Comprehensive site soil testing, sunlight orientation analysis, local zoning compliance, and conceptual client vision workshops.",
      deliverables: ["Geotechnical Soil Assessment", "3D Topographic Point Cloud", "Zoning Approval Roadmap", "Initial Aesthetic Moodboards"]
    },
    {
      number: "02",
      title: "3D Parametric BIM Design",
      icon: Layers,
      duration: "Weeks 4 - 8",
      description: "Generative parametric design modeling, micro-climate wind simulations, 8K photorealistic renders, and full VR walkthrough models.",
      deliverables: ["Full Architectural BIM Model", "VR Immersive Studio Walkthrough", "Structural Load Engineering", "Material Spec Book"]
    },
    {
      number: "03",
      title: "Regulatory Permits & Procurement",
      icon: FileCheck,
      duration: "Weeks 9 - 12",
      description: "Securing municipal building permits, structural engineering stamp certifications, and direct-sourcing rare stones & heavy steel.",
      deliverables: ["Approved Building Permits", "Fixed Price EPC Contract", "Global Material Supply Audit", "Site Logistics Plan"]
    },
    {
      number: "04",
      title: "Precision Construction & EPC",
      icon: Building,
      duration: "Months 4 - 18",
      description: "Ground excavation, deep pile foundation, steel superstructure erection, kinetic glass facade fitting, and interior craftsmanship.",
      deliverables: ["Daily Drone Progress Feeds", "ISO Structural Inspections", "MEP & Smart System Wiring", "Interior Finishes &Joinery"]
    },
    {
      number: "05",
      title: "White-Glove Turnkey Delivery",
      icon: Key,
      duration: "Handover",
      description: "Final air quality testing, smart automation system calibration, white-glove cleaning, and hand-delivering private cryptographic estate keys.",
      deliverables: ["10-Year Structural Guarantee", "As-Built Digital Twin BIM", "Concierge Maintenance Pass", "Cryptographic Estate Keys"]
    }
  ];

  return (
    <section className="py-24 bg-[#0A0C10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
            <span>Execution Methodology</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            THE 5-STAGE <span className="text-gold-gradient">LEGACY WORKFLOW</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            How we ensure zero engineering compromise from initial concept sketch to white-glove estate handover.
          </p>
        </div>

        {/* Step Numbers Bar */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-12">
          {steps.map((st, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={st.number}
                onClick={() => setActiveStep(idx)}
                className={`p-3 sm:p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between ${
                  isSelected
                    ? "bg-[#E6C687] text-black border-[#E6C687] shadow-gold-glow scale-105"
                    : "bg-white/5 text-gray-400 border-white/10 hover:text-white"
                }`}
              >
                <span className="font-mono text-xs font-bold uppercase">Stage</span>
                <span className="font-display font-extrabold text-2xl sm:text-3xl my-1">{st.number}</span>
                <span className="text-[10px] font-mono tracking-wider hidden sm:block">{st.duration}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Panel */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#E6C687]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#E6C687]/20 text-[#E6C687] border border-[#E6C687]/30">
                Stage {steps[activeStep].number} ({steps[activeStep].duration})
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {steps[activeStep].title}
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {steps[activeStep].description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono text-[#E6C687] uppercase tracking-wider">Key Stage Deliverables:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {steps[activeStep].deliverables.map((del, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00F5A0] shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-b from-[#13161F] to-[#0A0C10] border border-white/10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E6C687] text-black flex items-center justify-center shadow-gold-glow">
              {React.createElement(steps[activeStep].icon, { className: "w-8 h-8" })}
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-[#E6C687] uppercase">Stage Guarantee</span>
              <p className="text-sm font-semibold text-white">Formal Sign-off Required Before Next Phase</p>
            </div>

            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              Next Stage Preview
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
