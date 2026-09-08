/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          navy: '#0B192C',
          'navy-dark': '#060E18',
          'navy-light': '#1E293B',
          'navy-subtle': '#0F172A',
          gold: '#D97706',
          'gold-light': '#F59E0B',
          'gold-subtle': '#FEF3C7',
          'gold-muted': '#B45309',
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          card: '#FFFFFF',
          border: '#E2E8F0',
          'border-subtle': '#F1F5F9',
          text: '#0F172A',
          'text-muted': '#64748B',
          'text-dim': '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(11, 25, 44, 0.05), 0 1px 2px -1px rgba(11, 25, 44, 0.03)',
        'card': '0 4px 6px -1px rgba(11, 25, 44, 0.04), 0 2px 4px -2px rgba(11, 25, 44, 0.03)',
        'hover': '0 10px 25px -3px rgba(11, 25, 44, 0.08), 0 4px 6px -4px rgba(11, 25, 44, 0.03)',
        'elevated': '0 20px 25px -5px rgba(11, 25, 44, 0.1), 0 8px 10px -6px rgba(11, 25, 44, 0.04)',
      }
    },
  },
  plugins: [],
}
