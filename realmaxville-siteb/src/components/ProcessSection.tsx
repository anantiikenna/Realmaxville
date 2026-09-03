"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Clock } from "lucide-react";

const steps = [
  {
    num: "01",
    phase: "Discovery",
    duration: "Weeks 1–3",
    title: "Site Analysis & Vision Workshop",
    description:
      "We begin every project with a comprehensive site topography assessment, geotechnical soil study, zoning compliance audit, and a collaborative client vision workshop to align on aesthetic intent.",
    deliverables: [
      "Geotechnical Soil Assessment Report",
      "3D Topographic Point Cloud Survey",
      "Zoning Compliance & Approval Roadmap",
      "Aesthetic Moodboard & Concept Brief",
    ],
  },
  {
    num: "02",
    phase: "Design",
    duration: "Weeks 4–8",
    title: "Parametric BIM Modeling & Renders",
    description:
      "Our architects generate the full 3D parametric BIM model, run structural load and micro-climate simulations, and produce photorealistic 8K renders and immersive VR walkthroughs.",
    deliverables: [
      "Complete Architectural BIM Model",
      "VR Immersive Studio Walkthrough",
      "Structural Load Engineering Report",
      "Material Specification Book",
    ],
  },
  {
    num: "03",
    phase: "Permits",
    duration: "Weeks 9–12",
    title: "Regulatory Approvals & Procurement",
    description:
      "We navigate the municipal permitting process, secure structural engineering certifications, and establish the full global procurement supply chain for materials and specialist trades.",
    deliverables: [
      "Municipal Building Permit Certificates",
      "Fixed-Price EPC Contract",
      "Global Material Supply Audit",
      "Site Logistics & Safety Plan",
    ],
  },
  {
    num: "04",
    phase: "Build",
    duration: "Months 4–18",
    title: "Precision EPC Construction",
    description:
      "Ground excavation, deep pile foundations, steel superstructure erection, curtain wall facade installation, MEP systems, and bespoke interior craftsmanship — all under daily engineering supervision.",
    deliverables: [
      "Daily Drone Progress Documentation",
      "ISO Structural Safety Inspections",
      "MEP & Smart Systems Integration",
      "Interior Finishes & Custom Joinery",
    ],
  },
  {
    num: "05",
    phase: "Handover",
    duration: "Final Phase",
    title: "White-Glove Estate Delivery",
    description:
      "Air quality and smart system commissioning, white-glove final clean, official handover documentation, and the private delivery of your digital estate keys alongside a 10-year structural guarantee.",
    deliverables: [
      "10-Year Structural Guarantee Certificate",
      "As-Built Digital Twin BIM Archive",
      "Concierge Maintenance Programme",
      "Cryptographic Estate Key Ceremony",
    ],
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-[#0D1117] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-64 bg-gradient-to-b from-copper-500/0 via-copper-500/60 to-copper-500/0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-copper-500" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">
              Our Process
            </span>
            <div className="h-px w-10 bg-copper-500" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-ivory-100 leading-[1.05] mb-4">
            Five stages to a{" "}
            <em className="text-copper-gradient font-semibold not-italic">perfect build.</em>
          </h2>
          <p className="text-ivory-300/55 text-base leading-relaxed">
            A rigorous, stage-gated methodology that guarantees engineering excellence and zero compromise — from soil to skyline.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex items-stretch gap-0 mb-12 rounded-2xl overflow-hidden border border-white/5 bg-[#080C10]">
          {steps.map((step, idx) => (
            <button
              key={step.num}
              onClick={() => setActive(idx)}
              className={`flex-1 p-4 sm:p-5 text-center transition-all duration-300 border-r border-white/5 last:border-r-0 cursor-pointer group ${
                active === idx
                  ? "bg-copper-500 text-[#080C10]"
                  : "text-ivory-400/50 hover:bg-white/[0.03] hover:text-ivory-100"
              }`}
            >
              <div className={`font-serif text-2xl sm:text-3xl font-semibold mb-1 ${active === idx ? "text-[#080C10]" : ""}`}>
                {step.num}
              </div>
              <div className={`font-mono text-[10px] uppercase tracking-widest ${active === idx ? "text-[#080C10]/70" : "text-ivory-400/40"}`}>
                {step.phase}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Detail */}
        <div className="glass-slate rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-xs text-copper-400 uppercase tracking-wider">
                Stage {steps[active].num}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-ivory-400/40 font-mono">
                <Clock className="w-3.5 h-3.5" />
                {steps[active].duration}
              </div>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-ivory-100 leading-tight mb-5">
              {steps[active].title}
            </h3>

            <p className="text-ivory-300/60 text-base leading-relaxed mb-8">
              {steps[active].description}
            </p>

            <button
              onClick={() => setActive((active + 1) % steps.length)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-copper-500/30 text-copper-400 text-sm font-medium hover:bg-copper-500/10 transition-all cursor-pointer"
            >
              Next Stage
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-500 mb-5">
              Stage Deliverables
            </h4>
            <ul className="space-y-3">
              {steps[active].deliverables.map((del, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-ivory-300/70"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  {del}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/15 text-xs font-mono text-emerald-400">
              ✓ Formal client sign-off required before advancing to the next stage.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
