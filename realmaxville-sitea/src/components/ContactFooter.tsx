"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactFooter() {
  return (
    <section id="contact" className="bg-[#0a0a0a] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f2c46d]">
              Get In Touch
            </p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight sm:text-5xl">
              Let&apos;s discuss your next project.
            </h2>
            <div className="mt-8 space-y-4 text-sm text-white/60">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#99f0df]" />
                4a Ogombo Rd, Lagos, Nigeria
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#99f0df]" />
                0808 041 9259
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#99f0df]" />
                info@realmaxville.com
              </div>
            </div>
          </div>

          <form className="glass rounded-lg p-8">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="h-12 rounded border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#f2c46d]/50"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="h-12 rounded border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#f2c46d]/50"
              />
              <input
                type="text"
                placeholder="Project Type"
                className="h-12 rounded border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#f2c46d]/50"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="resize-none rounded border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#f2c46d]/50"
              />
              <button
                type="submit"
                className="h-12 rounded bg-[#f2c46d] text-sm font-bold uppercase tracking-wider text-[#10120f] transition hover:bg-[#E6C687]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
