/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 includes all your app files
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        border: 'var(--color-border)',
        ring: 'var(--color-ring)',
      },
      ringColor: {
        ring: 'var(--color-ring)', // 👈 this fixes ring-ring/50
      },
    },
  },
  plugins: [],
}
