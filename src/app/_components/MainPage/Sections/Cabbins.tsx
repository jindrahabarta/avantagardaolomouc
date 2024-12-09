import React from 'react'
import CabinCard from '../../Cabbins/CabinCard'
import HaproLuxura630 from '@/../public/images/cabbins/HAPRO-LUXURA-630-SLi-Intensive.webp'
import ErgolineExcellence800 from '@/../public/images/cabbins/Ergoline Excellence.webp'
import ErgolineInspiration450 from '@/../public/images/cabbins/ERGOLINE INSPIRATION 450.webp'
import UltratanTower from '@/../public/images/cabbins/Ultratan Tower of power.webp'
import SoltronXL from '@/../public/images/cabbins/SOLTRON XL 75 TWIN POWER.webp'
import AproLuxura from '@/../public/images/cabbins/APRO-LUXURA-X7-42-SLi-iNTENSIVE.webp'
import UWE from '@/../public/images/cabbins/VERTIKÁL - UWE i-dome.webp'

const cabbins = [
    {
        tag: 'Kabinka 1',
        title: 'HAPRO LUXURA 630 SLi Intensive',
        price1: 17,
        price2: 7.5,
        image: HaproLuxura630,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 2',
        title: 'ERGOLINE EXCELLENCE 800',
        price1: 19,
        price2: 9.5,
        image: ErgolineExcellence800,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 3',
        title: 'ERGOLINE INSPIRATION 450',
        price1: 7.5,
        price2: 15,
        image: ErgolineInspiration450,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 4',
        title: 'Vertikál - Ultratan Tower of power',
        price1: 17,
        price2: 8.5,
        image: UltratanTower,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 5',
        title: 'SOLTRON XL 75 TWIN POWER',
        price1: 19,
        price2: 9.5,
        image: SoltronXL,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 6',
        title: 'APRO LUXURA X7 42 SLi iNTENSIVE',
        price1: 14,
        price2: 7,
        image: AproLuxura,
        text: 'lorem ipsum',
    },
    {
        tag: 'Kabinka 7',
        title: 'VERTIKÁL - UWE i-dome',
        price1: 16,
        price2: 8,
        image: UWE,
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
                        img={cabbin.image}
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
