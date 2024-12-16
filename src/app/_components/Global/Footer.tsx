import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import Logo from '@/../public/images/avantgarda logo.png'
import EmailIcon from '../icons/EmailIcon'
import PhoneIcon from '../icons/PhoneIcon'
import FacebookIcon from '../icons/FacebookIcon'

const Footer = () => {
    return (
        <footer className='w-full mt-24'>
            <div className='bg-silver/70 rounded-2xl p-10 pb-2 shadow-sm'>
                <div className='flex justify-between gap-10 flex-col sm:flex-row'>
                    <div className='flex-1'>
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
                        </ul>
                        <div className='flex gap-2 mt-4'>
                            <Link
                                href='mailto:&#105;&#110;&#102;&#111;&#64;&#115;&#111;&#108;&#97;&#114;&#105;&#117;&#109;&#111;&#108;&#111;&#109;&#111;&#117;&#99;&#46;&#99;&#122;'
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
                    <div className='flex-1'>
                        <h3 className='sm:text-2xl text-xl'>Otevírací doba</h3>

                        <p className='mt-2'>
                            <span className='font-semibold'>Po - Pá:</span> 9:00
                            - 20:00
                        </p>
                        <p className='mt-2'>
                            <span className='font-semibold'>So:</span> 9:00 -
                            20:00
                        </p>
                        <p className='mt-2'>
                            <span className='font-semibold'>Ne:</span> ZAVŘENO
                        </p>
                    </div>

                    <div className='flex-1'>
                        <h3 className='sm:text-2xl text-xl'>Odkazy</h3>
                        <ul>
                            <li className='mt-2'>
                                <Link href={'/#uvod'} className='font-semibold'>
                                    Úvod
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link
                                    href={'/#o-nas'}
                                    className='font-semibold'
                                >
                                    O nás
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link
                                    href={'/#kabinky'}
                                    className='font-semibold'
                                >
                                    Kabinky
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link
                                    href={'/#galerie'}
                                    className='font-semibold'
                                >
                                    Galerie
                                </Link>
                            </li>
                            <li className='mt-2'>
                                <Link
                                    href={'/opalovani'}
                                    className='font-semibold'
                                >
                                    Opalování
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='bg-silver h-[1px] my-5'></div>

                <div className='flex justify-center'>
                    <p className='text-sm'>
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
