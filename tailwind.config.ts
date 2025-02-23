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
        primaryBlue: '#005293',
        primaryYellow: '#fecb00',
        regalBlue: '#243c5a',
        backgroundGray: '#f8f8f8',
        swedishYellow: 'rgb(252 211 77 / var(--tw-bg-opacity, 1))'
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '12': '12px',
      }
    },
  },
  plugins: [],
} satisfies Config;