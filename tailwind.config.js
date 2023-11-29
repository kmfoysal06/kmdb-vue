/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
    theme: {
        extend: {
          colors: {
                primary: '#FF1F3D',
              }
        },
    },
    plugins: [require("daisyui")],
}