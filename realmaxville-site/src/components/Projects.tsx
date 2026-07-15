"use client";
import ScrollReveal from "./ScrollReveal";

const projects = [
  { name: "Mrs Margaret", location: "Lagos, Nigeria", type: "RESIDENTIAL", year: "2023", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2jGqUpwp8Fc-JKm0Z5fx1sgnzc3bld7-QNdh9beRC-_khhAJUKoFuQlRVTMmLr4kXjFeYoEHrzeMhRAOjiAJhOHdYPMua0Uc5k4BzLE1Bi1iuUZDtNgkIPJ5-KejMkPaVjxFq3hiRgHSP_N4oBViBoC8LC4doVEwrFRnei-5GoG99ouaHvzKeLm4WAEqpEz2vhq9pt1Ch52ERh2rwubtzGgPzW7TT9o3QbD_JJDSmxLNovgT0Wz3A-hLD716AT9o-FqkNaxAx4hkR" },
  { name: "Blocks of Flat", location: "Lagos, Nigeria", type: "MULTI-FAMILY", year: "2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMlNWB6n0dn55bKNUO8roQf2S5tYfW7skX9qtfI1LcsLUZ0umBtZBEOd_DflnG3rvbvVRzznyS23NZPf_oveeI-8CN8smd-5Jfj3U84IALaeXDcx9TpW-joHuGNTJXJfRH484b1m6xQZcf6mUUmcVTTVcKc5pm9GTfQvzQuFB-ZN1XP9iq3c60QARPSsk5q8buK4YKkc22ylEKHgJltvQ0A3jkYu6wLYlQ-B-6Z8PcfhYBL8wxDEbv9KKCugnd1h3bwsLYCkIpbDMp" },
  { name: "Double Face Home", location: "Lagos, Nigeria", type: "RESIDENTIAL", year: "2023", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArrGgkgVhORjf9ZzeA50T-QPy1GFNoPNUI3j7lHqtRWsTlu7R6z7Z3_uHGuExD9lwHnT4SbsKY_jR76TU57Y-1K3Wxp4WsbDzE8xYXiWmGFaZNmr5wNz4pIAeEP4dvIGZ3fYDas0xqGeweDzkUgnU6BQmbaY8ARfioi-n2pCa12e_uHHN-b_94rAZ3EJDz_VNVOPrv0koiw9715PggWOUqSn4KXTsx6-kvfMKu6oZmmXIqO3_zx8cqYc7DYBm5me2A45lVg0ek5FGD" },
  { name: "Transient Hospital", location: "Enugu, Nigeria", type: "HEALTHCARE", year: "2022", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAoE4FIjdI8KBv9_VEiP9tPpRPvttSBFdOQinZv7SzdXzu-0K15cQwI-bAbQUqgLeT1BV3rPMExLn47LX7pgAqRpDOG_cFRHsPqa0RBIJhN-uuvbUeDEszvKMSpasp9s-S8jtOHtEFKAgRr6eLbIjKdNUvwVRkhosssOobELo6USsLDnc7sMP40SVyWtX22EyVuuAnd6avnBWdwOev_hBHMxsg7kE4PicKL8-GTP8S6cwbtrOC6SB6JIXzLqiCXAA1alkcNYMTeD8r" },
  { name: "Kaduna Conference Center", location: "Kaduna, Nigeria", type: "COMMERCIAL", year: "2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu45kVKDmSIoCp3soavUizte4gSji9JpIjkOsgTGv-twFzWGzWmOKd7jRFr167E7fpgto6u0V68B3cVTWduv2qNXNiI74K7eOYTXVu_KucmY3nop-WS9uYDT2Q6gY6_gZhcJCWPW3rAOdzfLjIPTugfMobZIYRfrMAQd1JpqHwnzSTn08u8euAlPk0rHvS8hdl1YJo6xoCh6DA4pmLCwH3mxTNg7SV1FC23ZiR-02VS6C4u2u8bFIPWEGRTkBWfYABd2snlfDdDWGP" },
  { name: "Mabushi Villa", location: "Abuja, Nigeria", type: "RESIDENTIAL", year: "2023", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIThJcwosk8XV05bEvRJyCgsfLc04UZtqoxhaHn8b3iBDi-a405DG0nHIBgHAtca0rUdY7uHsYocltGwYXknpc6msQW-NYl-EsPvXhBKXkHNIpUTwIKnLR4TT0Y8ONe6NtKubhdhMCWjVCiKEDWYdRVzG_5szYq14EHD4wVEDeZNuonfYwBOihGCGRC6q0YMUJYaNKOtMSYL1wI-sMR2yRdYx945Oww9E0uDxwJ2B-eHsX50mnkzymxU5kgA52O7WW17Z48LlZWrzh" },
  { name: "Danke Gott Project Jade", location: "Lagos, Nigeria", type: "RESIDENTIAL", year: "2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxpNyTynTZN2F2tq8Cjf893i7wTX89aaBp7doFDQu48QL30GqlWHVE1jZwtf_5WAnHfw42ZaKceqAWI3cmI27D_hoK1ddBVzMRIBMeo0Hf89x6W_NMaw_pz8WKW8ch4rvmCIPteYQ0BLSYiUlgI2cQVHIUY5FS6zNKw1yVmZnYBUtZvykxjZfihYWAU78gsN5NvCz3JtVouN6x6BnydaCuOhTCfx7MeNwut6BbCWtuf7tXp_76VZs6fVFXlEwI8ABlO92o90RhdTPQ" },
  { name: "Residential Apartment", location: "Lagos, Nigeria", type: "RESIDENTIAL", year: "2023", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgrKZ1x7sluujZMQxej_ZRjlMnMAKEGmp9TPBsYaEeyPdnXUmFgCVLEh4z2ujyHMG08S9Fnk42tadTVTwRZU9BIGTjMJLlS0dKYXyjElz-OINHJv1sluwTZ8hlze3SLJRO-LgkvBQoy8Y0G7AUlRQ_yl-OcB4UbJmUYWFhvLEkakUGMRyypOsSwbqtv7ioa8M1eAX2vNtzHEQnRAo8LOBjWGP0Uj6nQatLtWMi_nRNRnX3gPogWmavv-QeKFMAM99GnkDQUWstaz-Q" },
];

export default function Projects() {
  return (
    <section className="py-32 bg-[#0e0e0e] overflow-hidden" aria-labelledby="projects-heading">
      <div className="px-8 lg:px-12 max-w-7xl mx-auto w-full space-y-20">
        <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 id="projects-heading" className="text-4xl md:text-[48px] font-extrabold uppercase tracking-tight">
              OUR FEATURED PROJECTS
            </h2>
            <div className="w-24 h-1 bg-[#c7f300] mx-auto" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p) => (
              <article key={p.name} className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer">
                <img
                  src={p.img}
                  alt={`${p.name} - ${p.type} project in ${p.location}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <p className="text-[#c7f300] font-[var(--font-space-mono)] text-[10px] tracking-[0.2em]">{p.type}</p>
                  <h4 className="text-xl font-bold mt-1 group-hover:text-[#c7f300] transition-colors">{p.name}</h4>
                  <div className="flex justify-between items-center mt-4 border-t border-white/10 pt-4">
                    <span className="text-xs text-[#b0b3b4]">{p.location} · {p.year}</span>
                    <svg className="w-4 h-4 text-[#c7f300] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>

        <div className="text-center pt-12">
          <button className="border border-[#c7f300] text-[#c7f300] px-12 py-4 rounded-full font-[var(--font-space-mono)] text-xs tracking-[0.2em] uppercase hover:bg-[#c7f300] hover:text-[#171e00] transition-all">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}
