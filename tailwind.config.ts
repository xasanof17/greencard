import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./layouts/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./shared/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#245580",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(180deg, #337AB7 0%, #265A88 100%",
      },
    },
  },
  plugins: [],
};
export default config;
