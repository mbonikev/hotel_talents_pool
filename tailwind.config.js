export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        "dark-text": "#202124",
        "card-bg": "#f5f8fa",
        "main-color": "#1178a5",
      }
    },
  },
  plugins: [],
}
