import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/lib/projects-data";
import ProjectGallery from "./ProjectGallery";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Realmaxville`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Realmaxville`,
      description: project.description,
      images: [{ url: project.cover, width: 1200, height: 630, alt: `${project.name} — Realmaxville Architecture` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Realmaxville`,
      description: project.description,
      images: [project.cover],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 6);

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden" aria-labelledby="project-heading">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={project.cover}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/60 to-[#050505]/30" />
          <div className="absolute inset-0 bg-linear-to-r from-[#050505]/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="section-inner relative z-10 pb-12 md:pb-16 pt-32">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700]/70 hover:text-[#FFD700] transition-colors uppercase mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ALL PROJECTS
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/25 px-3 py-1 rounded-full">
                  {project.type}
                </span>
                <span className="text-sm text-[#b0b3b4]">{project.year}</span>
              </div>
              <h1
                id="project-heading"
                className="font-extrabold uppercase leading-[0.9] tracking-[-0.04em] mb-4"
                style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
              >
                {project.name}
              </h1>
              <p className="text-[#b0b3b4] text-base md:text-lg max-w-xl">
                {project.description}
              </p>
            </div>

            {/* Metadata glass panel */}
            <div className="glass-panel cyber-border rounded-lg p-6 md:p-8 w-full lg:w-80 shrink-0">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "LOCATION", value: project.location },
                  { label: "AREA", value: project.area },
                  { label: "CLIENT", value: project.client },
                  { label: "STATUS", value: project.status },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="font-(--font-space-mono) text-[9px] tracking-[0.2em] text-[#FFD700]/60 block mb-1">
                      {item.label}
                    </span>
                    <span className="text-[#e5e2e1] text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFD700] pulse-active" aria-hidden="true" />
                  <span className="font-(--font-space-mono) text-[9px] tracking-[0.2em] text-[#FFD700]">
                    PROJECT COMPLETE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 md:py-32" aria-labelledby="details-heading">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <h2 id="details-heading" className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                PROJECT OVERVIEW
              </h2>
              <p className="text-[#b0b3b4] leading-relaxed text-base md:text-lg">
                {project.description}
              </p>
              <p className="text-[#b0b3b4] leading-relaxed text-sm md:text-base">
                {project.details}
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="glass-panel rounded-lg cyber-border p-8 space-y-6">
                <h3 className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700] uppercase">
                  Project Specs
                </h3>
                {[
                  { label: "Location", value: project.location },
                  { label: "Type", value: project.type },
                  { label: "Area", value: project.area },
                  { label: "Year", value: project.year },
                  { label: "Client", value: project.client },
                  { label: "Status", value: project.status },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-baseline border-b border-white/5 pb-3">
                    <span className="text-[#b0b3b4] text-sm">{item.label}</span>
                    <span className="text-[#e5e2e1] text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
              <a href="/contact" className="btn-cta glow-hover w-full justify-center">
                DISCUSS A PROJECT
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <ProjectGallery images={project.gallery} name={project.name} />
      )}

      {/* Next project — image card */}
      <section className="py-24 md:py-32" aria-label="Next project">
        <div className="section-inner flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700]/60 uppercase">
              Next Project
            </span>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="block group"
            >
              <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight group-hover:text-[#FFD700] transition-colors">
                {nextProject.name}
              </h2>
            </Link>
          </div>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="block group relative overflow-hidden rounded-xl border border-white/5 hover:border-[#FFD700]/40 aspect-video md:aspect-[16/7] transition-all"
          >
            <img
              src={nextProject.cover}
              alt={`${nextProject.name} project preview`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/30 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <p className="text-[#FFD700] font-(--font-space-mono) text-[11px] tracking-[0.2em] uppercase">{nextProject.type}</p>
              <p className="text-[#b0b3b4] text-sm mt-2">{nextProject.location} &bull; {nextProject.year}</p>
            </div>
            <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#FFD700] group-hover:text-[#1a1200] group-hover:border-[#FFD700] transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* More projects — horizontal scroll */}
      {otherProjects.length > 0 && (
        <section className="py-24 md:py-32 bg-surface-container-lowest" aria-label="More projects">
          <div className="section-inner flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight">More Projects</h2>
              <Link href="/projects" className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700]/70 hover:text-[#FFD700] transition-colors uppercase">
                View All
              </Link>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group shrink-0 w-[280px] md:w-[340px] block"
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/5 hover:border-[#FFD700]/40 transition-all">
                    <img
                      src={p.cover}
                      alt={`${p.name} project`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-5">
                      <p className="text-[#FFD700] font-(--font-space-mono) text-[10px] tracking-[0.2em] uppercase">{p.type}</p>
                      <h3 className="text-base font-bold text-white group-hover:text-[#FFD700] transition-colors mt-1">{p.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
