import Link from 'next/link'
import React from 'react'
import EmailIcon from '../../icons/EmailIcon'
import MapPinIcon from '../../icons/MapPinIcon'
import PhoneIcon from '../../icons/PhoneIcon'

const FindUs = () => {
    return (
        <section id='kontakt' className='pt-24'>
            <div className='flex flex-col sm:flex-row'>
                <div className='flex-3 flex flex-col gap-2 text-xl'>
                    <h2>Kontaktní informace</h2>
                    <Link
                        href={''}
                        className='flex items-center gap-2 w-fit text-black duration-200'
                    >
                        <MapPinIcon className='w-6 h-fit fill-orange ' />
                        <span>Sokolská 22 770 01 Olomouc</span>
                    </Link>
                    <Link
                        href={'mailto:'}
                        className='flex items-center gap-2 w-fit text-black duration-200'
                    >
                        <EmailIcon className='w-6 h-fit fill-orange' />
                        <span>solbank@seznam.cz</span>
                    </Link>
                    <Link
                        href={''}
                        className='flex items-center gap-2 w-fit text-black duration-200'
                    >
                        <PhoneIcon className='w-6 h-fit fill-orange' />
                        <span>+420 737 331 132</span>
                    </Link>
                    <h2 className='mt-2'>Otevírací doba</h2>
                    <p>
                        <span className='font-semibold'>Po - Pá:</span> 9:00 -
                        20:00
                    </p>
                    <p>
                        <span className='font-semibold'>So:</span> 9:00 - 20:00
                    </p>
                    <p>
                        <span className='font-semibold'>Ne:</span> ZAVŘENO
                    </p>
                </div>
                <div className='flex-2 mt-4 sm:mt-0'>
                    <h2>Kde nás najdete</h2>

                    <div className=' h-fit rounded-2xl overflow-hidden shadow-lg mt-2'>
                        <iframe
                            width='100%'
                            height='300'
                            src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sokolsk%C3%A1%20536/22,%20779%2000%20Olomouc%209+(Sol%C3%A1rn%C3%AD%20studio%20avantgarda%20olomouc%20-%20mapa)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FindUs
