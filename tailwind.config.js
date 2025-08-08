/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0f172a",
        "bg-secondary": "#1e293b",
        "bg-tertiary": "#334155",
        "text-primary": "#f8fafc",
        "text-secondary": "#cbd5e1",
        "text-muted": "#94a3b8",
        primary: "#2563eb",
        "primary-dark": "#1d4ed8",
        accent: "#06b6d4",
        border: "#475569",
        warning: "#f59e0b",
        success: "#10b981",
      },
    },
  },
  plugins: [],
};
