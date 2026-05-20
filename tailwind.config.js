/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        "bg-primary": "#030712",
        "bg-secondary": "#080c14",
        "bg-tertiary": "#0e1320",
        "text-primary": "#f3f4f6",
        "text-secondary": "#9ca3af",
        "text-muted": "#6b7280",
        primary: "#8b5cf6",
        "primary-dark": "#7c3aed",
        accent: "#06b6d4",
        border: "#1f2937",
        warning: "#f59e0b",
        success: "#10b981",
      },
    },
  },
  plugins: [],
};
