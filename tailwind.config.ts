import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
