import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 text-center" aria-labelledby="notfound-heading">
      <div className="space-y-8">
        <div className="text-[#FFD700] font-extrabold text-[120px] md:text-[200px] leading-none neon-text-glow select-none">
          404
        </div>
        <h1 id="notfound-heading" className="text-3xl md:text-4xl font-extrabold text-[#e5e2e1]">
          PAGE NOT FOUND
        </h1>
        <p className="text-[#b0b3b4] max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#FFD700] text-on-accent px-10 py-4 rounded-full font-(--font-space-mono) text-xs tracking-[0.2em] uppercase glow-hover transition-all active:scale-95"
        >
          RETURN HOME
        </Link>
        <div className="flex items-center justify-center gap-6 pt-2">
          <Link href="/contact" className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700]/70 hover:text-[#FFD700] transition-colors uppercase">
            Contact Us
          </Link>
          <span className="text-outline-variant" aria-hidden="true">·</span>
          <Link href="/about" className="font-(--font-space-mono) text-[10px] tracking-[0.2em] text-[#FFD700]/70 hover:text-[#FFD700] transition-colors uppercase">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
