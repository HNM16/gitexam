/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '390px',
      // => @media (min-width: 640px) { ... }

      'md': '440px',
      // => @media (min-width: 768px) { ... }

      'lg': '680px',
      // => @media (min-width: 1024px) { ... }

      'xl': '880px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}