import { projects, getProjectBySlug } from "@/lib/projects-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
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
  Phone
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
                { label: "LOCATION", value: project.location, icon: MapPin },
                { label: "AREA", value: project.area, icon: Maximize2 },
                { label: "CLIENT", value: project.client, icon: Building2 },
                { label: "STATUS", value: project.status, icon: CheckCircle2 },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <Icon className="w-4 h-4 text-[#E6C687] shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 block">{label}</span>
                    <span className="text-sm text-white font-medium">{value}</span>
                  </div>
                </div>
              ))}
              <div className="pt-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00F5A0] animate-ping" />
                <span className="text-[10px] font-mono text-[#00F5A0] uppercase tracking-wider">
                  Project Complete
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Overview ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Project Overview</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                About This Project
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                {project.description}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.details}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-white">Key Engineering Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#E6C687] shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {allImages.length > 1 && (
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-white">Project Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {allImages.map((img, idx) => (
                    <div key={idx} className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10">
                      <img
                        src={img}
                        alt={`${project.name} gallery image ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-[#E6C687]/30 space-y-4">
              <h3 className="font-mono text-xs text-[#E6C687] uppercase tracking-widest">Project Specs</h3>
              {[
                { label: "Location", value: project.location },
                { label: "Type", value: project.type },
                { label: "Area", value: project.area },
                { label: "Year", value: project.year },
                { label: "Client", value: project.client },
                { label: "Status", value: project.status },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-baseline border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="text-gray-400 text-sm">{item.label}</span>
                  <span className="text-white text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <h3 className="font-mono text-xs text-[#E6C687] uppercase tracking-widest">Architect</h3>
              <p className="text-white text-sm font-semibold">{project.architect}</p>
            </div>

            <Link
              href="/contact"
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#E6C687] to-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-gold-glow"
            >
              <Phone className="w-4 h-4" />
              Discuss a Similar Project
            </Link>
          </aside>
        </div>
      </div>

      {/* ── Navigation ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
        <div className="grid grid-cols-2 gap-6">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="glass-card p-5 rounded-2xl border border-white/10 hover:border-[#E6C687]/40 transition-all group flex flex-col gap-2"
          >
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Previous
            </span>
            <h4 className="text-white text-sm font-bold group-hover:text-[#E6C687] transition-colors">
              {prevProject.name}
            </h4>
            <span className="text-xs font-mono text-gray-500">{prevProject.type}</span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="glass-card p-5 rounded-2xl border border-white/10 hover:border-[#E6C687]/40 transition-all group flex flex-col gap-2 text-right"
          >
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider flex items-center justify-end gap-1">
              Next <ArrowRight className="w-3 h-3" />
            </span>
            <h4 className="text-white text-sm font-bold group-hover:text-[#E6C687] transition-colors">
              {nextProject.name}
            </h4>
            <span className="text-xs font-mono text-gray-500">{nextProject.type}</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
