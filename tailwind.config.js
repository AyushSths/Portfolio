/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      },
      animation: {
        'my-spin': 'spin 4s linear infinite', // slower spin
      },
     screens: {
        'sm': '520px',
        // => @media (min-width: 520px) { ... }

        'md': '770px',
        // => @media (min-width: 770px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      width: {
        415: "415px",
        401: "401px",
        569: "569px",
        580: "580px",
        600: "600px",
      },
      height: {
        411: "411px",
        577: "577px",
        580: "580px",
        595: "595px",
        600: "600px",
        960: "960px",
      },
    },
  },
  plugins: [],
}
