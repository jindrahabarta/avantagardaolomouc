import React from 'react'
import PermCard from './_components/PermCard'
import { Metadata } from 'next'
import permice1 from '@/../public/images/permice/permice1.webp'
import permice3 from '@/../public/images/permice/permice3.webp'

export const metadata: Metadata = {
    title: 'Permanentky',
    description:
        '    Získej kredit navíc při zakoupení permanentky za 500 nebo 1000 Kč. Navštivte Solárium Avantgarda v centru Olomouce.',
}

const Permanentky = () => {
    return (
        <div className='pt-32 '>
            <h1 className='text-center'>Permanentky</h1>
            <p className='text-center max-w-[700px] m-auto'>
                Získej kredit navíc při zakoupení permanentky za 500 nebo 1000
                Kč!
            </p>

            <div className=''>
                <PermCard
                    title='500 Kč'
                    text='Zaplatíte 500kč - získáte kredit 1000 Kč.'
                    img={permice1}
                ></PermCard>
                <PermCard
                    title='1000 Kč'
                    text='Zaplatíte 1000 Kč - získáte kredit 2000 Kč plus dárek sleva 100 Kč na opalovací krém dle vlastního výběru.'
                    img={permice3}
                ></PermCard>
            </div>
        </div>
    )
}

export default Permanentky
