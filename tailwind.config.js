/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        inter: "Inter, sans-serif",
      },
      fontSize: {
        "body-s": [
          "0.9375rem",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
        "body-m": [
          "1rem",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
        "body-m-bold": [
          "1rem",
          {
            lineHeight: "150%",
            fontWeight: "600",
          },
        ],
        "heading-XL": [
          "4rem", //64px
          {
            lineHeight: "110%",
            fontWeight: "400",
          },
        ],
        "heading-L": [
          "3rem", //48px
          {
            lineHeight: "110%",
            fontWeight: "400",
          },
        ],
        "heading-M": [
          "2rem", //32px
          {
            lineHeight: "110%",
            fontWeight: "400",
          },
        ],
        "heading-S": [
          "1.5rem", //24px
          {
            lineHeight: "110%",
            fontWeight: "400",
          },
        ],
      },
      colors: {
        blues: "#345FF6",
        gunmetal: "#253347",
        dark_Electric_Blue: "#5E6E85",
        borders: "#D8E2E7",
        pure_White: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
