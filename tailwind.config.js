/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f5f7f5',
          100: '#e7ebe7',
          200: '#cfd7cf',
          300: '#b3c2b3',
          400: '#96ad96',
          500: '#7a997a',
          600: '#628062',
          700: '#4a664a',
          800: '#334c33',
          900: '#1c331c',
        },
      },
    },
  },
  plugins: [],
}
