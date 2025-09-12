/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': {
          'dark': '#C53C44',      // أحمر داكن للعناوين والخطوط الرئيسية
          'medium': '#B85C6E',    // أحمر متوسط للتفاعلات والتأثيرات
          'light': '#C67A8A',     // أحمر فاتح للمحاور والحدود
          'pink': '#F5E6EA',      // وردي فاتح كخلفية للرسم البياني
          'white': '#FFFFFF',     // أبيض للشبكة والخلفيات
        }
      }
    },
  },
  plugins: [],
}