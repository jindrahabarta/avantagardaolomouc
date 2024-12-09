import React from 'react'
import Image from 'next/image'
import AboutImage from '@/../public/images/SolariumImage.jpg'

const AboutUs = () => {
    return (
        <section id='o-nas' className='pt-24'>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-20'>
                <div className='flex-[2]'>
                    <h1>O Soláriu</h1>
                    <p>
                        Vítejte v našem soláriu Avantgarda v centru Olomouce!
                        Pokud hledáte ideální místo pro bezpečné a kvalitní
                        opalování v Olomouci, jste na správném místě. Naše
                        moderní solárium nabízí špičkové služby přímo v srdci
                        Olomouce, kde si můžete dopřát dokonalou péči o svou
                        pokožku a získat přirozeně opálený vzhled po celý rok.
                        Navštivte nás v centru Olomouce a objevte výhody
                        pravidelného opalování s nejmodernějšími technologiemi,
                        které zaručují efektivní a šetrné opalování. Solárium
                        Avantarda Olomouc je tu pro vás, abyste si mohli užít
                        chvíle relaxace a krásný vzhled každý den!
                    </p>
                </div>
                <div className='flex-1'>
                    <div className='w-full h-full rounded-2xl overflow-hidden aspect-square'>
                        <Image
                            src={AboutImage}
                            alt='Obrázek v sekci o nás'
                            width={600}
                            height={500}
                            className='object-cover w-full h-full'
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
