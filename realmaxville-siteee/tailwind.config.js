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
        obsidian: {
          950: '#07080A',
          900: '#0E1015',
          850: '#13161F',
          800: '#181C27',
          700: '#222836',
          600: '#323B4E',
        },
        champagne: {
          400: '#F4E4C1',
          500: '#E6C687',
          600: '#D4AF37',
          700: '#B89428',
        },
        neon: {
          lime: '#C7F300',
          emerald: '#00F5A0',
          cyan: '#00E5FF',
        }
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['var(--font-cinzel)', 'serif'],
        mono: ['var(--font-space-grotesk)', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F4E4C1 0%, #E6C687 50%, #B89428 100%)',
        'lime-gradient': 'linear-gradient(135deg, #C7F300 0%, #00F5A0 100%)',
        'dark-glass': 'linear-gradient(180deg, rgba(20, 24, 33, 0.75) 0%, rgba(10, 12, 17, 0.85) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(230, 198, 135, 0.25)',
        'lime-glow': '0 0 25px rgba(199, 243, 0, 0.3)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 25s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out both',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 10px rgba(230, 198, 135, 0.3))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(230, 198, 135, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
