import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center:true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: {
        header: "url('/images/coffee_image.png')",
      },
      fontFamily: {
        clickerScript: ["var(--font-script)"],
        playfairDisplay: ["var(--font-playfair)"],
      },
      colors:{
        main:'#F9C06A'
      }
    },
  },
  plugins: [
    function ({ addVariant }:any) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    require('flowbite/plugin')
  ],
};
export default config;
