"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  DraftingCompass,
  Layers3,
  Mail,
  MapPin,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ThreeArchitectureScene from "@/components/ThreeArchitectureScene";
import { projects } from "@/lib/projects-data";

const featuredProjects = projects.slice(0, 6);

const services = [
  {
    title: "Architectural Design",
    body: "Contemporary residential, commercial, healthcare, and public spaces shaped from concept to construction-ready documentation.",
    icon: DraftingCompass,
  },
  {
    title: "Structural Engineering",
    body: "Precise structural systems, buildability reviews, and technical coordination for ambitious Nigerian projects.",
    icon: ShieldCheck,
  },
  {
    title: "Smart Construction",
    body: "Site execution, material coordination, and finish control for homes, estates, and institutional developments.",
    icon: Layers3,
  },
];

const stats = [
  ["140+", "completed legacies"],
  ["28", "architecture awards"],
  ["99.8%", "precision focus"],
  ["4", "city portfolio"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#10120f] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#10120f]/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Realmaxville home">
            <Image
              src="/images/logo1.png"
              alt="Realmaxville logo"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
              priority
            />
            <span className="font-display text-lg font-bold tracking-wide text-white">Realmaxville</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
            <a href="#projects" className="transition hover:text-[#f2c46d]">Projects</a>
            <a href="#services" className="transition hover:text-[#f2c46d]">Services</a>
            <a href="#contact" className="transition hover:text-[#f2c46d]">Contact</a>
          </div>

          <a
            href="#contact"
            className="inline-flex h-11 items-center gap-2 border border-[#f2c46d]/45 px-4 text-sm font-semibold text-[#f2c46d] transition hover:bg-[#f2c46d] hover:text-[#10120f]"
          >
            <Mail className="h-4 w-4" />
            Start Brief
          </a>
        </nav>
      </header>

      <section className="relative min-h-[92vh] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,224,195,0.18),transparent_28%),linear-gradient(110deg,#10120f_0%,#182016_38%,#2b211b_100%)]" />
        <ThreeArchitectureScene />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,18,15,0.9)_0%,rgba(16,18,15,0.52)_45%,rgba(16,18,15,0.2)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#f4f0e6] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-white/15 bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#99f0df]">
              <Sparkles className="h-4 w-4" />
              Futuristic architecture and construction
            </div>
            <h1 className="font-display text-5xl font-black leading-[0.96] text-white sm:text-7xl lg:text-8xl">
              Realmaxville
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              A 3D-forward studio experience for luxury residences, smart estates, healthcare buildings, and landmark public projects across Nigeria.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex h-12 items-center gap-2 bg-[#f2c46d] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[#10120f] transition hover:bg-white"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex h-12 items-center gap-2 border border-white/20 px-5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#99f0df] hover:text-[#99f0df]"
              >
                Studio Scope
                <MoveUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f0e6] py-12 text-[#10120f]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#10120f]/10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map(([value, label]) => (
            <div key={label} className="bg-[#f4f0e6] px-4 py-6">
              <div className="font-display text-4xl font-black text-[#1b6f67]">{value}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#10120f]/62">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-[#f4f0e6] py-20 text-[#10120f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#1b6f67]">
                <Building2 className="h-4 w-4" />
                Selected work
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-4xl font-black leading-tight sm:text-5xl">
                Real project imagery with a cinematic 3D interface.
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex h-11 items-center gap-2 border border-[#10120f]/20 px-4 text-sm font-bold text-[#10120f] transition hover:border-[#1b6f67] hover:text-[#1b6f67]"
            >
              All projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden border border-[#10120f]/12 bg-white shadow-[0_18px_50px_rgba(16,18,15,0.08)]"
              >
                <div className="relative aspect-[1.35] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10120f]/75 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 bg-[#f2c46d] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#10120f]">
                    {project.type}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-black leading-tight">{project.name}</h3>
                      <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[#10120f]/62">
                        <MapPin className="h-4 w-4 text-[#1b6f67]" />
                        {project.location}
                      </p>
                    </div>
                    <MoveUpRight className="h-5 w-5 shrink-0 text-[#1b6f67] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#10120f]/68">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#10120f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f2c46d]">Build system</p>
              <h2 className="mt-3 font-display text-4xl font-black leading-tight sm:text-5xl">
                Design intelligence, engineering clarity, and construction control.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                The older Realmaxville content becomes a sharper studio flow here: services are grouped by how clients actually move from dream, to drawings, to site delivery.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="border border-white/12 bg-white/[0.045] p-5">
                    <Icon className="h-7 w-7 text-[#99f0df]" />
                    <h3 className="mt-6 font-display text-2xl font-black leading-tight">{service.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/64">{service.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#d9e4dc] py-20 text-[#10120f]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1b6f67]">Project briefing</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight sm:text-5xl">
              Bring the next Realmaxville landmark into view.
            </h2>
          </div>
          <form className="grid gap-3">
            <input className="h-12 border border-[#10120f]/16 bg-white px-4 text-sm outline-none focus:border-[#1b6f67]" placeholder="Name" />
            <input className="h-12 border border-[#10120f]/16 bg-white px-4 text-sm outline-none focus:border-[#1b6f67]" placeholder="Email" />
            <textarea className="min-h-32 resize-none border border-[#10120f]/16 bg-white p-4 text-sm outline-none focus:border-[#1b6f67]" placeholder="Project location, type, budget, and timeline" />
            <button className="inline-flex h-12 items-center justify-center gap-2 bg-[#10120f] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#1b6f67]">
              Send Inquiry
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
