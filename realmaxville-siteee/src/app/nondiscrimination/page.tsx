import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nondiscrimination & Equity Notice | Realmaxville",
  description: "Realmaxville commitment to non-discrimination, equal opportunity, and accessible architectural engineering.",
};

export default function NondiscriminationPage() {
  return (
    <div className="min-h-screen bg-[#07080A] text-white flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex-grow">
        <div className="space-y-8">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#E6C687] uppercase tracking-widest">Compliance Notice</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-2">Nondiscrimination Statement</h1>
            <p className="text-xs text-gray-400 mt-2 font-mono">Last Updated: August 2026</p>
          </div>

          <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#E6C687] font-display">Policy Statement</h2>
              <p>
                Realmaxville complies with applicable federal, state, and international equality standards and does not discriminate on the basis of race, color, national origin, age, disability, gender identity, religion, or sexual orientation in its architectural practices, employment policies, or client engagements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#E6C687] font-display">Accessibility & Universal Design</h2>
              <p>
                We are dedicated to incorporating universal access and ADA-aligned engineering into our masterplans, residential developments, and public infrastructure projects. We ensure that our physical and digital services remain accessible to all individuals.
              </p>
            </section>
          </div>

          <div className="pt-8 border-t border-white/10 flex gap-4">
            <Link href="/" className="text-xs font-mono text-[#E6C687] hover:underline">← Back to Homepage</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
