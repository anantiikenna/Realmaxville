import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Shield,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Realmaxville's founding story, core values, and the multidisciplinary team of architects, engineers, and project managers shaping Nigeria's built landscape.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Design Innovation",
    desc: "We push computational boundaries with parametric design and generative modeling — creating buildings that haven't been seen before.",
    color: "copper",
  },
  {
    icon: Shield,
    title: "Engineering Integrity",
    desc: "Zero-tolerance structural quality. Every joint, beam, and foundation is engineered to exceed code and stand for generations.",
    color: "emerald",
  },
  {
    icon: HeartHandshake,
    title: "Client Partnership",
    desc: "We don't just build for clients — we build with them. Every project is a relationship built on transparency, trust, and deep listening.",
    color: "copper",
  },
  {
    icon: Globe2,
    title: "Sustainable Legacy",
    desc: "Each Realmaxville project is designed with passive climate strategies, locally sourced materials, and a long-term environmental conscience.",
    color: "emerald",
  },
];

const milestones = [
  { year: "2009", event: "Realmaxville founded by Uche Uchendu in Lagos" },
  { year: "2013", event: "First commercial project delivered — Transient Healthcare Complex, Enugu" },
  { year: "2017", event: "Smart estate division launched with AI automation capabilities" },
  { year: "2020", event: "Expanded to Abuja — Mabushi Villa wins design excellence award" },
  { year: "2022", event: "Kaduna Conference Centre — Largest civic project to date (2,500 m²)" },
  { year: "2024", event: "50th project milestone. Portfolio exceeds ₦50Bn in total value" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#080C10] min-h-screen">

        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background:
                "radial-gradient(ellipse at 20% 50%, rgba(200,121,65,0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,200,150,0.06) 0%, transparent 40%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-copper-500" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">About Realmaxville</span>
                </div>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-ivory-100 leading-[1.0] mb-6">
                  Built on <br />
                  <em className="text-copper-gradient font-semibold not-italic">passion</em> <br />
                  & precision.
                </h1>
                <p className="text-ivory-300/55 text-base leading-relaxed mb-8 max-w-lg">
                  Realmaxville was founded in Lagos with a singular mission: to transform Nigeria's architectural landscape through world-class design, structural engineering mastery, and an unwavering commitment to client vision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-copper-500 text-[#080C10] font-semibold text-sm hover:bg-copper-400 transition-all hover:shadow-copper-glow"
                  >
                    View Portfolio <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-ivory-300/70 text-sm hover:border-copper-500/40 hover:text-ivory-100 transition-all"
                  >
                    Start a Project
                  </Link>
                </div>
              </div>

              {/* Stats Block */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: Building2, val: "50+", label: "Projects Completed", color: "copper" },
                  { icon: Award, val: "15+", label: "Years of Excellence", color: "emerald" },
                  { icon: Users, val: "4", label: "Expert Directors", color: "copper" },
                  { icon: Globe2, val: "6", label: "Cities Nationwide", color: "emerald" },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="p-6 rounded-2xl bg-[#0D1117] border border-white/5 hover:border-copper-500/15 transition-all"
                    >
                      <div className={`p-2.5 rounded-xl w-fit mb-4 ${
                        stat.color === "copper"
                          ? "bg-copper-500/10 text-copper-400"
                          : "bg-emerald-500/10 text-emerald-400"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <p className="font-serif text-4xl font-semibold text-ivory-100 mb-1">{stat.val}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-ivory-400/40">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-[#0D1117] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image collage */}
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/projects/kaduna-conference-center.jpg"
                    alt="Realmaxville Kaduna Conference Centre"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/60 to-transparent" />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-5 -right-5 glass-copper p-5 rounded-2xl max-w-56 border border-copper-500/20">
                  <p className="font-serif text-3xl font-semibold text-ivory-100">₦50Bn+</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-copper-400 mt-1">Total Project Value Delivered</p>
                </div>
              </div>

              {/* Story text */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-emerald-500" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">Our Story</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory-100 leading-[1.1] mb-6">
                  From a Lagos studio to <br />
                  <em className="text-copper-gradient font-semibold not-italic">Nigeria's premier</em> <br />
                  design-build firm.
                </h2>
                <div className="space-y-4 text-ivory-300/55 text-sm leading-relaxed">
                  <p>
                    Realmaxville was born in 2009 from a belief that Nigeria deserved world-class architecture — buildings that could compete on the global stage in both aesthetic ambition and engineering rigor.
                  </p>
                  <p>
                    What began as a small design studio in Lagos quickly grew into a full-spectrum architecture, engineering, and construction firm, driven by a multidisciplinary team of passionate professionals. From the Transient Healthcare Complex in Enugu to the glass-curtain Danke Gott Project Jade in Lagos, each commission has deepened our mastery.
                  </p>
                  <p>
                    Today, with over 50 completed projects across six Nigerian cities and a portfolio exceeding ₦50 billion in total construction value, Realmaxville is redefining what is possible in African architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#080C10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-copper-500" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">Our Values</span>
                <div className="h-px w-10 bg-copper-500" />
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-ivory-100">
                What drives <em className="text-copper-gradient font-semibold not-italic">every decision.</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-6 rounded-2xl bg-[#0D1117] border border-white/5 hover:border-copper-500/15 transition-all group"
                  >
                    <div className={`p-3 rounded-xl w-fit mb-5 transition-all group-hover:scale-110 ${
                      val.color === "copper"
                        ? "bg-copper-500/10 text-copper-400"
                        : "bg-emerald-500/10 text-emerald-400"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-ivory-100 mb-2 group-hover:text-copper-300 transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-xs text-ivory-300/50 leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-[#0D1117] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-emerald-500" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">Timeline</span>
                <div className="h-px w-10 bg-emerald-500" />
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-ivory-100">
                Our <em className="text-emerald-gradient font-semibold not-italic">milestones.</em>
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-copper-500/60 via-copper-500/20 to-transparent" />

              <div className="space-y-8">
                {milestones.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-8 group">
                    {/* Dot */}
                    <div className="relative shrink-0 w-16">
                      <div className="w-4 h-4 rounded-full bg-copper-500 border-2 border-[#0D1117] shadow-copper-glow group-hover:scale-125 transition-transform" />
                    </div>
                    <div className="pb-8 flex-1">
                      <span className="font-mono text-xs text-copper-400 uppercase tracking-widest">{m.year}</span>
                      <p className="text-ivory-300/70 text-sm mt-1 leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team CTA */}
        <section className="py-20 bg-[#080C10] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Zap className="w-10 h-10 text-copper-400 mx-auto mb-6" />
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-ivory-100 mb-4">
              Ready to build <em className="text-copper-gradient font-semibold not-italic">your legacy?</em>
            </h2>
            <p className="text-ivory-300/50 text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Our team of architects, structural engineers, and project managers is ready to transform your vision into a masterpiece.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-copper-500 text-[#080C10] font-semibold hover:bg-copper-400 transition-all hover:shadow-copper-glow hover:-translate-y-0.5"
            >
              Commission Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
