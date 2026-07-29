"use client";

import React, { useState } from "react";
import ProjectModal, { ProjectData } from "./ProjectModal";
import Link from "next/link";
import { 
  Building, 
  MapPin, 
  ArrowUpRight, 
  Maximize2, 
  DollarSign
} from "lucide-react";

export const SAMPLE_PROJECTS: ProjectData[] = [
  {
    id: "p1",
    title: "Mrs Margaret Contemporary Residence",
    category: "Residential Luxury",
    location: "Lagos, Nigeria",
    year: "2023",
    area: "450 m² (4,840 Sq. Ft)",
    budget: "$3.8M",
    image: "/images/projects/mrs-margaret.jpg",
    gallery: [
      "/images/projects/mrs-margaret.jpg",
      "/images/projects/mrs-margaret/1.jpg",
      "/images/projects/mrs-margaret/2.jpg",
      "/images/projects/mrs-margaret/3.jpg"
    ],
    description: "A stunning contemporary residence featuring clean geometric lines, floor-to-ceiling glazing, solar shading screens, and a seamless indoor-outdoor living experience.",
    features: [
      "Strategic Cross-Ventilation & Passive Climate Control",
      "Exposed Concrete & Warm Timber Material Palette",
      "Floor-to-Ceiling Acoustic Glazing Panels",
      "Integrated Smart Lighting & Security System"
    ],
    architect: "Uche Uchendu & Design Team"
  },
  {
    id: "p2",
    title: "Danke Gott Project Jade",
    category: "Residential Luxury",
    location: "Lagos, Nigeria",
    year: "2024",
    area: "520 m² (5,600 Sq. Ft)",
    budget: "$4.5M",
    image: "/images/projects/danke-gott-jade.jpg",
    gallery: [
      "/images/projects/danke-gott-jade.jpg",
      "/images/projects/danke-gott-jade/1.jpg",
      "/images/projects/danke-gott-jade/2.jpg"
    ],
    description: "A premium luxury residential development characterized by its jade-tinted glass facade, organic architectural curves, and panoramic city vistas.",
    features: [
      "Distinctive Jade Curtain Wall Facade",
      "Open-Plan Italian Kitchen Systems",
      "Spa-Inspired Bathrooms with Direct Skylights",
      "Private Underground Multi-Car Vault"
    ],
    architect: "Olamilekan Umar & Technical Team"
  },
  {
    id: "p3",
    title: "Kaduna Commercial Conference Center",
    category: "Commercial Towers",
    location: "Kaduna, Nigeria",
    year: "2024",
    area: "2,500 m² (26,900 Sq. Ft)",
    budget: "$18.5M",
    image: "/images/projects/kaduna-conference-center.jpg",
    gallery: [
      "/images/projects/kaduna-conference-center.jpg",
      "/images/projects/kaduna-conference-center/1.jpg",
      "/images/projects/kaduna-conference-center/2.jpg"
    ],
    description: "A landmark commercial center featuring a dramatic cantilevered steel roof structure, 800-guest main auditorium, and covered executive walkways.",
    features: [
      "Dramatic Cantilevered Steel Structural Roof",
      "800-Guest Column-Free Main Auditorium",
      "Passive Regional Cooling & Landscaped Plazas",
      "State-of-the-Art Acoustic & AV Infrastructure"
    ],
    architect: "Alex Jnr. & Engineering Team"
  },
  {
    id: "p4",
    title: "Mabushi Luxury Villa",
    category: "Residential Luxury",
    location: "Abuja, Nigeria",
    year: "2023",
    area: "620 m² (6,670 Sq. Ft)",
    budget: "$5.2M",
    image: "/images/projects/mabushi-villa.jpg",
    gallery: [
      "/images/projects/mabushi-villa.jpg",
      "/images/projects/mabushi-villa/1.jpg",
      "/images/projects/mabushi-villa/2.jpg"
    ],
    description: "A luxury villa in Abuja's upscale Mabushi district drawing from traditional Nigerian compound living while embracing contemporary minimalism.",
    features: [
      "Expansive Tropical Gardens & Private Lap Pool",
      "Italian Carrara Marble & Custom Millwork",
      "Crestron Smart Home Nervous System",
      "Covered Outdoor Dining & BBQ Terraces"
    ],
    architect: "Uche Uchendu & Design Studio"
  },
  {
    id: "p5",
    title: "Blocks of Flat Smart Enclave",
    category: "Smart Estates",
    location: "Lagos, Nigeria",
    year: "2024",
    area: "3,200 m² (34,400 Sq. Ft)",
    budget: "$12.0M",
    image: "/images/projects/blocks-of-flat.jpg",
    gallery: [
      "/images/projects/blocks-of-flat.jpg",
      "/images/projects/blocks-of-flat/1.jpg",
      "/images/projects/blocks-of-flat/2.jpg"
    ],
    description: "A modern multi-family residential enclave optimizing urban density without compromising on private outdoor living, high ceilings, or communal courtyards.",
    features: [
      "Rainwater Harvesting & Solar-Ready Rooftops",
      "Shared Communal Courtyards & Amenity Hubs",
      "Dynamic Streetscape Architectural Facade",
      "Private Balconies with Motorized Solar Louvers"
    ],
    architect: "Olamilekan Umar & Technical Division"
  },
  {
    id: "p6",
    title: "Double Face Residence",
    category: "Residential Luxury",
    location: "Lagos, Nigeria",
    year: "2023",
    area: "380 m² (4,090 Sq. Ft)",
    budget: "$3.1M",
    image: "/images/projects/double-face-home.jpg",
    gallery: [
      "/images/projects/double-face-home.jpg",
      "/images/projects/double-face-home/1.jpg",
      "/images/projects/double-face-home/2.jpg"
    ],
    description: "An innovative dual-frontage residence presenting a bold geometric formal facade to the street, and a serene glass-walled retreat opening to a central courtyard.",
    features: [
      "Dual-Frontage Architectural Concept",
      "Double-Height Living Room Central Atrium",
      "Central Courtyard with Water Feature",
      "Automated Security & Perimeter Surveillance"
    ],
    architect: "Uche Uchendu & Design Team"
  },
  {
    id: "p7",
    title: "Transient Healthcare Complex",
    category: "Commercial Towers",
    location: "Enugu, Nigeria",
    year: "2022",
    area: "1,800 m² (19,300 Sq. Ft)",
    budget: "$14.0M",
    image: "/images/projects/transient-hospital.jpg",
    gallery: [
      "/images/projects/transient-hospital.jpg",
      "/images/projects/transient-hospital/1.jpg",
      "/images/projects/transient-hospital/2.jpg"
    ],
    description: "A purpose-built healthcare facility engineered for rapid patient flow, natural lighting corridors, and modular structural expansion.",
    features: [
      "Modular Structural Grid for Rapid Expansion",
      "Natural Ventilation & Daylighting Corridors",
      "Intuitive Wayfinding & Emergency Flow Design",
      "Medical-Grade Antimicrobial Interior Finishes"
    ],
    architect: "Alex Jnr. & Project Division"
  },
  {
    id: "p8",
    title: "Urban Residential Apartment",
    category: "Renovations",
    location: "Lagos, Nigeria",
    year: "2023",
    area: "280 m² (3,010 Sq. Ft)",
    budget: "$2.4M",
    image: "/images/projects/residential-apartment.jpg",
    gallery: [
      "/images/projects/residential-apartment.jpg",
      "/images/projects/residential-apartment/1.jpg",
      "/images/projects/residential-apartment/2.jpg"
    ],
    description: "A thoughtfully redesigned urban apartment building maximizing spatial functionality, privacy screens, and shared rooftop amenities.",
    features: [
      "Dynamic Light-Filtering Privacy Screens",
      "Open-Plan Living & Custom Joinery",
      "Rooftop Terrace Social & Viewing Pavilion",
      "Energy-Efficient Double Glazing Throughout"
    ],
    architect: "Stephen Nwadialor & Technical Team"
  }
];

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  const categories = ["All", "Residential Luxury", "Commercial Towers", "Smart Estates", "Waterfront Mansions", "Renovations"];

  const filteredProjects = (selectedCategory === "All"
    ? SAMPLE_PROJECTS
    : SAMPLE_PROJECTS.filter(p => p.category === selectedCategory)).slice(0, 6);

  return (
    <section className="py-24 bg-[#07080A] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
              <Building className="w-3.5 h-3.5" />
              <span>Architectural Showcase</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              SIGNATURE LANDMARK <span className="text-gold-gradient">PORTFOLIO</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base">
              Explore our recent luxury developments across Africa, Europe, and the Middle East.
            </p>
          </div>

          {/* Filter Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#E6C687] to-[#D4AF37] text-black font-bold shadow-gold-glow"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="glass-card rounded-3xl overflow-hidden group cursor-pointer border border-white/10 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-transparent to-transparent" />
                
                {/* Category Pill Top Left */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#E6C687] border border-[#E6C687]/30 font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Quick Arrow Top Right */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#E6C687] group-hover:text-black transition-all shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Details Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E6C687]" />
                    {project.location}
                  </span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-display font-extrabold text-xl text-white group-hover:text-[#E6C687] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Bottom Spec Pill Bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-300 flex items-center gap-1">
                    <Maximize2 className="w-3 h-3 text-[#E6C687]" /> {project.area}
                  </span>
                  <span className="text-[#00F5A0] font-bold flex items-center gap-1">
                    <DollarSign className="w-3 h-3" /> {project.budget}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-[#E6C687]/30 text-[#E6C687] font-semibold text-xs uppercase tracking-widest hover:bg-[#E6C687]/10 hover:border-[#E6C687]/60 transition-all"
          >
            View Full Portfolio — 8 Landmark Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
}
