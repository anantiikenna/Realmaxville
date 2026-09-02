"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Sparkles, 
  ShieldCheck,
  User,
  MapPin,
  AlertCircle,
  Loader2
} from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "Lagos, Nigeria",
    projectType: "Luxury Villa",
    budget: "$3M - $5M",
    message: "",
    smsConsent: false
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const data = new FormData(e.currentTarget);
    data.set("subject", `${formData.projectType} Consultation (${formData.budget})`);
    
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        setStatus("success");
      } else {
        setErrorMsg(result.error || "Failed to submit request. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("An unexpected error occurred. Please try again or call direct phone line.");
      setStatus("error");
    }
  }

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
              <div className="flex items-start gap-4 p-4 rounded-2xl glass-card border border-white/10 bg-white/[0.02]">
                <div className="p-3 rounded-xl bg-[#E6C687] text-black">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[#E6C687] uppercase">Direct Phone / WhatsApp</h4>
                  <p className="text-white font-semibold mt-0.5">0808 041 9259 / +234 808 041 9259</p>
                  <p className="text-[11px] text-gray-400">Available on WhatsApp & Voice Calls</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl glass-card border border-white/10 bg-white/[0.02]">
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
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl border border-[#E6C687]/30 bg-[#10120f]/90">
            {status === "success" ? (
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
                  onClick={() => setStatus("idle")}
                  className="px-6 py-3 rounded-full bg-[#E6C687] text-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                >
                  Send Another Consultation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden from real users) */}
                <div className="hidden" aria-hidden="true">
                  <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
                </div>

                <h3 className="font-display font-bold text-xl text-white border-b border-white/10 pb-4">
                  Schedule Executive Consultation
                </h3>

                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        maxLength={100}
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
                        name="email"
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
                        name="phone"
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
                        name="location"
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
                      name="projectType"
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
                      name="budget"
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
                    Project Vision & Special Requirements *
                  </label>
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your vision (e.g. cantilevered glass pool, rooftop helipad, smart home automation, 6 car vault...)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C687]"
                  />
                </div>

                {/* TCPA SMS Consent Checkbox (Optional) */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <input
                    type="checkbox"
                    id="sms_consent"
                    name="sms_consent"
                    value="true"
                    checked={formData.smsConsent}
                    onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                    className="mt-1 rounded border-gray-700 text-[#E6C687] focus:ring-[#E6C687] bg-black/40 cursor-pointer"
                  />
                  <label htmlFor="sms_consent" className="text-[11px] text-gray-400 leading-relaxed cursor-pointer">
                    <span className="font-semibold text-[#E6C687]">(Optional)</span> I consent to receive SMS text updates and project status notifications from Realmaxville. Message frequency varies based on project progress. Msg & data rates may apply. Reply STOP to opt-out. See our{" "}
                    <Link href="/privacy" className="text-[#E6C687] underline hover:text-white">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="text-[#E6C687] underline hover:text-white">
                      Terms of Use
                    </Link>.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#E6C687] via-[#D4AF37] to-[#C7F300] text-black font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.01] transition-all shadow-gold-glow cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing Request...
                    </>
                  ) : (
                    <>
                      Confirm Consultation Booking
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
