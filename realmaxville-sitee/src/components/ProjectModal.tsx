"use client";

import React from "react";
import Link from "next/link";
import { 
  X, 
  MapPin, 
  Calendar, 
  Maximize2, 
  DollarSign, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  budget: string;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  architect: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E1015] border border-[#E6C687]/30 rounded-3xl overflow-y-auto shadow-2xl custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:text-[#E6C687] hover:bg-black/90 transition-all border border-white/10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header Image */}
        <div className="relative h-72 sm:h-96 w-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-[#0E1015]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#E6C687] text-black mb-2 shadow-gold-glow">
                {project.category}
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-wide">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <div>
              <p className="text-[11px] font-mono text-gray-400 uppercase flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E6C687]" /> Location
              </p>
              <p className="text-sm font-semibold text-white mt-1">{project.location}</p>
            </div>
            <div>
              <p className="text-[11px] font-mono text-gray-400 uppercase flex items-center justify-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#E6C687]" /> Delivered
              </p>
              <p className="text-sm font-semibold text-white mt-1">{project.year}</p>
            </div>
            <div>
              <p className="text-[11px] font-mono text-gray-400 uppercase flex items-center justify-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#E6C687]" /> Footprint
              </p>
              <p className="text-sm font-semibold text-white mt-1">{project.area}</p>
            </div>
            <div>
              <p className="text-[11px] font-mono text-gray-400 uppercase flex items-center justify-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-[#00F5A0]" /> Investment
              </p>
              <p className="text-sm font-semibold text-[#00F5A0] mt-1">{project.budget}</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="font-display font-semibold text-lg text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E6C687]" /> Architectural Overview
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Special Engineering & Tech Features */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">
              Signature Engineering Innovations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#00F5A0] shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Gallery Previews */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-lg text-white">Project Shots</h3>
              <div className="grid grid-cols-3 gap-3">
                {project.gallery.map((imgUrl, i) => (
                  <div key={i} className="h-28 rounded-xl overflow-hidden border border-white/10 group">
                    <img
                      src={imgUrl}
                      alt={`${project.title} view ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Call to Action */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-gray-400">
              Lead Architectural Director: <span className="text-[#E6C687] font-bold">{project.architect}</span>
            </div>

            <Link
              href="/contact"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#E6C687] to-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-gold-glow"
            >
              Request Similar Project Scope
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
