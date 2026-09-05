/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        slate: '#1e293b',
        paper: '#f8fafc',
        cream: '#fff7ed',
        amber: '#f59e0b',
        amberLight: '#fff7ed',
        emerald: '#059669',
        emeraldLight: '#ecfdf5',
        sky: '#0ea5e9',
        skyLight: '#f0f9ff',
        rose: '#e11d48',
        violet: '#7c3aed',
        stone: '#78716c',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'Cambria', 'serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
