// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-orange-left': 'radial-gradient(ellipse at left center, #ff9a02 0%, #ffb011 25%, #ffc520 50%, #ffe738 75%, #ffcd25 100%)',
      },
    },
  },
  plugins: [],
};
