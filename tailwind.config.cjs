/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./frontend-shell/**/*.{js,ts,jsx,tsx}",
        "./members/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand': '#4f46e5',
                'alert': '#ef4444',
            },
        },
    },
    plugins: [],
}
