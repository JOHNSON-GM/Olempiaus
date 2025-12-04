/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand colors from Olympaus Gardens Hotel logo
        brand: {
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e', // Primary green
            600: '#16a34a', // Darker green from logo
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
          bronze: {
            50: '#fef7ed',
            100: '#feebc8',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#cd7c2f', // Primary bronze
            600: '#b45309', // Darker bronze from logo
            700: '#92400e',
            800: '#78350f',
            900: '#451a03',
          },
          emerald: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981', // Emerald from flowing elements
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
          },
          gold: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#d97706', // Gold accents
            600: '#b45309',
            700: '#92400e',
            800: '#78350f',
            900: '#451a03',
          }
        }
      }
    },
  },
  plugins: [],
};
