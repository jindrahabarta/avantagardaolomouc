import React from 'react'
import CabinCard from '../../Cabbins/CabinCard'

const cabbins = [
    {
        tag: 'Kabinka 1',
        title: 'HAPRO LUXURA 630 SLi Intensive',
        price1: 17,
        price2: 7.5,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 2',
        title: 'ERGOLINE EXCELLENCE 800',
        price1: 19,
        price2: 9.5,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 3',
        title: 'ERGOLINE INSPIRATION 450',
        price1: 7.5,
        price2: 15,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 4',
        title: 'Vertikál - Ultratan Tower of power',
        price1: 17,
        price2: 8.5,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 5',
        title: 'SOLTRON XL 75 TWIN POWER',
        price1: 19,
        price2: 9.5,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 6',
        title: 'APRO LUXURA X7 42 SLi iNTENSIVE',
        price1: 14,
        price2: 7,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 7',
        title: 'VERTIKÁL - UWE i-dome',
        price1: 16,
        price2: 8,
        text: 'lorem ipsum',
    },
]

const Cabbins = () => {
    return (
        <section id='kabinky' className='pt-24'>
            <h1>Kabinky</h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
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
