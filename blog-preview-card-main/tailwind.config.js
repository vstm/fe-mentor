const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            colors: {
                'blog-preview-card': {
                    'pure-white': 'hsl(0, 0%, 100%)',
                    yellow: 'hsl(47, 88%, 63%)',
                    grey: 'hsl(0, 0%, 50%)',
                    black: 'hsl(0, 0%, 7%)',
                },
            },
            fontFamily: {
                figtree: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
