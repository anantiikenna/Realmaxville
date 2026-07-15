import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Realmaxville",
  description:
    "Get in touch with Realmaxville for architectural design, construction and renovation services.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="page-hero">
        <div className="absolute inset-0 data-grid-bg opacity-30" />
        <div className="section-inner" style={{ position: "relative", zIndex: 10 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              borderLeft: "4px solid #c7f300",
              paddingLeft: "2rem",
              maxWidth: "50rem",
            }}
          >
            <span className="font-(--font-space-mono)" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#c7f300" }}>
              GET IN TOUCH
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 1 }}>
              CONTACT <span className="neon-text-glow" style={{ color: "#c7f300" }}>US</span>
            </h1>
            <p style={{ color: "#c4c7c7", fontSize: "1.1rem", maxWidth: "36rem", lineHeight: 1.7 }}>
              At RealMaxVille we give priority to our valued customers and how to provide better services for them while adding value to the society at large.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* WhatsApp CTA */}
      <section style={{ padding: "5rem 0", backgroundColor: "#0e0e0e" }}>
        <div className="section-inner" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, textTransform: "uppercase" }}>
            PREFER TO CHAT? <span style={{ color: "#c7f300" }}>WHATSAPP US</span>
          </h2>
          <p className="font-(--font-space-mono)" style={{ marginTop: "1rem", color: "#8e9192", fontSize: "0.7rem", letterSpacing: "0.1em" }}>
            GET INSTANT RESPONSES ON WHATSAPP
          </p>
          <a
            href="https://wa.me/2348080419259"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2rem",
              paddingLeft: "2.5rem",
              paddingRight: "2.5rem",
              height: "3.5rem",
              borderRadius: 9999,
              backgroundColor: "#16a34a",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textDecoration: "none",
              transition: "background 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#22c55e";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px rgba(34,197,94,0.4)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#16a34a";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            CHAT ON WHATSAPP →
          </a>
        </div>
      </section>
    </>
  );
}
