/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#ffffff',
        surface: '#f8fafc',
        border: '#e2e8f0',
        primary: '#080808',
        'primary-text': '#ffffff',
        'text-strong': '#0f172a',
        'text-body': '#334155',
        'text-muted': '#64748b',
        'accent-blue': '#2563eb',
        'accent-indigo': '#4f46e5',
        success: '#16a34a',
        warning: '#f59e0b',
        danger: '#dc2626',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
