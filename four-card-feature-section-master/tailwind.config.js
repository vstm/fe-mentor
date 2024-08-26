const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            screens: {
                mobile: "357px",
                desktop: "1440px",
            },
            colors: {
                "c-primary": {
                    red: "hsl(0, 78%, 62%)",
                    cyan: "hsl(180, 62%, 55%)",
                    orange: "hsl(34, 97%, 64%)",
                    blue: "hsl(212, 86%, 64%)",
                },
                "c-neutral": {
                    "very-dark-blue": "hsl(234, 12%, 34%)",
                    "grayish-blue": "hsl(229, 6%, 66%)",
                    "very-light-gray": "hsl(0, 0%, 98%)",
                    border: "hsl(0, 0, 59%)",
                },
            },
            boxShadow: {
                card: "0px 15px 30px -11px hsl(213 47 67% / 50%)",
            },
        },
    },
    plugins: [],
};
