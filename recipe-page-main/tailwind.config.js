const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [`index.html`],
    theme: {
        extend: {
            fontFamily: {
                outfit: ['Outfit', ...defaultTheme.fontFamily.sans],
                'young-serif': [
                    'Young Serif',
                    ...defaultTheme.fontFamily.serif,
                ],
            },
            colors: {
                white: 'hsl(0, 0%, 100%)',
                stone: {
                    100: 'hsl(30, 54%, 90%)',
                    150: 'hsl(30, 18%, 87%)',
                    600: 'hsl(30, 10%, 34%)',
                    900: 'hsl(24, 5%, 18%)',
                },
                brown: {
                    800: 'hsl(14, 45%, 36%)',
                },
                rose: {
                    800: 'hsl(332, 51%, 32%)',
                    50: 'hsl(330, 100%, 98%)',
                },
            },
        },
    },
    plugins: [],
}
