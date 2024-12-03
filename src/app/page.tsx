import { Metadata } from 'next'
import Hero from './_components/MainPage/Sections/Hero'
import FindUs from './_components/MainPage/Sections/FindUs'
import QaA from './_components/MainPage/Sections/QaA'
import AboutUs from './_components/MainPage/Sections/AboutUs'
import Cabbins from './_components/MainPage/Sections/Cabbins'
import Gallery from './_components/MainPage/Sections/Gallery'

export const metadata: Metadata = {
    title: 'Solární studio | Solárium Avantgarda Olomouc',
    description:
        'Navštivte Solárium Avantgarda v centru Olomouce a dopřejte si profesionální opalování v moderním prostředí. Užijte si chvíle pro sebe plné relaxu!',
}

export default function Home() {
    return (
        <div className='flex flex-col gap-10'>
            <Hero></Hero>
            <AboutUs></AboutUs>
            <Cabbins></Cabbins>
            {/* <Gallery></Gallery> */}
            <QaA></QaA>
            <FindUs></FindUs>
        </div>
    )
}
