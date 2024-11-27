import React from 'react'
import Image from 'next/image'

import HeroImage from '@/../public/images/HeroImage3.jpg'

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
            <div className='w-full h-full relative pt-36 flex gap-20'>
                <div className='flex-[3]'>
                    <h1 className='text-white max-w-[12em] text-7em'>
                        Solárium Avantagarda Olomouc
                    </h1>
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

                <div className=' absolute bottom-0 right-0 h-fit flex-1 flex flex-col bg-white/40 backdrop-blur-md rounded-t-2xl p-4 justify-start '>
                    <h2>Kde nás najdete? up</h2>
                    {/* <iframe
                        width='100%'
                        height='300'
                        src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sokolsk%C3%A1%20536/22,%20779%2000%20Olomouc%209+(Sol%C3%A1rn%C3%AD%20studio%20avantgarda%20olomouc%20-%20mapa)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                    ></iframe> */}
                </div>
            </div>
        </section>
    )
}

export default Hero
