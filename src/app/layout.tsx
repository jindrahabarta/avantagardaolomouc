import type { Metadata } from 'next'
import './globals.css'
import Navigation from './_components/Global/Navigation'
import Footer from './_components/Global/Footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
    title: {
        template: '%s | Solárium Avantgarda Olomouc',
        default: 'Solárium Avantgarda Olomouc',
    },
    description:
        'Navštivte Solárium Avantgarda v centru Olomouce a dopřejte si profesionální opalování v moderním prostředí. Užijte si chvíle pro sebe plné relaxu!',

    authors: {
        name: 'Jindrich Habarta',
        url: 'https://jindrahabarta.netlify.app/',
    },
    keywords: [
        'Solárium',
        'Solárium Avantgarda',
        'Avantgarda Olomouc',
        'Solárium Olomouc',
        'Solární studio',
        'Solární studio Olomouc',
        'Solárko Olomouc',
        'Solárko Avantgarda',
    ],
    twitter: {
        card: 'summary_large_image',
    },
    openGraph: {
        title: 'Solárium Avantgarda Olomouc - Solárium v centru Olomouce',
        description:
            'Navštivte Solárium Avantgarda v centru Olomouce a dopřejte si profesionální opalování v moderním prostředí.',

        images: [
            {
                url: 'https://github.com/jindrahabarta/avantagardaolomouc/blob/main/src/app/OpenGraphImage.jpg?raw=true',
                width: 1200,
                height: 630,
                alt: 'Solárium Avantgarda Olomouc',
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='cs'>
            <body
                className={`${poppins.className} antialiased flex flex-col items-center overflow-x-hidden`}
            >
                <Navigation></Navigation>
                <main className='max-w-[1392px] w-full px-5'>
                    {children}
                    <Footer></Footer>
                </main>
            </body>
        </html>
    )
}
