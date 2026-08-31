"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, MoveUpRight } from "lucide-react";
import { projects } from "@/lib/projects-data";

const featuredProjects = projects.slice(0, 6);

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-[#0e1015] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f2c46d]">
              Selected Work
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-black leading-tight sm:text-5xl">
              Real project imagery, delivered with precision.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex h-11 items-center gap-2 border border-white/20 px-4 text-sm font-bold text-white transition hover:border-[#f2c46d] hover:text-[#f2c46d]"
          >
            All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group glass rounded-lg overflow-hidden transition hover:border-[#f2c46d]/20"
            >
              <div className="relative aspect-[1.35] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015]/80 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded bg-[#f2c46d] px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#10120f]">
                  {project.type}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-black leading-tight">
                      {project.name}
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-sm font-medium text-white/50">
                      <MapPin className="h-4 w-4 text-[#99f0df]" />
                      {project.location}
                    </p>
                  </div>
                  <MoveUpRight className="h-5 w-5 shrink-0 text-[#99f0df] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-4 text-sm leading-6 text-white/55">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
