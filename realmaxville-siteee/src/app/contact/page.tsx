"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PhoneCall,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  User,
  Phone,
} from "lucide-react";

const infoCards = [
  {
    label: "Call Us",
    icon: PhoneCall,
    lines: ["0808 041 9259", "0703 719 0399"],
    color: "text-[#E6C687]",
    bg: "bg-[#E6C687]",
  },
  {
    label: "Email",
    icon: Mail,
    lines: ["admin@realmaxville.com", "realmaxville@gmail.com"],
    color: "text-[#00F5A0]",
    bg: "bg-[#00F5A0]",
  },
  {
    label: "Location",
    icon: MapPin,
    lines: ["4a, Ogombo Rd, Opp Abraham Adesanya Estate, Lagos"],
    color: "text-[#E6C687]",
    bg: "bg-[#E6C687]",
  },
  {
    label: "Working Hours",
    icon: Clock,
    lines: ["Mon - Fri: 10AM - 5PM", "Sat - Sun: By Appointment"],
    color: "text-[#00F5A0]",
    bg: "bg-[#00F5A0]",
  },
];

const projectTypes = [
  "Architectural Design",
  "Construction",
  "Interior Design",
  "Renovation",
  "Site Planning",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 bg-[#07080A] min-h-screen">

        {/* ── Page Header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C687]/10 border border-[#E6C687]/30 text-[#E6C687] text-xs font-mono tracking-widest uppercase">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Contact</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
              REACH OUT TO <span className="text-gold-gradient">OUR TEAM</span>
            </h1>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left — Info Cards */}
            <div className="lg:col-span-2 space-y-4">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div key={i} className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${card.bg} text-black shrink-0 shadow-lg`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
                        {card.label}
                      </span>
                      {card.lines.map((line, j) => (
                        <p key={j} className={`text-sm font-medium ${j === 0 ? "text-white" : "text-gray-300"}`}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3 glass-panel p-6 sm:p-10 rounded-3xl border border-[#E6C687]/30">
              {submitted ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in duration-500">
                  <div className="w-20 h-20 rounded-full bg-[#00F5A0]/20 border-2 border-[#00F5A0] text-[#00F5A0] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,245,160,0.4)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    Message Sent Successfully
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#E6C687]">{formData.name}</strong>. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
                    }}
                    className="px-6 py-3 rounded-full bg-[#E6C687] text-black font-semibold text-xs uppercase tracking-wider shadow-gold-glow"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-bold text-xl text-white border-b border-white/10 pb-4">
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block mb-1.5">
                        Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C687] pl-10 transition-colors"
                        />
                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block mb-1.5">
                        Email *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C687] pl-10 transition-colors"
                        />
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block mb-1.5">
                        Phone
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+234 803 000 0000"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C687] pl-10 transition-colors"
                        />
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block mb-1.5">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E6C687] transition-colors"
                      >
                        <option value="" className="bg-[#0E1015]">Select a project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#0E1015]">{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project vision..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C687] resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#E6C687] text-black font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-gold-glow cursor-pointer"
                  >
                    Submit
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
