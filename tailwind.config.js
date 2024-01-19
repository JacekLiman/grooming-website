/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins",
      },
      container: {
        padding: {
          DEFAULT: "1.5rem",
          lg: "3rem",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xl2: "1440px",
      },
      colors: {
        body: "#E5E5E5",
        blue: {
          DEFAULT: "#000958",
          secondary: "#67698B",
        },
        orange: {
          DEFAULT: "#FF4917",
          secondary: "#FFCE9D",
          tertiary: "#FFF0E1",
          quaternary: "#FFFAF5",
          hover: "#FB3D08",
        },
        yellow: {
          DEFAULT: "#FFDA54",
          secondary: "#FFF3D2",
        },
        white: "#fff",
        pink: "pink",
        transparent: "transparent",
      },
       boxShadow: {
          primary: "0 0 50px 5px rgba(0, 0, 0, 0.3)",
        },
         backgroundImage: {
          triangle: "url('/src/assets/img/triangle.svg')",
        },
    },
  },
  plugins: [],
};
