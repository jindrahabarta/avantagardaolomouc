import React from 'react'
import CabinCard from '../../Cabbins/CabinCard'
import img1 from '@/../public/images/cabbins/1.webp'
import img2 from '@/../public/images/cabbins/2.webp'
import img3 from '@/../public/images/cabbins/3.webp'
import img4 from '@/../public/images/cabbins/4.webp'
import img5 from '@/../public/images/cabbins/5.webp'
import img7 from '@/../public/images/cabbins/7.webp'
import img8 from '@/../public/images/cabbins/8.webp'

const cabbins = [
    {
        tag: 'Kabinka 1',
        title: 'Ergoline Prestige 1100 Gold',
        price: 28,
        image: img1,
        text: 'Komfortní výkonné turbosolárium, 52 trubic, 4 obličejové zářiče 700W, ergonomicky tvarované lůžko. Aquafresh, aroma, klima.',
    },
    {
        tag: 'Kabinka 2',
        title: 'Ergoline Excellence 800',
        price: 26,
        image: img2,
        text: '51 trubic 160 W, 4 obličejové zářiče 520 W, 13 ramenních trubic 25 W',
    },
    {
        tag: 'Kabinka 3',
        title: 'Ergoline Inspiration 450',
        price: 18,
        image: img3,
        text: 'Základní solárium . 42 trubic, 4x obličejové zářiče 400W',
    },
    {
        tag: 'Kabinka 4',
        title: 'Ultratan Tower of Power',
        price: 18,
        image: img4,
        text: '52 trubic 180W 2m',
    },
    {
        tag: 'Kabinka 5',
        title: 'Soltron XL 75 Twin Power',
        price: 24,
        image: img5,
        text: '51 trubic 160W, 4 obličejové zářiče 500W, výkonné vícestupňové větrání',
    },
    {
        tag: 'Kabinka 6',
        title: 'Ergoline Excellence 800',
        price: 26,
        image: img2,
        text: '51 trubic 160 W, 4 obličejové zářiče 520 W, 13 ramenních trubic 25W',
    },
    {
        tag: 'Kabinka 7',
        title: 'Luxura X7 42 SLI Intensive',
        price: 17,
        image: img7,
        text: '42 trubic, 4 obličejové zářiče 400W',
    },
    {
        tag: 'Kabinka 8',
        title: 'UWE I-Dome',
        price: 18,
        image: img8,
        text: '48 trubic 180W, 2m',
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
                        text={cabbin.text}
                        title={cabbin.title}
                        tag={cabbin.tag}
                        price={cabbin.price}
                    ></CabinCard>
                ))}
            </div>
        </section>
    )
}

export default Cabbins
