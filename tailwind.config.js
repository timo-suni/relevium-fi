/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ["OpenSans", "sans"],
      logo: ["Jost", "sans"],
    },
    letterSpacing: {
      widest: '.5em',
    },
    container: {
      center: true,
    },
    extend: {

    },
  },
  plugins: [require("daisyui")],
}
