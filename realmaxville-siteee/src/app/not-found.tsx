import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 text-center bg-[#07080A]" aria-labelledby="notfound-heading">
      <div className="space-y-8 max-w-xl mx-auto">
        <div className="text-[#E6C687] font-extrabold text-[100px] sm:text-[160px] leading-none select-none tracking-tight">
          404
        </div>
        <h1 id="notfound-heading" className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          ARCHITECTURAL STRUCTURE NOT FOUND
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
          The requested page or resource does not exist or has been relocated to another enclave.
        </p>
        <div>
          <Link
            href="/"
            className="inline-block bg-[#E6C687] text-black px-8 py-3.5 rounded-full font-mono text-xs tracking-widest font-extrabold uppercase hover:bg-[#D4AF37] transition-all"
          >
            RETURN TO HOMEPAGE
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6 pt-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
          <Link href="/contact" className="hover:text-[#E6C687] transition-colors">
            Contact Desk
          </Link>
          <span>·</span>
          <Link href="/projects" className="hover:text-[#E6C687] transition-colors">
            Projects Portfolio
          </Link>
          <span>·</span>
          <Link href="/about" className="hover:text-[#E6C687] transition-colors">
            About Firm
          </Link>
        </div>
      </div>
    </section>
  );
}
