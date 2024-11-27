'use client'
import React from 'react'
import Image from 'next/image'

import HeroImage from '@/../public/images/HeroImage3.jpg'
import Button from '../../Global/Button'

const Hero = () => {
    return (
        <section className='h-screen w-full pb-0 py-5'>
            <figure className='absolute left-0 top-0 w-full h-screen select-none bg-black'>
                <Image
                    className='w-full h-full object-cover opacity-60'
                    src={HeroImage}
                    alt='Pozadí úvodní sekce'
                    width={1000}
                    height={1000}
                ></Image>
            </figure>
            <div className='w-full h-full relative pt-20 sm:pt-36 flex gap-20'>
                <div className='flex-[3]'>
                    <h1 className='text-white text-center sm:text-left max-w-[12em] text-4xl sm:text-5xl md:text-7xl'>
                        Solárium Avantagarda
                        <br /> v{' '}
                        <span className='text-orange inline-block bg-white px-4 py-1 rounded-2xl hover:text-white hover:bg-orange duration-200 cursor-pointer'>
                            Olomouci
                        </span>
                    </h1>
                    <p className='text-xl sm:text-2xl text-gray-100 max-w-[28em]'>
                        Objevte moderní solárium v centru Olomouce, které nabízí
                        profesionální péči a špičkové solární technologie.
                        Získejte dokonalé opálení přímo v srdci města!
                    </p>
                    <div className='mt-4 flex flex-col sm:flex-row items-center gap-4'>
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
                {/* <div className='flex-1 flex flex-col bg-white/80 rounded-2xl p-4 justify-start'>
                    <h2>Kde nás najdete?</h2>
                    <div className='w-full h-fit rounded-2xl overflow-hidden shadow-lg'>
                        <iframe
                            width='100%'
                            height='300'
                            src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sokolsk%C3%A1%20536/22,%20779%2000%20Olomouc%209+(Sol%C3%A1rn%C3%AD%20studio%20avantgarda%20olomouc%20-%20mapa)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                        ></iframe>
                    </div>
                </div> */}

                {/* <div className=' absolute bottom-0 right-0 h-fit flex-1 flex flex-col bg-white/40 backdrop-blur-md rounded-t-2xl p-4 justify-start '>
                    <h2>Kde nás najdete? up</h2>
                    <iframe
                        width='100%'
                        height='300'
                        src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sokolsk%C3%A1%20536/22,%20779%2000%20Olomouc%209+(Sol%C3%A1rn%C3%AD%20studio%20avantgarda%20olomouc%20-%20mapa)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                    ></iframe>
                </div> */}
            </div>
        </section>
    )
}

export default Hero
