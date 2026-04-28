import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#4f8cff',
          hover: '#6ea1ff',
        },
        ink: {
          DEFAULT: '#1d1d1f',
          muted: '#6e6e73',
        },
        snow: {
          DEFAULT: '#f5f5f7',
          muted: '#a1a1a6',
        },
        canvas: {
          light: '#f5f5f7',
          dark: '#0a0a0b',
        },
      },
      fontFamily: {
        sans: [
          'Inter Variable',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'orb-drift': 'orb-drift 18s ease-in-out infinite',
      },
      keyframes: {
        'orb-drift': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(2%, -3%, 0) scale(1.05)' },
        },
      },
    },
  },
  plugins: [typography],
};
