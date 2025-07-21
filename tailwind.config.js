/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'], // Default font
        serif: ['Playfair Display', 'serif'], // For formal text
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
