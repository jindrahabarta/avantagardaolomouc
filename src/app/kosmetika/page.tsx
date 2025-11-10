import { Metadata } from 'next'
import React from 'react'
import ProductsList from './_components/ProductsList'

export const metadata: Metadata = {
    title: 'Kosmetika',
    description:
        'Objevte naši pečlivě vybranou kosmetiku, která podpoří vaši péči o pleť i dokonalé opálení. Všechny produkty si můžete pohodlně zakoupit a vyzvednout přímo v našem studiu v centru Olomouce!',
}

const Kosmetika = () => {
    return (
        <div className='pt-32'>
            <h1 className='text-center'>Kosmetika</h1>
            <p className='text-center max-w-[700px] m-auto'>
                Objevte naši pečlivě vybranou kosmetiku, která podpoří vaši péči
                o pleť i dokonalé opálení. Všechny produkty si můžete pohodlně
                zakoupit a vyzvednout přímo v našem studiu v centru Olomouce!
            </p>

            <ProductsList></ProductsList>
        </div>
    )
}

export default Kosmetika
