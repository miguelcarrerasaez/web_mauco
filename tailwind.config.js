/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006380',
          strong: '#004c5f',
          light: '#0d8bb0',
        },
        participant: '#f08700',
        researcher: '#08b3e7',
        surface: {
          DEFAULT: '#ffffff',
          warm: '#f4efde',
          muted: '#f7f4ed',
        },
        ink: {
          DEFAULT: '#1e1f26',
          muted: '#5a5f6b',
        },
        border: '#e5e1d8',
        footer: '#1e1f26',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        reading: '48rem',
        container: '80rem',
      },
    },
  },
  plugins: [],
};
