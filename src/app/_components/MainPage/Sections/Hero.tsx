'use client'
import Image from 'next/image'
import Button from '../../Global/Button'
import HeroImage from '@/../public/images/HeroImage.webp'

const Hero = () => {
    return (
        <section id='uvod' className='h-screen w-full pb-0 py-5 '>
            <figure className='absolute left-0 top-0 w-full h-screen select-none overflow-hidden'>
                <div className='absolute left-0 top-0 w-full h-full bg-black/40 z-10'></div>
                <Image
                    className='w-full h-full object-cover '
                    id='hero-image'
                    src={HeroImage}
                    alt='Pozadí úvodní sekce'
                    width={1000}
                    height={1000}
                    priority
                    placeholder='blur'
                ></Image>
            </figure>
            <div className='w-full h-full relative pt-20 sm:pt-36 flex gap-20 z-20'>
                <div className='flex-[3]'>
                    <h1 className='text-white  max-w-[13em] text-4xl sm:text-5xl md:text-7xl'>
                        Solárium{' '}
                        <span className='text-orange inline-block bg-white px-4 py-2 rounded-2xl hover:text-white hover:bg-orange duration-200 cursor-pointer'>
                            Avantagarda
                        </span>
                        <br />{' '}
                        <span className='text-3xl sm:text-4xl md:text-6xl'>
                            U nás slunce nezapadá
                        </span>
                    </h1>
                    <p className='text-xl sm:text-2xl text-gray-100 max-w-[28em]'>
                        Objevte moderní solárium v centru Olomouce, které nabízí
                        profesionální péči a špičkové solární technologie.
                        Získejte dokonalé opálení přímo v srdci města!
                    </p>
                    <div className='mt-4 flex flex-wrap items-center gap-4'>
                        <Button
                            variant={'1lg'}
                            text='Navštívte nás'
                            link='/#kontakt'
                            id='hero-cist-vice'
                            className='px-2 py-2'
                        ></Button>
                        <Button
                            variant={'2lg'}
                            text='O nás'
                            link='/#o-nas'
                            id='hero-o-nas'
                            className='px-2 py-2'
                        ></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
