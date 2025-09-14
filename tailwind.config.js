/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // NSR-PC Color Palette - Updated from Navbar
        primary: {
          DEFAULT: "#2C6D90", // الأزرق الأساسي من الناف بار
          50: "#F0F8FF",
          100: "#E0F2FF",
          200: "#BAE6FF",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#2C6D90",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        secondary: {
          DEFAULT: "#749BC2", // الأزرق الرمادي من الناف بار
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#749BC2",
          600: "#64748B",
          700: "#475569",
          800: "#334155",
          900: "#1E293B",
        },
        dark: {
          DEFAULT: "#0A0A0A", // الخلفية الداكنة من الناف بار
          50: "#F9F9F9",
          100: "#F3F3F3",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#0A0A0A",
        },
        neutral: {
          DEFAULT: "#F9F3EF", // النص الأساسي من الناف بار
          50: "#FEFCFA",
          100: "#FEF7F0",
          200: "#FDEDE0",
          300: "#FBDCC7",
          400: "#F8C4A6",
          500: "#F9F3EF",
          600: "#E5D7D0",
          700: "#D1BBB1",
          800: "#BD9F92",
          900: "#A98373",
        },
        accent: {
          DEFAULT: "#0F3461", // الأزرق الداكن للتفاعل من الناف بار
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#0F3461",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
      },
      backgroundColor: {
        "nsr-dark": "#0A0A0A",
        "nsr-light": "#F9F3EF",
        "nsr-primary": "#2C6D90",
        "nsr-secondary": "#749BC2",
        "nsr-neutral": "#F9F3EF",
        "nsr-accent": "#0F3461",
      },
      textColor: {
        "nsr-primary": "#2C6D90",
        "nsr-secondary": "#749BC2",
        "nsr-neutral": "#F9F3EF",
        "nsr-accent": "#0F3461",
        "nsr-dark": "#0A0A0A",
        "nsr-light": "#F9F3EF",
      },
      borderColor: {
        "nsr-primary": "#2C6D90",
        "nsr-secondary": "#749BC2",
        "nsr-neutral": "#F9F3EF",
        "nsr-accent": "#0F3461",
      },
    },
  },
  plugins: [],
};