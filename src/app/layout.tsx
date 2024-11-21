import type { Metadata } from 'next'
import './globals.css'
import Navigation from './_components/Global/Navigation'

export const metadata: Metadata = {
    title: '%s | Avantagarda Studio',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='cs'>
            <body className={`antialiased flex flex-col items-center`}>
                <Navigation></Navigation>

                <main className='max-w-[2000px] w-full px-5'>{children}</main>
            </body>
        </html>
    )
}
