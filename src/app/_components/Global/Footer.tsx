import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import Logo from '@/../public/images/avantgarda logo.png'
import EmailIcon from '../icons/EmailIcon'
import PhoneIcon from '../icons/PhoneIcon'
import FacebookIcon from '../icons/FacebookIcon'

const Footer = () => {
    return (
        <footer className='w-full px-5 '>
            <div className='bg-silver/70 rounded-t-2xl p-10 pb-2'>
                <div className='flex justify-between'>
                    <div>
                        <Link href={'/#uvod'}>
                            <Image
                                src={Logo}
                                alt='Solárium Avantgarda Logo'
                                width={200}
                                height={50}
                            ></Image>
                        </Link>
                        <ul className='mt-4'>
                            <li>
                                <span className=' font-semibold'>Adresa: </span>
                                Sokolská 22, 770 01, Olomouc
                            </li>
                            <li>
                                <span className=' font-semibold'>IČO: </span>
                                69683450
                            </li>
                            <li>
                                <span className=' font-semibold'>DIČ: </span>
                                CZ7705294036
                            </li>
                            {/* <li>
                                <span className=' font-semibold'>Tel: </span>
                                <Link href={'tel:+420737331132'}>
                                    +420 737 331 132
                                </Link>
                            </li>
                            <li>
                                <span className=' font-semibold'>Email: </span>
                                <Link href={'mailto:info@solariumolomouc.cz'}>
                                    info@solariumolomouc.cz
                                </Link>
                            </li> */}
                        </ul>
                        <div className='flex gap-2 mt-4'>
                            <Link
                                href={'mailto:info@solariumolomouc.cz'}
                                className='w-7 h-7 bg-orange rounded-full flex justify-center items-center group/FooterLink'
                            >
                                <EmailIcon className='w-3 h-fit fill-white group-hover/FooterLink:rotate-12 transition-all duration-200 ease-linear'></EmailIcon>
                            </Link>
                            <Link
                                href={'tel:+420737331132'}
                                className='w-7 h-7 bg-orange rounded-full flex justify-center items-center group/FooterLink'
                            >
                                <PhoneIcon className='w-4 h-fit fill-white group-hover/FooterLink:rotate-12 transition-all duration-200 ease-linear'></PhoneIcon>
                            </Link>
                            <Link
                                href={
                                    'https://www.facebook.com/avantgardaolomouc'
                                }
                                target='_blank'
                                className='w-7 h-7 bg-orange rounded-full flex justify-center items-center group/FooterLink'
                            >
                                <FacebookIcon className='w-3 h-fit fill-white group-hover/FooterLink:rotate-12 transition-all duration-200 ease-linear'></FacebookIcon>
                            </Link>
                        </div>
                    </div>
                    <div>alksdjfl</div>
                </div>

                <div className='bg-silver h-[1px] my-5'></div>

                <div className='flex justify-center'>
                    <p>
                        Web vytvořil{' '}
                        <Link
                            target='_blank'
                            href={'https://jindrahabarta.netlify.a pp/'}
                        >
                            Jindřich Habarta
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer