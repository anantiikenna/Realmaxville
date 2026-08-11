"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  Calendar, 
  Building2, 
  Phone, 
  Mail, 
  Sparkles, 
  ShieldCheck,
  User,
  MapPin
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Luxury Villa",
    location: "Lagos, Nigeria",
    budget: "$3M - $5M",
    preferredDate: "",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#07080A] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Left */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Consultation</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              COMMISSION YOUR <span className="text-gold-gradient">LEGACY</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Schedule a confidential 1-on-1 consultation with our Principal Architect and Senior Structural Engineering Director. We bring your vision from concept to engineering reality.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl glass-card">
                <div className="p-3 rounded-xl bg-[#E6C687] text-black">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[#E6C687] uppercase">Direct Phone / WhatsApp</h4>
                  <p className="text-white font-semibold mt-0.5">0808 041 9259 / +234 808 041 9259</p>
                  <p className="text-[11px] text-gray-400">Available on WhatsApp & Voice Calls</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl glass-card">
                <div className="p-3 rounded-xl bg-[#00F5A0] text-black">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[#00F5A0] uppercase">Direct Email Desk</h4>
                  <p className="text-white font-semibold mt-0.5">admin@realmaxville.com</p>
                  <p className="text-[11px] text-gray-400">Response within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs font-mono text-gray-400 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00F5A0] shrink-0" />
              <span>Headquarters: 4a, Ogombo Rd, Opp Abraham Adesanya Estate, Eti-Osa, Lagos, Nigeria</span>
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl border border-[#E6C687]/30">
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-in fade-in duration-500">
                <div className="w-20 h-20 rounded-full bg-[#00F5A0]/20 border-2 border-[#00F5A0] text-[#00F5A0] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,245,160,0.4)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Consultation Request Received
                </h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#E6C687]">{formData.name}</strong>. The Realmaxville architectural team has received your request for <strong className="text-white">{formData.projectType}</strong>. Our team will contact you shortly via <strong className="text-white">{formData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-full bg-[#E6C687] text-black font-semibold text-xs uppercase tracking-wider shadow-gold-glow"
                >
                  Submit Another Consultation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-display font-bold text-xl text-white border-b border-white/10 pb-4">
                  Schedule Executive Consultation
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Chief Olusegun Adeleke"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C687] pl-10"
                      />
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. o.adeleke@zenith.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C687] pl-10"
                      />
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 803 000 0000"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C687] pl-10"
                      />
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block mb-2">
                      Proposed Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Ikoyi, Lagos or Mayfair, London"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C687] pl-10"
                      />
                      <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E6C687]"
                    >
                      <option value="Luxury Villa" className="bg-[#0E1015]">Luxury Waterfront Villa</option>
                      <option value="Commercial Tower" className="bg-[#0E1015]">Commercial Sky Skyscraper</option>
                      <option value="Smart Estate" className="bg-[#0E1015]">Gated Smart Estate Enclave</option>
                      <option value="Renovation" className="bg-[#0E1015]">Architectural Renovation</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block mb-2">
                      Target Investment Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E6C687]"
                    >
                      <option value="$1M - $3M" className="bg-[#0E1015]">$1,000,000 - $3,000,000</option>
                      <option value="$3M - $5M" className="bg-[#0E1015]">$3,000,000 - $5,000,000</option>
                      <option value="$5M - $15M" className="bg-[#0E1015]">$5,000,000 - $15,000,000</option>
                      <option value="$15M+" className="bg-[#0E1015]">$15,000,000+ (Institutional Sky Scraper)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block mb-2">
                    Project Vision & Special Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe your vision (e.g. cantilevered glass pool, rooftop helipad, smart home automation, 6 car vault...)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C687]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#E6C687] via-[#D4AF37] to-[#C7F300] text-black font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-gold-glow cursor-pointer"
                >
                  Confirm Consultation Booking
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
