import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#6E5191'
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        zyHeaven: ['ZYHeaven', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
} satisfies Config;
