import { projects, getProjectBySlug } from "@/lib/projects-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Calendar,
  Maximize2,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Building2,
  User,
} from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: `${project.name} — Realmaxville`, description: project.description };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  const allImages = [project.image, ...project.gallery.filter((g) => g !== project.image)].filter(Boolean);

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-24 bg-[#07080A] min-h-screen">

        {/* ── Cinematic Hero ── */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={allImages[0]}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/60 to-[#07080A]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07080A]/70 via-transparent to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 pt-32 w-full">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#E6C687]/70 hover:text-[#E6C687] transition-colors text-xs font-mono uppercase tracking-wider mb-10"
            >
              <ArrowLeft className="w-4 h-4" /> All Projects
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#E6C687] text-black font-bold shadow-gold-glow">
                    {project.type}
                  </span>
                  <span className="text-sm text-gray-400 font-mono">{project.year}</span>
                </div>
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                  {project.name}
                </h1>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>

              <div className="glass-panel border border-[#E6C687]/30 rounded-2xl p-6 w-full lg:w-72 shrink-0 space-y-4">
                {[
                  { label: "YEAR", value: project.year, icon: Calendar },
                  { label: "TYPE", value: project.type, icon: Building2 },
                  { label: "AREA", value: project.area, icon: Maximize2 },
                  { label: "CLIENT", value: project.client, icon: User },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <Icon className="w-4 h-4 text-[#E6C687] shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 block">{label}</span>
                      <span className="text-sm text-white font-medium">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Description & Features ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Description */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Project Overview</span>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                {project.description}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.details}
              </p>
            </div>

            {/* Right — Features */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-white">Key Features</h3>
              <div className="space-y-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#E6C687] shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Gallery ── */}
        {allImages.length > 1 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <h3 className="font-display font-bold text-xl text-white mb-6">Project Gallery</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
              {allImages.map((img, idx) => (
                <div key={idx} className="relative h-72 sm:h-96 min-w-[300px] sm:min-w-[400px] rounded-2xl overflow-hidden border border-white/10 snap-center shrink-0">
                  <img
                    src={img}
                    alt={`${project.name} — view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Next Project ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-[#E6C687]/40 transition-all group flex items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider flex items-center gap-1">
                Next Project <ArrowRight className="w-3 h-3" />
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-[#E6C687] transition-colors">
                {nextProject.name}
              </h3>
              <span className="text-xs font-mono text-gray-400">{nextProject.type}</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-[#E6C687] text-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-gold-glow">
              <ArrowRight className="w-6 h-6" />
            </div>
          </Link>
        </div>

        {/* ── Back to Projects ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#E6C687]/70 hover:text-[#E6C687] transition-colors text-xs font-mono uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Projects
          </Link>
        </div>

      </div>
      <Footer />
    </>
  );
}
