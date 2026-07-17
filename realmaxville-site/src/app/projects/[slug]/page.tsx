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
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-labelledby="project-heading">
        <div className="section-inner relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#c7f300]/70 hover:text-[#c7f300] transition-colors uppercase mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ALL PROJECTS
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#c7f300] bg-[#c7f300]/10 border border-[#c7f300]/25 px-3 py-1 rounded-full">
              {project.type}
            </span>
            <span className="text-sm text-[#b0b3b4]">{project.year}</span>
          </div>
          <h1
            id="project-heading"
            className="font-extrabold uppercase leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            {project.name}
          </h1>
        </div>
      </section>

      {/* Cover image */}
      <section aria-label="Project cover image">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 -mt-4">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
            <img
              src={project.cover}
              alt={`${project.name} cover`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Info + Details */}
      <section className="py-16 md:py-24" aria-labelledby="details-heading">
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
              <div className="glass-panel rounded-2xl cyber-border p-8 space-y-6">
                <h3 className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#c7f300] uppercase">
                  Project Info
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

      {/* Next project */}
      <section className="py-16 md:py-24 data-grid-bg" aria-label="Next project">
        <div className="section-inner text-center space-y-6">
          <span className="font-[var(--font-space-mono)] text-[10px] tracking-[0.2em] text-[#c7f300]/60 uppercase">
            Next Project
          </span>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="block group"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight group-hover:text-[#c7f300] transition-colors">
              {nextProject.name}
            </h2>
          </Link>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-[#b0b3b4] hover:text-[#c7f300] transition-colors text-sm"
          >
            View Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
