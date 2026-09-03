/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#080C10",
          900: "#0D1117",
          800: "#141C25",
          750: "#192232",
          700: "#1E2A38",
          600: "#2A3A50",
          500: "#3A5068",
        },
        copper: {
          300: "#F0C090",
          400: "#E8A060",
          500: "#C87941",
          600: "#A0602E",
          700: "#7A4820",
        },
        emerald: {
          300: "#5FFFCC",
          400: "#00E8AE",
          500: "#00C896",
          600: "#009E76",
          700: "#00785A",
        },
        ivory: {
          50: "#FAF8F6",
          100: "#F2EDE8",
          200: "#DED8D0",
          300: "#C8C0B8",
          400: "#A89890",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      backgroundImage: {
        "copper-gradient": "linear-gradient(135deg, #E8A060 0%, #C87941 50%, #A0602E 100%)",
        "emerald-gradient": "linear-gradient(135deg, #00E8AE 0%, #00C896 100%)",
        "slate-gradient": "linear-gradient(180deg, #080C10 0%, #0D1117 100%)",
        "hero-mesh": "radial-gradient(ellipse at 20% 50%, rgba(200,121,65,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,200,150,0.08) 0%, transparent 50%)",
      },
      boxShadow: {
        "copper-glow": "0 0 25px rgba(200, 121, 65, 0.3), 0 0 50px rgba(200, 121, 65, 0.1)",
        "emerald-glow": "0 0 25px rgba(0, 200, 150, 0.3), 0 0 50px rgba(0, 200, 150, 0.1)",
        "card-slate": "0 4px 32px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255,255,255,0.04) inset",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
