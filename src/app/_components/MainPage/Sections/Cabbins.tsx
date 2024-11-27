import React from 'react'
import CabinCard from '../../Cabbins/CabinCard'

const Cabbins = () => {
    return (
        <section id='solaria' className='pt-24'>
            <h1>Kabinky</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <CabinCard img='Kabinka 1' title='Kabinka 1'></CabinCard>
                <CabinCard img='Kabinka 2' title='Kabinka 2'></CabinCard>
                <CabinCard img='Kabinka 3' title='Kabinka 3'></CabinCard>
                <CabinCard img='Kabinka 4' title='Kabinka 4'></CabinCard>
            </div>
        </section>
    )
}

export default Cabbins
