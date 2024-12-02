'use client'
import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image'

import Logo from '@/../public/images/avantgarda logo.png'
import HamburgerIcon from '../icons/HamburgerIcon'
import Link from 'next/link'
import gsap from 'gsap'

const links = [
    {
        text: 'Úvod',
        link: '/#uvod',
    },
    {
        text: 'O nás',
        link: '/#o-nas',
    },
    {
        text: 'Kabinky',
        link: '/#kabinky',
    },
    {
        text: 'Galerie',
        link: '/galerie',
    },
]

const Navigation = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    const openMobileMenu = () => {
        setIsOpened((prev) => !prev)

        const navTl = gsap.timeline({ paused: true })
        const mm = gsap.matchMedia()

        mm.add('(min-width: 640px)', () => {
            gsap.set('.linksList', { display: 'none' })
            gsap.set('.navBar', {
                height: 'fit-content',
            })
        })

        navTl
            .fromTo(
                '.navBar',
                {
                    height: 65,
                },
                {
                    height: 250,
                    duration: 0.2,
                }
            )
            .set('.linksList', {
                display: 'block',
            })
            .fromTo(
                '.navLink',
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    stagger: 0.1,
                }
            )

        if (isOpened === false) {
            navTl.play()
        } else {
            console.log('asdfjlasdf')

            navTl.reverse()
        }
    }

    return (
        <header className='fixed top-0 left-0 w-full flex justify-center px-2 sm:px-5 pt-2 z-50'>
            <div className='navBar w-full px-4 py-2 bg-white duration-200 border-b rounded-2xl border-black/20 shadow-md overflow-hidden'>
                <nav className='w-full flex justify-between items-center gap-2 py-2'>
                    <Link href={'/#uvod'}>
                        <Image
                            src={Logo}
                            width={180}
                            height={25}
                            alt='Solárium Avantgarda Logo'
                            className='w-32 sm:w-36 md:w-44'
                        ></Image>
                    </Link>

                    <div className='sm:flex hidden gap-2 md:gap-10  items-center'>
                        <ul className='gap-4 flex items-center'>
                            {links.map((link, i) => (
                                <li
                                    key={i}
                                    className='text-lg md:text-xl text-nowrap font-semibold'
                                >
                                    <Link
                                        className='text-black hover:text-orange duration-200'
                                        href={link.link}
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Button
                            text='Kontakt'
                            link='/#kontakt'
                            variant={'1sm'}
                            id='navigation'
                        ></Button>
                    </div>

                    <div
                        onMouseDownCapture={() => setIsPressed(true)}
                        onMouseUpCapture={() => setIsPressed(false)}
                        onClick={() => openMobileMenu()}
                        className={`${
                            isPressed ? 'p-[2px]' : 'p-0'
                        }  w-8 cursor-pointer block sm:hidden`}
                    >
                        <HamburgerIcon
                            className='w-full'
                            isOpened={isOpened}
                        ></HamburgerIcon>
                    </div>
                </nav>

                <ul className='linksList hidden text-center select-none'>
                    {links.map((link, i) => (
                        <li
                            key={i}
                            className='text-xl text-nowrap font-semibold mt-2 opacity-0 navLink'
                            onClick={() => openMobileMenu()}
                        >
                            <Link
                                className='text-black hover:text-orange duration-200'
                                href={link.link}
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                    <li
                        className='text-xl text-nowrap font-semibold mt-2 opacity-0 navLink'
                        onClick={() => openMobileMenu()}
                    >
                        <Link
                            className='text-black hover:text-orange duration-200'
                            href={'/#kontakt'}
                        >
                            Navštivte nás
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navigation
