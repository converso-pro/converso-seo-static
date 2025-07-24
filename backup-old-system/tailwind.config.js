/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./output/**/*.html",
    "./build.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      boxShadow: {
        'neumorphic': '8px 8px 16px 0 rgba(0, 0, 0, 0.1), -8px -8px 16px 0 rgba(255, 255, 255, 0.5)',
        'neumorphic-inset': 'inset 8px 8px 16px 0 rgba(0, 0, 0, 0.1), inset -8px -8px 16px 0 rgba(255, 255, 255, 0.5)',
        'neumorphic-sm': '4px 4px 8px 0 rgba(0, 0, 0, 0.1), -4px -4px 8px 0 rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
      }
    },
  },
  plugins: [],
}