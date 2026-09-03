import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Compass,
  Building2,
  Cpu,
  Sparkles,
  Hammer,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Realmaxville offers end-to-end architectural design, structural engineering, turnkey construction, smart home automation, bespoke interiors, and full project management across Nigeria.",
};

const services = [
  {
    icon: Compass,
    num: "01",
    title: "Parametric Architectural Design",
    subtitle: "From concept to icon",
    description:
      "We sculpt architecturally iconic buildings through computational parametric design, generative BIM modeling, micro-climate analysis, and immersive 8K VR walkthroughs. Our designs don't just look extraordinary — they perform extraordinarily.",
    features: [
      "Generative Parametric Facade Design",
      "Micro-climate & Thermal Modeling",
      "8K Photorealistic VR Walkthroughs",
      "Structural Load Engineering Analysis",
    ],
    color: "copper",
  },
  {
    icon: Building2,
    num: "02",
    title: "Turnkey EPC Construction",
    subtitle: "Zero-tolerance structural delivery",
    description:
      "End-to-end project engineering from soil stabilization to rooftop systems. Our master engineers execute high-rise and ultra-luxury residential builds with ISO-certified precision, managing every phase of procurement and construction.",
    features: [
      "Post-Tensioned Concrete Engineering",
      "Heavy Steel Superstructure Systems",
      "ISO 9001 Quality Certification",
      "Full Procurement & Site Management",
    ],
    color: "emerald",
  },
  {
    icon: Cpu,
    num: "03",
    title: "Smart Estate & AI Automation",
    subtitle: "Built-in living intelligence",
    description:
      "Integrate a full smart nervous system into your property. Biometric perimeter security, kinetic motorized facades, neural HVAC systems, and a centralized control platform that makes your villa respond intelligently to your lifestyle.",
    features: [
      "Crestron / Savant Smart Control Hub",
      "Biometric Perimeter Security Systems",
      "Kinetic Motorized Glass & Shading",
      "AI Climate & Energy Management",
    ],
    color: "copper",
  },
  {
    icon: Sparkles,
    num: "04",
    title: "Bespoke Interior & Luxury Finishes",
    subtitle: "Artisanal craft at every surface",
    description:
      "Every interior surface is an opportunity for artistry. We source rare Italian Carrara marble, backlit onyx panels, and custom-crafted furniture to create living spaces that feel like private art installations.",
    features: [
      "Direct-Sourced Italian & Onyx Stone",
      "Architectural Lighting Scene Design",
      "Custom Furniture & Joinery Workshops",
      "Private Cinema & Wine Vault Design",
    ],
    color: "emerald",
  },
  {
    icon: Hammer,
    num: "05",
    title: "Architectural Renovation",
    subtitle: "Reimagined spaces, preserved character",
    description:
      "Transform existing structures into contemporary masterpieces. Our renovation specialists combine structural assessment expertise with fresh design vision to modernize properties while honouring their architectural heritage.",
    features: [
      "Structural Integrity Assessment",
      "Heritage Character Preservation",
      "Modern Systems Retrofit & Upgrade",
      "Minimal Disruption Project Delivery",
    ],
    color: "copper",
  },
  {
    icon: ClipboardList,
    num: "06",
    title: "Project & Site Management",
    subtitle: "End-to-end delivery excellence",
    description:
      "Comprehensive programme management from planning through handover. We coordinate all trades, manage stakeholder communications, monitor quality control daily, and ensure your project is delivered on time and within budget.",
    features: [
      "Daily Drone Site Progress Reporting",
      "Multi-trade Coordination & Scheduling",
      "Real-time Budget & Cost Control",
      "Client Dashboard & Communication",
    ],
    color: "emerald",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#080C10] min-h-screen">

        {/* Header */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 30% 60%, rgba(200,121,65,0.1) 0%, transparent 50%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-copper-500" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">Our Services</span>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-ivory-100 leading-[1.0] mb-6">
                Six disciplines. <br />
                <em className="text-copper-gradient font-semibold not-italic">One seamless team.</em>
              </h1>
              <p className="text-ivory-300/55 text-base leading-relaxed max-w-xl">
                From the first concept sketch to white-glove estate delivery — our integrated services eliminate the gaps that cause most construction projects to fail.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={srv.num}
                  className="group rounded-3xl bg-[#0D1117] border border-white/5 hover:border-copper-500/15 transition-all p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Number + Icon */}
                  <div className="lg:col-span-1 flex lg:flex-col items-center gap-4">
                    <span className="font-serif text-5xl font-light text-white/10 group-hover:text-copper-500/20 transition-colors leading-none">
                      {srv.num}
                    </span>
                    <div className={`p-3 rounded-2xl ${
                      srv.color === "copper"
                        ? "bg-copper-500/10 text-copper-400 group-hover:bg-copper-500 group-hover:text-[#080C10]"
                        : "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-[#080C10]"
                    } transition-all`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5">
                    <p className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${
                      srv.color === "copper" ? "text-copper-400" : "text-emerald-400"
                    }`}>
                      {srv.subtitle}
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ivory-100 mb-4 group-hover:text-copper-200 transition-colors">
                      {srv.title}
                    </h2>
                    <p className="text-ivory-300/55 text-sm leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-5">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ivory-400/40 mb-4">
                      What you get:
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {srv.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-ivory-300/70">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 ${
                            srv.color === "copper" ? "text-copper-400" : "text-emerald-400"
                          }`} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider transition-colors group/link ${
                        srv.color === "copper"
                          ? "text-copper-400 hover:text-copper-300"
                          : "text-emerald-400 hover:text-emerald-300"
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Commission This Service
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-[#0D1117] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-ivory-100 mb-4">
              Ready to start your <em className="text-copper-gradient font-semibold not-italic">project?</em>
            </h2>
            <p className="text-ivory-300/50 text-base mb-10 max-w-xl mx-auto leading-relaxed">
              Schedule a confidential consultation with our principals. We'll guide you from vision to a fully engineered, built reality.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-copper-500 text-[#080C10] font-semibold hover:bg-copper-400 transition-all hover:shadow-copper-glow hover:-translate-y-0.5"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
