import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#FFF9F1",
          beige: "#E9DDC6",
          dark: "#1F4E5F",
          green: "#8BB8A8",
          coral: "#E48A6E",
        },
      },
    },
  },
  plugins: [],
};

export default config;
