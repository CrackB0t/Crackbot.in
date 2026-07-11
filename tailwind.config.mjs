export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        crackbot: {
          950: '#030712',
          900: '#0a0f1a',
          850: '#0d1421',
          800: '#111d2e',
          750: '#142537',
          700: '#16273e',
          600: '#1e3a5f',
          500: '#2d5a8a',
          400: '#4a8fc7',
          300: '#7ac0e8',
          200: '#a8d8f0',
          100: '#d4ebf8',
          50: '#eaf5fc',
        },
        terminal: {
          green: '#00d4aa',
          'green-dim': '#00b894',
          'green-bright': '#55efc4',
          amber: '#ffb800',
          red: '#ff4757',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0,212,170,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.03) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
};