/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            colors: {
                'blue-1': '#3f3cbb',
                'blue-2': '#241F62',
                'vert-1': '#0EFAA5',
                'gray-1': '#343434',
                'gray-2': '#E6E6E6',
                'vert-2': '#427BD0'
            },
            fontFamily: {
                'display': ['Crunold', 'sans-serif'],
                'body': ['Apfel', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
