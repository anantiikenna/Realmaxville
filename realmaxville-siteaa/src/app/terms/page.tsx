import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Realmaxville",
  description: "Realmaxville Terms of Service governing architectural commissions, website use, intellectual property, and client engagements.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#07080A] text-white flex flex-col justify-between">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex-grow">
        <div className="space-y-8">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#E6C687] uppercase tracking-widest">Legal & Governance</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-2">Terms of Service</h1>
            <p className="text-xs text-gray-400 mt-2 font-mono">Last Updated: August 2026</p>
          </div>

          <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#E6C687] font-display">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Realmaxville website and digital portals, you agree to be bound by these Terms of Service and all applicable laws and regulations of the Federal Republic of Nigeria. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#E6C687] font-display">2. Architectural & Engineering Services</h2>
              <p>
                All project visual renders, 3D models, architectural drawings, and engineering specifications presented on this site are indicative conceptual works executed by Realmaxville. Official contractual commissions are governed by binding, executed Master Services Agreements (MSA) and formal architectural contracts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#E6C687] font-display">3. Intellectual Property Rights</h2>
              <p>
                The intellectual property, architectural designs, 3D visual renderings, trade logos, and engineering documentation contained on this website are protected by copyright, trademark, and international IP laws. Unauthorized reproduction or redistribution without explicit written consent is strictly prohibited.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#E6C687] font-display">4. Limitation of Liability</h2>
              <p>
                Realmaxville shall not be held liable for any indirect, consequential, or incidental damages arising out of the use of or inability to use the materials on this website. Site content is provided on an &quot;as is&quot; basis for informational and portfolio representation purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#E6C687] font-display">5. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, and any disputes shall be subject to the exclusive jurisdiction of the courts in Lagos State.
              </p>
            </section>
          </div>

          <div className="pt-8 border-t border-white/10 flex gap-4">
            <Link href="/" className="text-xs font-mono text-[#E6C687] hover:underline">← Back to Homepage</Link>
            <Link href="/privacy" className="text-xs font-mono text-gray-400 hover:text-white">View Privacy Policy →</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
