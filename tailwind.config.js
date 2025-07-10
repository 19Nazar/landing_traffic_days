/* input.css */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["public/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                halvar: ["var(--font-halvar)", "sans-serif"],
                mabry: ["var(--font-mabry)", "sans-serif"],
                goodVibes: ["var(--font-goodVibes)", "sans-serif"],
                drukCyr: ["var(--font-drukCyr)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
