const defaultTheme = require("tailwindcss/defaultTheme");
// const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [`index.html`],
    theme: {
        extend: {
            colors: {
                primary: {
                    "deep-aquamarine": "hsl(158, 36%, 37%)", // dark-cyan
                    'deep-aquamarine-hover': 'hsl(158, 43%, 18%)',
                    cream: "hsl(30, 38%, 92%)",

                },
                neutral: {
                    "gunmetal": "hsl(212, 21%, 14%)", // aka very-dark-blue
                    "aurometal-saurus": "hsl(228, 12%, 48%)", // aka dark-grayish-blue
                    white: "hsl(0, 0%, 100%)",
                },
            },
            fontFamily: {
                montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
                fraunces: ["Fraunces", ...defaultTheme.fontFamily.serif],
            },
            screens: {
                desktop: '1440px',
                mobile: '375px',
            },
            fontSize: {
                display: [
                    "32px",
                    {
                        lineHeight: "32px",
                        fontWeight: defaultTheme.fontWeight.bold,
                    },
                ],
                body: [
                    "14px",
                    {
                        lineHeight: "23px",
                        fontWeight: defaultTheme.fontWeight.medium,
                    },
                ],
                "button-text": [
                    "14px",
                    {
                        lineHeight: defaultTheme.lineHeight.normal,
                        fontWeight: defaultTheme.fontWeight.normal,
                    },
                ],
                overline: [
                    "12px",
                    {
                        lineHeight: defaultTheme.lineHeight.normal,
                        fontWeight: defaultTheme.fontWeight.normal,
                        letterSpacing: "5px",
                    },
                ],
                'sub-price': [
                    '13px',
                    {
                        lineHeight: '23px',
                        fontWeight: defaultTheme.fontWeight.normal,
                    },
                ]
            },
        },
    },
    plugins: [],
};
