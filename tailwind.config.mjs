/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vermelho: 'var(--vermelho)',
      },
      fontFamily: {
        'julius': ['"Julius Sans One"', 'sans-serif'],
        'inter' : ['"Inter", serif'],
      },
    },
  },
  plugins: [],
};
