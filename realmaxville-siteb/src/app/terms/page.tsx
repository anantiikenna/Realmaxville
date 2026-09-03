import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Realmaxville Terms of Service governing architectural commissions, website use, intellectual property, and client engagements.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C10] text-[#F2EDE8] flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex-grow">
        <div className="space-y-8">
          <div className="border-b border-white/10 pb-8">
            <span className="text-xs font-mono text-copper-400 uppercase tracking-widest">Legal &amp; Governance</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-ivory-100 mt-3">Terms of Service</h1>
            <p className="text-xs text-ivory-400/40 mt-2 font-mono">Last Updated: August 2026</p>
          </div>

          <div className="space-y-6 text-sm text-ivory-300/60 leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-semibold text-copper-400">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Realmaxville website and digital portals, you agree to be bound by these Terms of Service and all applicable laws and regulations of the Federal Republic of Nigeria. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-semibold text-copper-400">2. Architectural & Engineering Services</h2>
              <p>
                All project visual renders, 3D models, architectural drawings, and engineering specifications presented on this site are indicative conceptual works executed by Realmaxville. Official contractual commissions are governed by binding, executed Master Services Agreements (MSA) and formal architectural contracts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-semibold text-copper-400">3. Intellectual Property Rights</h2>
              <p>
                The intellectual property, architectural designs, 3D visual renderings, trade logos, and engineering documentation contained on this website are protected by copyright, trademark, and international IP laws. Unauthorized reproduction or redistribution without explicit written consent is strictly prohibited.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-semibold text-copper-400">4. Limitation of Liability</h2>
              <p>
                Realmaxville shall not be held liable for any indirect, consequential, or incidental damages arising out of the use of or inability to use the materials on this website. Site content is provided on an &quot;as is&quot; basis for informational and portfolio representation purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-semibold text-copper-400">5. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, and any disputes shall be subject to the exclusive jurisdiction of the courts in Lagos State.
              </p>
            </section>
          </div>

          <div className="pt-8 border-t border-white/10 flex gap-4">
            <Link href="/" className="text-xs font-mono text-copper-400 hover:underline">← Back to Homepage</Link>
            <Link href="/privacy" className="text-xs font-mono text-ivory-400/40 hover:text-ivory-100">View Privacy Policy →</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
