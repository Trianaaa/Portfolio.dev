/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'grid-light': "radial-gradient(#e5e7eb_1px, transparent_1px)",
        'grid-dark': "radial-gradient(#27272a_1px, transparent_1px)",
      },
    },
  },
  plugins: [],
}
