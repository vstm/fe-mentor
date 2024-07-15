const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                heading: defaultTheme.fontSize['2xl'],
                body: defaultTheme.fontSize['sm'],
            },
            colors: {
                primary: {
                    green: 'hsl(75, 94%, 57%)',
                },
                neutral: {
                    white: 'hsl(0, 0%, 100%)',
                    grey: 'hsl(0, 0%, 20%)',
                    'dark-grey': 'hsl(0, 0%, 12%)',
                    'off-black': 'hsl(0, 0%, 8%)',
                },
            },
        },
    },
    plugins: [],
}
