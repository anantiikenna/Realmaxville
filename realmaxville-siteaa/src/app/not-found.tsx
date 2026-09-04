import Link from "next/link";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center py-32 px-4">
      <div className="text-center space-y-6 max-w-lg mx-auto">
        <div className="w-20 h-20 rounded-2xl glass-gold border border-[#E6C687]/30 flex items-center justify-center mx-auto text-[#E6C687]">
          <Compass className="w-10 h-10 animate-pulse" />
        </div>

        <h1 className="text-7xl font-display font-black text-gold-gradient">404</h1>

        <h2 className="text-2xl font-bold text-white">Architectural Route Not Found</h2>

        <p className="text-sm text-gray-400 leading-relaxed">
          The page or blueprint model you are seeking has been relocated, archived, or does not exist in our active site index.
        </p>

        <div className="pt-4 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#E6C687] to-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-gold-glow"
          >
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
