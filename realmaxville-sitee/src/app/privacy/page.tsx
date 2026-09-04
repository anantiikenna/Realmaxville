import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Realmaxville",
  description: "Realmaxville Privacy Policy detailing data collection, cookie policy, TCPA SMS disclosures, and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex-grow">
        <div className="space-y-8">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#E6C687] uppercase tracking-widest">Legal & Compliance</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-2">Privacy Policy</h1>
            <p className="text-xs text-gray-400 mt-2 font-mono">Last Updated: August 2026</p>
          </div>

          <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#E6C687] font-display">1. Introduction</h2>
              <p>
                Realmaxville (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, submit consultation requests, or interact with our architectural services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#E6C687] font-display">2. Information We Collect</h2>
              <p>We may collect personal information that you voluntarily provide to us when expressing interest in our architectural design or construction services, including:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-400">
                <li>Full name and contact information (email address, phone/WhatsApp number).</li>
                <li>Project preferences, proposed site locations, and investment budgets.</li>
                <li>Communication records and consultation notes.</li>
                <li>Device data, IP address, and cookie choices via web browser interaction.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#E6C687] font-display">3. How We Use Your Information</h2>
              <p>We use the collected information for specific, legitimate business purposes, including:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-400">
                <li>Scheduling executive architectural and engineering consultations.</li>
                <li>Providing customized project proposals, blueprints, and milestone updates.</li>
                <li>Improving website functionality and client experience.</li>
                <li>Complying with statutory reporting and legal obligations.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#E6C687] font-display">4. SMS Communications & TCPA Compliance</h2>
              <p>
                If you opt-in to receive SMS notifications via our contact form (by selecting the optional consent checkbox), we may send you project updates, scheduling confirmations, and administrative messages.
              </p>
              <div className="p-4 rounded-xl border border-[#E6C687]/20 text-xs space-y-2 text-gray-300 bg-white/5">
                <p><strong className="text-[#E6C687]">SMS Consent Terms:</strong> Consent to receive text messages is completely voluntary and is NOT required as a condition to purchase or commission any service.</p>
                <p><strong className="text-[#E6C687]">Frequency & Rates:</strong> Message frequency varies according to your project engagement. Standard message and data rates may apply.</p>
                <p><strong className="text-[#E6C687]">Opt-Out:</strong> You may opt-out of SMS notifications at any time by replying &quot;STOP&quot; to any text message or emailing admin@realmaxville.com.</p>
                <p><strong className="text-[#E6C687]">Third-Party Sharing:</strong> We do NOT sell, rent, or trade your SMS consent or phone numbers with third parties for promotional or marketing purposes.</p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#E6C687] font-display">5. Cookie Policy</h2>
              <p>
                Our website uses essential cookies for site functionality and security. Non-essential analytical cookies are only activated if you accept all cookies via our Cookie Consent banner. You can manage or revoke your consent preferences at any time by clearing your browser cookies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#E6C687] font-display">6. Data Security</h2>
              <p>
                We implement robust security measures including encryption, access controls, and security headers (CSP, HSTS, frame options) to protect your personal data from unauthorized access or disclosure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#E6C687] font-display">7. Contact Us</h2>
              <p>If you have questions regarding this Privacy Policy or data privacy rights, please contact our legal desk:</p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
                <p className="text-white font-bold">Realmaxville Legal & Data Officer</p>
                <p>Address: 4a, Ogombo Rd, Opp Abraham Adesanya Estate, Eti-Osa, Lagos, Nigeria</p>
                <p>Email: admin@realmaxville.com | Phone: +234 808 041 9259</p>
              </div>
            </section>
          </div>

          <div className="pt-8 border-t border-white/10 flex gap-4">
            <Link href="/" className="text-xs font-mono text-[#E6C687] hover:underline">← Back to Homepage</Link>
            <Link href="/terms" className="text-xs font-mono text-gray-400 hover:text-white">View Terms of Service →</Link>
          </div>
        </div>
      </main>
  );
}
