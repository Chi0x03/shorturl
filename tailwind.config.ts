import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "cool-gray": {
        "50": "#f3f6fa",
        "100": "#eaedf5",
        "200": "#d9dfec",
        "300": "#c1c9e0",
        "400": "#a7afd2",
        DEFAULT: "#959bc6",
        "600": "#797cb2",
        "700": "#67689b",
        "800": "#55577e",
        "900": "#494b66",
        "950": "#2a2b3c",
      },
      "cornflower-blue": {
        "50": "#edf3ff",
        "100": "#dfe8ff",
        "200": "#c5d5ff",
        "300": "#a1b9ff",
        DEFAULT: "#758bfd",
        "500": "#5d6bf7",
        "600": "#3f41ec",
        "700": "#3332d0",
        "800": "#2b2ca8",
        "900": "#2a2c85",
        "950": "#191a4d",
      },
      "persian-indigo": "#27187E",
      "ghost-white": "#FAF8FF",
      "space-cadet": "#1C1F33",
    },
  },
  plugins: [],
};
export default config;
