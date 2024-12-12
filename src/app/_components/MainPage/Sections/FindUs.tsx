import Link from 'next/link'
import React from 'react'
import MapPinIcon from '../../icons/MapPinIcon'
import EmailIcon from '../../icons/EmailIcon'
import PhoneIcon from '../../icons/PhoneIcon'
import FacebookIcon from '../../icons/FacebookIcon'

const FindUs = () => {
    return (
        <section id='kontakt' className='pt-12 sm:pt-24'>
            <div className='flex flex-col sm:flex-row'>
                <div className='flex-3 text-xl'>
                    <h2>Kontaktní informace</h2>

                    <ul>
                        <li className='mt-3'>
                            <Link
                                href={
                                    'https://www.google.com/maps/place/Sol%C3%A1rium+Avantgarda/@49.5962322,17.2470124,17z/data=!3m1!4b1!4m6!3m5!1s0x47124ef389ff5265:0x2e1bd6b9aa9f262a!8m2!3d49.5962288!4d17.2495873!16s%2Fg%2F1tlkb32f?hl=cs-CZ&entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D'
                                }
                                target='_blank'
                                className='flex items-center gap-2 w-fit text-black duration-200 h-fit'
                            >
                                <MapPinIcon className='w-6 h-auto fill-orange ' />
                                <span className='h-fit'>
                                    Sokolská 22 770 01 Olomouc
                                </span>
                            </Link>
                        </li>
                        <li className='mt-3'>
                            <Link
                                href={'mailto:info@solariumolomouc.cz'}
                                className='flex items-center gap-2 w-fit text-black duration-200 h-fit'
                            >
                                <EmailIcon className='w-6 h-auto fill-orange' />
                                <span>info@solariumolomouc.cz</span>
                            </Link>
                        </li>
                        <li className='mt-3'>
                            <Link
                                href={'tel:737331132'}
                                className='flex items-center gap-2 w-fit text-black duration-200 h-fit'
                            >
                                <PhoneIcon className='w-6 h-auto fill-orange' />
                                <span>+420 737 331 132</span>
                            </Link>
                        </li>
                        <li className='mt-3'>
                            <Link
                                href={
                                    'https://www.facebook.com/avantgardaolomouc/?locale=cs_CZ'
                                }
                                target='_blank'
                                className='flex items-center gap-2 w-fit text-black duration-200 h-fit'
                            >
                                <FacebookIcon className='w-6 h-auto fill-orange' />
                                <span>Solárium Avantgarda</span>
                            </Link>
                        </li>
                    </ul>

                    <h2 className='mt-4'>Otevírací doba</h2>
                    <p className='mt-2'>
                        <span className='font-semibold'>Po - Pá:</span> 9:00 -
                        20:00
                    </p>
                    <p className='mt-2'>
                        <span className='font-semibold'>So:</span> 9:00 - 20:00
                    </p>
                    <p className='mt-2'>
                        <span className='font-semibold'>Ne:</span> ZAVŘENO
                    </p>
                </div>
                <div className='flex-2 mt-4 sm:mt-0'>
                    <h2>Kde nás najdete</h2>

                    <div className=' h-fit rounded-2xl overflow-hidden shadow-lg mt-2'>
                        <iframe
                            title='Mapa Solárium Avantagarda Olomouc'
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
