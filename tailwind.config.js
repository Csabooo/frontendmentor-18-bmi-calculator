/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
          "4rem",
          {
            lineHeight: "110%",
            fontWeight: "400",
          },
        ],
        "heading-L": [
          "2.5rem",
          {
            lineHeight: "110%",
            fontWeight: "400",
          },
        ],
        "heading-M": [
          "2rem",
          {
            lineHeight: "110%",
            fontWeight: "400",
          },
        ],
        "heading-S": [
          "1.3rem",
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
