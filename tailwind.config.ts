import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const {
  ...filteredColors
} = colors;

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ...filteredColors,
        blue_dark: "#0d3b66",
        blue_light: "#1767b3",
        royal: "#c9ac8c",
        dark: "#191514",
      },
    },
  },
  plugins: [],
};

export default config;
