module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        peri: '#9114c7',
        antracite: '#181818',
        sand: '#f0ede9',
      },
      fontFamily: {
        Exo: ["'Exo 2'", 'sans-serif'],
        Roboto: ["'Roboto'", 'sans-serif'],
        Lato: ["'Lato'", 'sans-serif'],
        Prompt: ["'Prompt'", 'sans-serif'],
        Raleway: ["'Raleway'", 'sans-serif'],
        Robotomono: ["'Roboto Mono'", 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  corePlugins: {
    aspectRatio: false,
  },
}
