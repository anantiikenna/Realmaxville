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
  User,
  Building2,
  ShieldCheck,
} from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const allImages = [project.image, ...project.gallery.filter((g) => g !== project.image)].filter(Boolean);

  return (
    <>
      <Navbar />
      <main className="bg-[#080C10] min-h-screen">

        {/* Cinematic Hero */}
        <section className="relative min-h-[80vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={allImages[0]}
              alt={project.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080C10] via-[#080C10]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080C10]/60 via-transparent to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-16 w-full">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-ivory-300/60 hover:text-copper-400 transition-colors text-xs font-mono uppercase tracking-wider mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              All Projects
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              {/* Title area */}
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest bg-copper-500 text-[#080C10] font-bold">
                    {project.type}
                  </span>
                  <span className="text-xs text-ivory-400/40 font-mono">{project.year}</span>
                  <span className="flex items-center gap-1 text-xs text-ivory-400/40 font-mono">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {project.location}
                  </span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ivory-100 leading-[1.05] mb-4">
                  {project.name}
                </h1>
                <p className="text-ivory-300/60 text-base sm:text-lg leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>

              {/* Specs card */}
              <div className="glass-slate border border-copper-500/15 rounded-2xl p-6 w-full lg:w-72 shrink-0 space-y-4">
                {[
                  { label: "Year", value: project.year, Icon: Calendar },
                  { label: "Type", value: project.type, Icon: Building2 },
                  { label: "Floor Area", value: project.area, Icon: Maximize2 },
                  { label: "Client", value: project.client, Icon: User },
                  { label: "Architect", value: project.architect, Icon: ShieldCheck },
                ].map(({ label, value, Icon }) => (
                  <div key={label} className="flex items-center gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <Icon className="w-4 h-4 text-copper-400/60 shrink-0" />
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-ivory-400/30 block">{label}</span>
                      <span className="text-sm text-ivory-100 font-medium">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Description + Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-copper-500" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">Project Overview</span>
              </div>
              <p className="text-ivory-300/70 text-base leading-relaxed mb-5">
                {project.description}
              </p>
              <p className="text-ivory-300/50 text-sm leading-relaxed">
                {project.details}
              </p>
            </div>

            {/* Features */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-emerald-500" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">Key Features</span>
              </div>
              <div className="space-y-3">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#0D1117] border border-white/5 hover:border-emerald-500/15 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-ivory-300/70">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Status badge */}
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Status: {project.status}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        {allImages.length > 1 && (
          <section className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-copper-500" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">Project Gallery</span>
              </div>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto snap-x snap-mandatory">
              {allImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-80 sm:h-96 min-w-[320px] sm:min-w-[440px] rounded-2xl overflow-hidden border border-white/5 snap-center shrink-0 group"
                >
                  <Image
                    src={img}
                    alt={`${project.name} — view ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="440px"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Next Project */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="glass-slate p-8 rounded-3xl border border-white/5 hover:border-copper-500/25 transition-all group flex items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-copper-400 flex items-center gap-1">
                Next Project <ArrowRight className="w-3 h-3" />
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ivory-100 group-hover:text-copper-300 transition-colors">
                {nextProject.name}
              </h3>
              <p className="text-xs font-mono text-ivory-400/40 uppercase tracking-wider">{nextProject.type}</p>
            </div>
            <div className="w-14 h-14 rounded-full bg-copper-500 text-[#080C10] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-copper-400 transition-all shadow-copper-glow">
              <ArrowRight className="w-6 h-6" />
            </div>
          </Link>
        </div>

        {/* Back */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-ivory-400/40 hover:text-copper-400 transition-colors text-xs font-mono uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}
