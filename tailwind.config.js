/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitebg: "#FFFFFF",        // Pure white background
        graybg: "#F9FAFB",         // Almost white gray background
        redbg: "#B91C1C",          // Strong red background
        whitetext: "#FFFFFF",      // White text
        blacktext: "#111827",      // Almost black text
      },
    },
  },
  plugins: [],
}
