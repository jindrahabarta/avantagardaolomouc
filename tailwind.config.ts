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
                silver: '#bcbcbc',
                darkSilver: '#7a7979',
            },
        },
    },
    plugins: [],
} satisfies Config
