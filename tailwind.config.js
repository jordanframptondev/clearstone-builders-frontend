/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
            animation: {
                "fade-in": "fadeIn 2s ease-in-out",
            },
            maxWidth: {
                "3/4": "75%",
            },
            maxHeight: {
                "45vh": "45vh",
                "1/2": "50%",
                "3/4": "75%",
                "3/4vh": "75vh",
            },
        },
    },
    plugins: ["prettier-plugin-tailwindcss"],
};
