/** @type {import('tailwindcss').Config} */
const withOpacity = variable => `rgb(var(${variable}) / <alpha-value>)`;

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: withOpacity("--color-bg"),
          muted: withOpacity("--color-bg-muted")
        },
        text: {
          DEFAULT: withOpacity("--color-text"),
          dim: withOpacity("--color-text-dim")
        },
        accent: {
          DEFAULT: withOpacity("--color-accent"),
          hover: withOpacity("--color-accent-hover")
        },
        border: withOpacity("--color-border")
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
};
