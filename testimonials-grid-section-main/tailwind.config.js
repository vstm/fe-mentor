const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            screens: {
                desktop: "1440px",
                mobile: "375px",
            },
            colors: {
                "c-primary": {
                    "moderate-violet": "hsl(263, 55%, 52%)",
                    "light-moderate-violet": "hsl(264, 82, 70%)",
                    "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
                    "very-dark-blackish-blue": "hsl(219, 29%, 14%)",
                    white: "hsl(0, 0%, 100%)",
                },
                "c-neutral": {
                    background: "hsl(0, 0%, 95%)",
                    "light-gray": "hsl(0, 0%, 81%)",
                    "ligth-grayish-blue": "hsl(210, 46%, 95%)",
                },
            },
            fontFamily: {
                "barlow-semi-condensed": [
                    "Barlow Semi Condensed",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            backgroundImage: {
                quote: "url('./images/bg-pattern-quotation.svg')",
            },
            fontSize: {
                title: [
                    "13px",
                    {
                        lineHeight: "1",
                    },
                ],
                subtitle: [
                    "11px",
                    {
                        lineHeight: "1",
                    },
                ],
                intro: [
                    "20px",
                    {
                        lineHeight: "1.2",
                    },
                ],
                "body-copy": [
                    "13px",
                    {
                        lineHeight: "18px",
                    },
                ],
            },
        },
    },
    plugins: [],
};
