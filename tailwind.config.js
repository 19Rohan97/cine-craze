/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      cc1: "#FC4747",
      cc2: "#10141E",
      cc3: "#5A698F",
      cc4: "#161D2F",
      white: "#ffffff",
      transparent: "#ffffff00",
      overlay: "#10141ee8",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    extend: {
      fontSize: {
        hl: "32px",
        hm: "24px",
        hs: "24px",
        hxs: "18px",
        bm: "15px",
        bs: "13px",
      },
    },
  },
  plugins: [],
};
