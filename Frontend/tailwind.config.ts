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
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    extend: {
      backgroundImage: {
        header: "url('/images/coffee_image.png')",
        ordernow: "url('/images/Rectangle.png')",
        backcoffee:"url('/images/backcoffee.png')",
        menubaner:"linear-gradient(0deg, rgba(121,71,9,1) 0%, rgba(55,38,17,1) 100%)",
        footer:"linear-gradient(0deg, rgba(121,71,9,1) 0%, rgba(55,38,17,1) 100%),url('/images/fotter_image.png')",
      },
      fontFamily: {
        clickerScript: ["var(--font-script)"],
        playfairDisplay: ["var(--font-playfair)"],
      },
      colors:{
        main:'#F9C06A',
        secondry: '#1E1E1E',
        coffee:'#603809',
        maingray:'#707070'
      },
      boxShadow:{
        button: '0 0 4px #F9C06A'
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
