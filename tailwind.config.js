/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'raizing-teal': {
          50: '#e6f4f5',
          100: '#b3d9dc',
          200: '#80bec3',
          300: '#4da3aa',
          400: '#1a8891',
          500: '#005f6b', // Base dark teal
          600: '#004a52',
          700: '#003539',
          800: '#002026',
          900: '#001a1d', // Darkest teal (from logo background)
        },
        'raizing-cream': {
          50: '#fefcf9',
          100: '#fcf8f0',
          200: '#f9f1e1',
          300: '#f6ead2',
          400: '#f3e3c3',
          500: '#f0dcb4', // Base cream/off-white
          600: '#e8d19f',
          700: '#d4b882',
          800: '#c09f65',
          900: '#ac8648',
        },
        'raizing-maroon': {
          50: '#f5e8e8',
          100: '#e6c2c2',
          200: '#d79c9c',
          300: '#c87676',
          400: '#b95050',
          500: '#aa2a2a', // Base maroon
          600: '#882222',
          700: '#661a1a',
          800: '#441212',
          900: '#220a0a', // Darkest maroon (from logo)
        },
      },
    },
  },
  plugins: [],
};
