"use client";
import { useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p
      id={id}
      role="alert"
      className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400"
      style={{ animation: "slideDown 0.2s ease-out" }}
    >
      <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3.5a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3A.75.75 0 018 4.5zm0 6.5a.875.875 0 110-1.75.875.875 0 010 1.75z" />
      </svg>
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSent(true);
    formRef.current?.reset();
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const inputBase = "w-full px-4 py-3 rounded-xl bg-white/5 border text-[#e5e2e1] text-sm focus:outline-none transition-all duration-200";
  const inputValid = "border-white/10 focus:border-[#c7f300] focus:shadow-[0_0_0_2px_rgba(199,243,0,0.1)]";
  const inputError = "border-red-500/70 shadow-[0_0_0_2px_rgba(239,68,68,0.1)] focus:border-red-400";

  return (
    <section className="section-inner" style={{ paddingTop: "8rem", paddingBottom: "8rem" }} aria-labelledby="contact-heading">
      <ScrollReveal>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4" aria-hidden="true">
            <div className="h-px w-12 bg-[#c7f300]" />
            <span className="font-(--font-space-mono) text-xs tracking-[0.2em] text-[#c7f300]">GET IN TOUCH</span>
            <div className="h-px w-12 bg-[#c7f300]" />
          </div>
          <h2 id="contact-heading" className="text-4xl md:text-[48px] font-extrabold">
            CONTACT <span className="text-[#c7f300]">US</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <ScrollReveal className="lg:col-span-2">
          <div className="space-y-10">
            {[
              { icon: "📞", label: "CALL US", value: "0808 041 9259", sub: "0703 719 0399" },
              { icon: "✉️", label: "EMAIL", value: "admin@realmaxville.com", sub: "realmaxville@gmail.com" },
              { icon: "📍", label: "LOCATION", value: "4a, Ogombo Rd, Opp Abraham Adesanya Estate", sub: "Eti-Osa, Lagos" },
              { icon: "🕐", label: "WORKING HOURS", value: "Mon-Fri: 10AM - 5PM", sub: "Sat-Sun: 1PM - 5PM" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#c7f300]/10 flex items-center justify-center text-xl shrink-0 group-hover:bg-[#c7f300]/20 transition-colors" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <div className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#c7f300] mb-1">{item.label}</div>
                  <div className="text-[#e5e2e1] text-sm font-semibold">{item.value}</div>
                  <div className="text-outline text-xs">{item.sub}</div>
                </div>
              </div>
            ))}

            <div className="rounded-xl overflow-hidden aspect-video bg-surface-container-lowest border border-[#c7f300]/10 relative mt-8">
              <iframe
                src="https://maps.google.com/maps?q=4a%2C%20Ogombo%20Rd%2C%20Opp%20Abraham%20Adesanya%20Estate%2C%20Eti%20-%20Osa%2C%20Lagos&t=m&z=14&output=embed"
                className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                loading="lazy"
                title="Realmaxville office location on Google Maps"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="lg:col-span-3">
          <form ref={formRef} onSubmit={handleSubmit} noValidate className="glass-panel p-8 rounded-2xl cyber-border space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-outline uppercase mb-2 block">
                  Name <span className="text-[#c7f300]" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`${inputBase} ${errors.name ? inputError : inputValid}`}
                  placeholder="Your name"
                />
                {errors.name && <FieldError id="contact-name-error" message={errors.name} />}
              </div>
              <div>
                <label htmlFor="contact-email" className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-outline uppercase mb-2 block">
                  Email <span className="text-[#c7f300]" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`${inputBase} ${errors.email ? inputError : inputValid}`}
                  placeholder="you@email.com"
                />
                {errors.email && <FieldError id="contact-email-error" message={errors.email} />}
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-outline uppercase mb-2 block">Subject</label>
              <input
                id="contact-subject"
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={`${inputBase} ${inputValid}`}
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-outline uppercase mb-2 block">
                Message <span className="text-[#c7f300]" aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputBase} resize-none ${errors.message ? inputError : inputValid}`}
                placeholder="Tell us about your project..."
              />
              {errors.message && <FieldError id="contact-message-error" message={errors.message} />}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl bg-[#c7f300] text-on-accent font-(--font-space-mono) text-sm tracking-widest hover:shadow-[0_0_20px_rgba(199,243,0,0.3)] transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "SENDING..." : sent ? "✓ MESSAGE SENT!" : "SEND MESSAGE →"}
            </button>
            <p className="text-center font-(--font-space-mono) text-[10px] text-outline">WE TYPICALLY RESPOND WITHIN 24 HOURS</p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
