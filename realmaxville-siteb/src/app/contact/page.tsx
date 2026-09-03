"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  PhoneCall,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  User,
  Phone,
  AlertCircle,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

export const metadata = undefined; // client component, no metadata export

const contactDetails = [
  {
    icon: PhoneCall,
    label: "Phone / WhatsApp",
    lines: ["0808 041 9259", "+234 703 719 0399"],
    accent: "copper",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["admin@realmaxville.com"],
    accent: "emerald",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    lines: ["4a Ogombo Rd, Opp Abraham Adesanya Estate, Eti-Osa, Lagos"],
    accent: "copper",
  },
  {
    icon: Clock,
    label: "Office Hours",
    lines: ["Monday – Friday: 10AM – 5PM", "Saturday – Sunday: By Appointment"],
    accent: "emerald",
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Luxury Villa",
    budget: "₦500M - ₦1B",
    message: "",
    smsConsent: false,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const data = new FormData(e.currentTarget);
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        setStatus("success");
      } else {
        setErrorMsg(result.error || "Failed to send. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("An unexpected error occurred. Please call us directly.");
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080C10] pt-24 pb-20">

        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-copper-500" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">Get in Touch</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-ivory-100 leading-[1.0] mb-4">
              Commission your <br />
              <em className="text-copper-gradient font-semibold not-italic">dream project.</em>
            </h1>
            <p className="text-ivory-300/55 text-base leading-relaxed max-w-xl">
              Schedule a private consultation with our Principal Architect and Lead Engineer. We bring your vision to life with precision and artistry.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact Cards */}
            <div className="lg:col-span-2 space-y-4">
              {contactDetails.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-[#0D1117] border border-white/5 hover:border-copper-500/15 transition-all"
                  >
                    <div className={`p-3 rounded-xl shrink-0 ${
                      card.accent === "copper"
                        ? "bg-copper-500/10 text-copper-400"
                        : "bg-emerald-500/10 text-emerald-400"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ivory-400/40 block mb-1">
                        {card.label}
                      </span>
                      {card.lines.map((line, j) => (
                        <p key={j} className={`text-sm ${j === 0 ? "text-ivory-100 font-medium" : "text-ivory-300/50"}`}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-white/5 h-48">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Ogombo+Road,+Ajah,+Lagos,+Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  title="Realmaxville office location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 glass-slate rounded-3xl p-8 sm:p-10 border border-copper-500/15">
              {status === "success" ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/15 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-ivory-100">Consultation Request Received</h3>
                  <p className="text-ivory-300/55 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-copper-300">{formData.name}</strong>. Our team will contact you at{" "}
                    <strong className="text-ivory-100">{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-3 rounded-full bg-copper-500 text-[#080C10] font-semibold text-xs uppercase tracking-wider hover:bg-copper-400 transition-colors cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
                  </div>

                  <h2 className="font-serif text-2xl font-semibold text-ivory-100 border-b border-white/5 pb-4">
                    Schedule a Consultation
                  </h2>

                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs flex items-center gap-3">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-ivory-400/50 block mb-2">Full Name *</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          maxLength={100}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Chief Emeka Obi"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 pl-10 text-sm text-ivory-100 placeholder-ivory-400/30 focus:outline-none focus:border-copper-500/50 transition-colors"
                        />
                        <User className="w-4 h-4 text-ivory-400/30 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-ivory-400/50 block mb-2">Email Address *</label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. emeka@company.com"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 pl-10 text-sm text-ivory-100 placeholder-ivory-400/30 focus:outline-none focus:border-copper-500/50 transition-colors"
                        />
                        <Mail className="w-4 h-4 text-ivory-400/30 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-ivory-400/50 block mb-2">Phone / WhatsApp</label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+234 803 000 0000"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 pl-10 text-sm text-ivory-100 placeholder-ivory-400/30 focus:outline-none focus:border-copper-500/50 transition-colors"
                        />
                        <Phone className="w-4 h-4 text-ivory-400/30 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-ivory-400/50 block mb-2">Project Type</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-copper-500/50 transition-colors"
                      >
                        <option value="Luxury Villa" className="bg-[#0D1117]">Luxury Waterfront Villa</option>
                        <option value="Smart Estate" className="bg-[#0D1117]">Gated Smart Estate</option>
                        <option value="Commercial Tower" className="bg-[#0D1117]">Commercial Tower</option>
                        <option value="Healthcare" className="bg-[#0D1117]">Healthcare Facility</option>
                        <option value="Interior Design" className="bg-[#0D1117]">Interior & Renovations</option>
                        <option value="Other" className="bg-[#0D1117]">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-ivory-400/50 block mb-2">Investment Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-copper-500/50 transition-colors"
                    >
                      <option value="₦100M - ₦500M" className="bg-[#0D1117]">₦100M – ₦500M</option>
                      <option value="₦500M - ₦1B" className="bg-[#0D1117]">₦500M – ₦1B</option>
                      <option value="₦1B - ₦5B" className="bg-[#0D1117]">₦1B – ₦5B</option>
                      <option value="₦5B+" className="bg-[#0D1117]">₦5B+ (Landmark Project)</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-ivory-400/50 block mb-2">Project Vision *</label>
                    <textarea
                      name="message"
                      required
                      minLength={10}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project: style, size, special features, timeline..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-ivory-100 placeholder-ivory-400/30 focus:outline-none focus:border-copper-500/50 resize-none transition-colors"
                    />
                  </div>

                  {/* TCPA Consent */}
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <input
                      type="checkbox"
                      id="sms_consent"
                      name="sms_consent"
                      value="true"
                      checked={formData.smsConsent}
                      onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                      className="mt-1 rounded border-white/20 text-copper-500 focus:ring-copper-500 bg-transparent cursor-pointer"
                    />
                    <label htmlFor="sms_consent" className="text-[11px] text-ivory-400/45 leading-relaxed cursor-pointer">
                      <span className="font-semibold text-copper-400">(Optional)</span> I consent to receive SMS project updates from Realmaxville. Msg & data rates may apply. Reply STOP to opt-out. See our{" "}
                      <Link href="/privacy" className="text-copper-400 underline hover:text-copper-300">Privacy Policy</Link> and{" "}
                      <Link href="/terms" className="text-copper-400 underline hover:text-copper-300">Terms of Use</Link>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-full bg-copper-500 text-[#080C10] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-copper-400 transition-all hover:shadow-copper-glow cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Consultation Request
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] text-ivory-400/30 font-mono flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500/60" />
                    Your information is secure and confidential
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
