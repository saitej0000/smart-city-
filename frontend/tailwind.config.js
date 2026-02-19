/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1A202C',
          blue: '#3182CE',
          light: '#F7FAFC',
          orange: '#ED8936'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Lato', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        md: '0.625rem',
        lg: '0.875rem'
      },
      boxShadow: {
        soft: '0 8px 24px -12px rgba(26,32,44,0.28)'
      }
    }
  },
  plugins: []
};
