const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

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
            fontSize: {
                'preset-1': [
                    '40px',
                    {
                        lineHeight: '1',
                        fontWeight: defaultTheme.fontWeight.normal,
                    },
                ],
                'preset-1-mobile': [
                    '36px',
                    {
                        lineHeight: '1',
                        fontWeight: defaultTheme.fontWeight.normal,
                    },
                ],
                'preset-2': [
                    '28px',
                    {
                        lineHeight: '1',
                        fontWeight: defaultTheme.fontWeight.normal,
                    },
                ],
                'preset-3': [
                    '20px',
                    {
                        lineHeight: '1',
                        fontWeight: defaultTheme.fontWeight.semibold,
                    },
                ],
                'preset-4': [
                    '16px',
                    {
                        lineHeight: '1.5',
                        fontWeight: defaultTheme.fontWeight.normal,
                    },
                ],
                'preset-4-bold': [
                    '16px',
                    {
                        lineHeight: '1.5',
                        fontWeight: defaultTheme.fontWeight.bold,
                    },
                ],
            },
            screens: {
                desktop: '1440px',
                tablet: '768px',
                mobile: '375px',
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
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('table-row-elemens-for-border', '& tr:not(:last-child) :is(td,th)');
            addVariant('table-row-elemens-for-top-padding', '& tr:not(:first-child) :is(td,th)');
            addVariant('table-row-elemens-for-bottom-padding', '& tr:not(:last-child) :is(td,th)');
            addVariant('table-row-elements-first-row', '& tr:first-child :is(td,th)');
            addVariant('table-row-elements-last-row', '& tr:last-child :is(td,th)');
        }),
    ],
}
