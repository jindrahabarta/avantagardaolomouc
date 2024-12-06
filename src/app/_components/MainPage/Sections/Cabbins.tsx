import React from 'react'
import CabinCard from '../../Cabbins/CabinCard'

const cabbins = [
    {
        tag: 'Kabinka 1',
        title: 'Tanzi Opal Fitness',
        price1: 18,
        price2: 11,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 2',
        title: 'Ergoline Affinity 800 Twin Power',
        price1: 18,
        price2: 11,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 3',
        title: 'Soltron XL - 70 Universe Turbo',
        price1: 18,
        price2: 11,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 4',
        title: 'Luxura x10 SL Intensive',
        price1: 18,
        price2: 11,
        text: 'lorem ipsum',
    },
]

const Cabbins = () => {
    return (
        <section id='kabinky' className='pt-24'>
            <h1>Kabinky</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {cabbins.map((cabbin, i) => (
                    <CabinCard
                        key={i}
                        img='Kabinka 1'
                        title={cabbin.title}
                        tag={cabbin.tag}
                        price1={cabbin.price1}
                        price2={cabbin.price2}
                    ></CabinCard>
                ))}
            </div>
        </section>
    )
}

export default Cabbins
