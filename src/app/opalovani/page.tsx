import { Metadata } from 'next'
import React from 'react'
import OpalovaniUvod from './_Sections/OpalovaniUvod'
import TypyPleti from './_Sections/TypyPleti'
import JakFunguje from './_Sections/JakFunguje'

export const metadata: Metadata = {
    title: 'Opalování',
    description:
        'Navštivte Solárium Avantgarda v centru Olomouce a dopřejte si profesionální opalování v moderním prostředí. Užijte si chvíle pro sebe plné relaxu!',
}

const Opalovani = () => {
    return (
        <section className='pt-32'>
            <OpalovaniUvod></OpalovaniUvod>
            <JakFunguje></JakFunguje>
            <TypyPleti></TypyPleti>
        </section>
    )
}

export default Opalovani
