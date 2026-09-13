"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const paymentId = searchParams.get("payment_id");

  return (
    <div className="min-h-screen flex items-center justify-center py-32">
      <div className="section-inner max-w-xl text-center flex flex-col items-center gap-8">
        {/* Success icon */}
        <div className="w-20 h-20 rounded-full bg-[#FFD700]/10 border-2 border-[#FFD700] flex items-center justify-center">
          <svg className="w-10 h-10 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
            PAYMENT <span className="text-[#FFD700]">SUCCESSFUL</span>
          </h1>
          <p className="text-[#b0b3b4] text-base md:text-lg leading-relaxed">
            Thank you for your purchase! Your architectural design plan will be delivered
            to your email within <strong className="text-[#FFD700]">1 hour</strong>.
          </p>
        </div>

        {paymentId && (
          <div className="glass-panel cyber-border rounded-lg p-6 w-full">
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#b0b3b4]">Payment ID</span>
                <span className="text-[#e5e2e1] font-mono text-xs">{paymentId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#b0b3b4]">Status</span>
                <span className="text-[#FFD700] font-bold uppercase">{status || "Succeeded"}</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4 w-full">
          <p className="text-[#b0b3b4] text-sm">
            Check your email (including spam folder) for the plan files.
            If you don&apos;t receive them within an hour, contact us:
          </p>
          <a
            href={`https://wa.me/2348080419259?text=${encodeURIComponent(`Hi, I just purchased a design plan (Payment ID: ${paymentId || "N/A"}). I haven't received the files yet.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta glow-hover w-full justify-center"
          >
            CONTACT US ON WHATSAPP
          </a>
          <Link
            href="/designs"
            className="flex items-center justify-center gap-2 w-full h-12 rounded-full border border-white/10 text-[#b0b3b4] hover:border-[#FFD700]/40 hover:text-[#FFD700] transition-all text-[11px] font-(--font-space-mono) tracking-[0.15em] uppercase"
          >
            BROWSE MORE DESIGNS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DesignSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#b0b3b4]">Loading...</p>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
