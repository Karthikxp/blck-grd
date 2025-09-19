import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'roboto-mono': ['var(--font-roboto-mono)', 'monospace'],
        'gacor': ['serif'], // Fallback for Gacor Personal Use
        'anderson': ['system-ui', 'sans-serif'], // Fallback for Anderson Grotesk
      },
      fontSize: {
        'figma-xl': 'clamp(18px, 2.85vw, 36.47px)',
        'figma-lg': 'clamp(12px, 1.53vw, 19.62px)',
        'figma-md': 'clamp(8px, 0.875vw, 11.21px)',
        'figma-sm': 'clamp(6px, 0.681vw, 8.73px)',
        'figma-xs': 'clamp(5px, 0.486vw, 6.22px)',
        'figma-tiny': 'clamp(4px, 0.467vw, 5.98px)',
      },
      lineHeight: {
        'figma-xl': '1.883em',
        'figma-lg': '1.319em',
        'figma-md': '1.319em',
        'figma-sm': '0.986em',
        'figma-xs': '1.883em',
      },
      spacing: {
        '1280': '1280px',
        '832': '832px',
        '853': '853.33px',
      }
    },
  },
  plugins: [],
} satisfies Config;