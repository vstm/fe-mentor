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
                heading: [
                    defaultTheme.fontSize['2xl'][0],
                    {
                        ...defaultTheme.fontSize['2xl'][1],
                        lineHeight: defaultTheme.lineHeight.normal,
                    },
                ],
                body: [
                    defaultTheme.fontSize['sm'][0],
                    {
                        ...defaultTheme.fontSize['sm'][1],
                        lineHeight: defaultTheme.lineHeight.normal,
                    },
                ],
            },
            screens: {
                desktop: '1440px',
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
