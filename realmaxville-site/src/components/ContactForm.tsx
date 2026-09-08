"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { submitContactForm } from "@/app/actions/contact";

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

const contactItems = [
  {
    label: "CALL US",
    value: "0808 041 9259",
    sub: "0703 719 0399",
    href: "tel:08080419259",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "EMAIL",
    value: "admin@realmaxville.com",
    sub: "realmaxville@gmail.com",
    href: "mailto:admin@realmaxville.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LOCATION",
    value: "4a, Ogombo Rd",
    sub: "Opp Abraham Adesanya Estate, Lagos",
    href: "https://maps.google.com/?q=4a,Ogombo+Rd,Lagos",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "WORKING HOURS",
    value: "Mon – Fri: 10AM – 5PM",
    sub: "Sat – Sun: 1PM – 5PM",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", smsConsent: false });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setServerError("");

    const data = new FormData(e.currentTarget);
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        setSent(true);
        formRef.current?.reset();
        setForm({ name: "", email: "", phone: "", subject: "", message: "", smsConsent: false });
        setTimeout(() => setSent(false), 5000);
      } else {
        setServerError(result.error || "Submission failed.");
      }
    } catch {
      setServerError("An unexpected error occurred. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3.5 rounded-lg bg-white/4 border text-[#e5e2e1] text-sm focus:outline-none transition-all duration-200 placeholder:text-[#555]";
  const inputValid =
    "border-white/8 focus:border-[#E6C687] focus:bg-white/6 focus:shadow-[0_0_0_3px_rgba(230,198,135,0.08)]";
  const inputError =
    "border-red-500/70 bg-red-500/5 shadow-[0_0_0_2px_rgba(239,68,68,0.1)] focus:border-red-400";

  return (
    <section
      id="contact-form"
      className="section-inner py-20 flex flex-col gap-12"
      aria-labelledby="contact-heading"
    >
      <ScrollReveal>
        <div className="text-center flex flex-col items-center gap-6">
          <div className="flex items-center justify-center gap-3" aria-hidden="true">
            <div className="h-px w-12 bg-[#E6C687]" />
            <span className="font-(--font-space-mono) text-[10px] tracking-[0.3em] text-[#E6C687] uppercase">
              Direct Contact
            </span>
            <div className="h-px w-12 bg-[#E6C687]" />
          </div>
          <h2
            id="contact-heading"
            className="text-4xl md:text-[52px] font-extrabold tracking-tight"
          >
            REACH OUT TO <span className="text-[#E6C687] neon-text-glow">OUR TEAM</span>
          </h2>
          <p className="text-outline max-w-2xl mx-auto leading-relaxed">
            We&apos;re passionate about bringing your vision to life. Share your project ideas and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 items-stretch">
        {/* Contact info sidebar */}
        <ScrollReveal className="lg:col-span-1 h-full flex flex-col" direction="left">
          <div className="space-y-4 shrink-0">
            {contactItems.map((item) => {
              const Card = (
                <div
                  key={item.label}
                  className="group flex gap-4.5 items-start p-4.5 sm:p-5 rounded-lg border border-white/5 bg-white/2 hover:border-[#E6C687]/25 hover:bg-[#E6C687]/3 transition-all duration-300 cursor-default"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#E6C687]/10 border border-[#E6C687]/20 flex items-center justify-center text-[#E6C687] shrink-0 group-hover:bg-[#E6C687]/20 group-hover:border-[#E6C687]/40 group-hover:shadow-[0_0_12px_rgba(230,198,135,0.12)] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex flex-col gap-0.5">
                    <div className="font-(--font-space-mono) text-[9px] tracking-[0.25em] text-[#E6C687] uppercase">
                      {item.label}
                    </div>
                    <div className="text-[#e5e2e1] text-sm font-semibold truncate">{item.value}</div>
                    <div className="text-outline text-xs leading-relaxed">{item.sub}</div>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block no-underline"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  {Card}
                </a>
              ) : (
                <div key={item.label}>{Card}</div>
              );
            })}
          </div>

          <div className="flex flex-col gap-5 flex-1 min-h-55 rounded-lg overflow-hidden border border-[#E6C687]/10 relative">
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-surface-container-lowest/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#E6C687]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6C687] pulse-active" aria-hidden="true" />
              <span className="font-(--font-space-mono) text-[9px] tracking-widest text-[#E6C687]">OUR OFFICE</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=4a%2C%20Ogombo%20Rd%2C%20Opp%20Abraham%20Adesanya%20Estate%2C%20Eti%20-%20Osa%2C%20Lagos&t=m&z=14&output=embed"
              className="w-full h-full border-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              loading="lazy"
              title="Realmaxville office location on Google Maps"
            />
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal className="lg:col-span-2 h-full" direction="right">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="glass-panel p-8 sm:p-10 md:p-12 rounded-lg cyber-border space-y-6 md:space-y-7 relative overflow-hidden h-full flex flex-col justify-between"
          >
            {/* Honeypot anti-spam field */}
            <div className="hidden" aria-hidden="true">
              <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-[#E6C687]/40 to-transparent" aria-hidden="true" />

            <div className="flex flex-col gap-1">
              <h3 className="font-(--font-space-mono) text-[10px] tracking-[0.3em] text-[#E6C687] uppercase">
                Send Us a Message
              </h3>
              <p className="text-outline text-xs leading-relaxed">
                Fill in the details below and we&apos;ll respond as soon as possible.
              </p>
            </div>

            {serverError && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                {serverError}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2.5">
                <label
                  htmlFor="contact-name"
                  className="flex items-center gap-2 font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#b0b3b4] uppercase"
                >
                  FULL NAME *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`${inputBase} ${errors.name ? inputError : inputValid}`}
                  placeholder="Enter full name"
                />
                {errors.name && <FieldError id="contact-name-error" message={errors.name} />}
              </div>
              <div className="flex flex-col gap-2.5">
                <label
                  htmlFor="contact-email"
                  className="flex items-center gap-2 font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#b0b3b4] uppercase"
                >
                  EMAIL ADDRESS *
                </label>
                <input
                  id="contact-email"
                  name="email"
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

            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="contact-phone"
                className="flex items-center gap-2 font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#b0b3b4] uppercase"
              >
                PHONE NUMBER
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={`${inputBase} ${inputValid}`}
                placeholder="+234 800 000 0000"
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="contact-subject"
                className="flex items-center gap-2 font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#b0b3b4] uppercase"
              >
                PROJECT TYPE
              </label>
              <select
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={`${inputBase} ${inputValid}`}
                style={{ appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23E6C687'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1.25rem" }}
              >
                <option value="" className="bg-[#10120f]">Select a service...</option>
                <option value="Architectural Design" className="bg-[#10120f]">Architectural Design</option>
                <option value="Construction" className="bg-[#10120f]">Construction</option>
                <option value="Interior Design" className="bg-[#10120f]">Interior Design</option>
                <option value="Renovation" className="bg-[#10120f]">Renovation</option>
                <option value="Site Planning" className="bg-[#10120f]">Site Planning</option>
                <option value="Geophysical Survey" className="bg-[#10120f]">Geophysical Survey</option>
                <option value="Other" className="bg-[#10120f]">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="contact-message"
                className="flex items-center gap-2 font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#b0b3b4] uppercase"
              >
                PROJECT DETAILS *
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputBase} resize-none ${errors.message ? inputError : inputValid}`}
                placeholder="Describe your project - location, size, budget, timeline..."
              />
              {errors.message && <FieldError id="contact-message-error" message={errors.message} />}
            </div>

            {/* TCPA SMS Consent Checkbox (Optional) */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/3 border border-white/5">
              <input
                type="checkbox"
                id="sms_consent"
                name="sms_consent"
                value="true"
                checked={form.smsConsent}
                onChange={(e) => setForm({ ...form, smsConsent: e.target.checked })}
                className="mt-0.5 rounded border-gray-700 text-[#E6C687] focus:ring-[#E6C687] bg-black/40 cursor-pointer"
              />
              <label htmlFor="sms_consent" className="text-[11px] text-[#b0b3b4] leading-relaxed cursor-pointer">
                <span className="font-semibold text-[#E6C687]">(Optional)</span> I consent to receive SMS updates regarding my inquiry from Realmaxville. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out. See our{" "}
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
              disabled={submitting || sent}
              className="w-full h-11 rounded-lg font-(--font-space-mono) text-sm tracking-widest transition-all active:scale-[0.98] disabled:cursor-not-allowed relative overflow-hidden"
              style={{
                backgroundColor: sent ? "rgba(230,198,135,0.15)" : "#E6C687",
                color: sent ? "#E6C687" : "#1a1200",
                border: sent ? "1px solid rgba(230,198,135,0.4)" : "none",
                boxShadow: submitting ? "0 0 20px rgba(230,198,135,0.2)" : undefined,
              }}
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="w-4 h-4 border-2 border-on-accent/30 border-t-on-accent rounded-full animate-spin" />
                  SENDING MESSAGE...
                </span>
              ) : sent ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  MESSAGE SENT — WE&apos;LL BE IN TOUCH!
                </span>
              ) : (
                "SEND MESSAGE →"
              )}
            </button>

            <div className="flex items-center justify-center gap-4 pt-1">
              <div className="h-px flex-1 bg-white/5" />
              <p className="font-(--font-space-mono) text-[9px] tracking-widest text-[#555] text-center whitespace-nowrap">
                TYPICALLY RESPOND WITHIN 24 HOURS · 100% CONFIDENTIAL
              </p>
              <div className="h-px flex-1 bg-white/5" />
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
