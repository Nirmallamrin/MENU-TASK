/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/src/assets/IMGmenu0.jpg')", // Update the path accordingly
      },
    },
  },
  plugins: [],
};
