/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    /^bg-/,
    /^to-/,
    /^from-/,
    'from-gray-400',
    'to-gray-700',
    'from-green-400',
    'to-green-700',
    'from-blue-400',
    'to-blue-700',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
