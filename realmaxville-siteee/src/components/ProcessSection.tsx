"use client";

import { ClipboardCheck, Compass, HardHat, Ruler } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Discovery",
    description:
      "We listen to your vision, assess the site, and define the project scope with clarity.",
  },
  {
    icon: Ruler,
    title: "Design",
    description:
      "Concept development, 3D visualization, and detailed architectural documentation.",
  },
  {
    icon: ClipboardCheck,
    title: "Approvals",
    description:
      "Regulatory compliance, permits, and stakeholder sign-offs before breaking ground.",
  },
  {
    icon: HardHat,
    title: "Delivery",
    description:
      "Precision construction, quality control, and handover of your finished landmark.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#10120f] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#99f0df]">
            Our Process
          </p>
          <h2 className="mt-3 font-display text-4xl font-black leading-tight sm:text-5xl">
            From vision to landmark.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full glass-gold">
                  <Icon className="h-7 w-7 text-[#f2c46d]" />
                </div>
                <div className="mt-2 text-xs font-bold text-white/30">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-xl font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+40px)] top-8 hidden h-px w-[calc(100%-80px)] bg-white/10 lg:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
