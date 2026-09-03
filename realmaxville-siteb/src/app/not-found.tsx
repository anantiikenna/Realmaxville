import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080C10] flex flex-col items-center justify-center text-center px-4 pt-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(200,121,65,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 space-y-8 max-w-lg mx-auto">
          <div className="flex justify-center">
            <div className="p-5 rounded-full bg-copper-500/10 border border-copper-500/20">
              <Compass className="w-10 h-10 text-copper-400" />
            </div>
          </div>

          <div>
            <p className="font-serif text-8xl font-light text-copper-500/30 leading-none mb-2">404</p>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-ivory-100 mb-3">
              Page not found
            </h1>
            <p className="text-ivory-300/50 text-base leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-copper-500 text-[#080C10] font-semibold text-sm hover:bg-copper-400 transition-all hover:shadow-copper-glow"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Homepage
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-ivory-300/70 text-sm hover:border-copper-500/40 hover:text-ivory-100 transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
