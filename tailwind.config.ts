import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                orange: '#fe6601',
                darkOrange: '#db5800',
                silver: '#bcbcbc',
                darkSilver: '#7a7979',
            },
            flex: {
                '2': '2 2 0%',
                '3': '3 3 0%',
                '4': '4 4 0%',
            },
        },
    },
    plugins: [],
} satisfies Config
