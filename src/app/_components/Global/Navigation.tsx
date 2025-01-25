'use client'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import Image from 'next/image'
import Logo from '@/../public/images/avantgarda logo.png'
import HamburgerIcon from '../icons/HamburgerIcon'
import Link from 'next/link'
import gsap from 'gsap'
import animationInit from '@/app/assets/animationInit'
import { usePathname } from 'next/navigation'
import ChevronDownIcon from '../icons/ChevronDownIcon'
// import ChevronDownIcon from '../icons/ChevronDownIcon'

const links = [
    {
        text: 'Domů',
        link: '/#uvod',
        submenu: [
            {
                text: 'O soláriu',
                link: '/#o-nas',
            },
            {
                text: 'Kabinky',
                link: '/#kabinky',
            },
            {
                text: 'Otázky a odpovědi',
                link: '/#faq',
            },
        ],
    },
    // {
    //     text: 'O soláriu',
    //     link: '/#o-nas',
    // },
    // {
    //     text: 'Kabinky',
    //     link: '/#kabinky',
    // },
    {
        text: 'Galerie',
        link: '/galerie',
    },
    {
        text: 'Opalování',
        link: '/opalovani',
    },
    {
        text: 'Permanentky',
        link: '/permanentky',
    },
    {
        text: 'Kosmetika',
        link: '/kosmetika',
    },
]

const Navigation = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [isPressed, setIsPressed] = useState(false)
    const path = usePathname()

    useEffect(() => {
        animationInit(path)
    }, [path])

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
                    height: '5rem',
                },
                {
                    height: 320,
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
            <div className='navBar max-w-[1392px] w-full px-4  bg-white duration-200 border-b rounded-2xl border-black/20 border shadow-md overflow-hidden sm:overflow-visible'>
                <nav className='w-full flex justify-between items-center gap-2 h-20'>
                    <Link href={'/#uvod'}>
                        <Image
                            src={Logo}
                            width={180}
                            height={25}
                            alt='Solárium Avantgarda Logo'
                            className='w-32 sm:w-36 md:w-44'
                        ></Image>
                    </Link>

                    <div className='sm:flex hidden gap-2 md:gap-10 h-full items-center'>
                        <ul className='gap-4 h-full flex items-center'>
                            {links.map((link, i) => {
                                // return (
                                //     <li
                                //         key={i}
                                //         className=' text-md sm:text-base lg:text-lg text-nowrap font-semibold'
                                //     >
                                //         <Link
                                //             className='text-black hover:text-orange duration-200'
                                //             href={link.link}
                                //         >
                                //             {link.text}
                                //         </Link>
                                //     </li>
                                // )
                                if (link.submenu) {
                                    return (
                                        <div
                                            className='relative group h-full flex items-center'
                                            key={i}
                                        >
                                            <li className='text-md md:text-lg lg:text-xl text-nowrap font-semibold flex items-center cursor-pointer gap-1'>
                                                <Link
                                                    className='text-black py-2 group-hover:text-orange duration-200'
                                                    href={link.link}
                                                >
                                                    {link.text}
                                                </Link>
                                                <ChevronDownIcon className='w-4 group-hover:stroke-orange stroke-black group-hover:pt-1 duration-300'></ChevronDownIcon>
                                                <div className='h-fit pt-1 top-20 absolute left-0'>
                                                    <ul className='w-fit hidden  group-hover:block h-fit rounded-xl p-4 bg-white shadow-md border-black/50 border '>
                                                        {link.submenu.map(
                                                            (
                                                                submenuLink,
                                                                i
                                                            ) => (
                                                                <li key={i}>
                                                                    <Link
                                                                        className='text-black hover:text-orange'
                                                                        href={
                                                                            submenuLink.link
                                                                        }
                                                                    >
                                                                        {
                                                                            submenuLink.text
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </li>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <li
                                            key={i}
                                            className=' text-md md:text-lg lg:text-xl text-nowrap font-semibold'
                                        >
                                            <Link
                                                className='text-black hover:text-orange duration-200'
                                                href={link.link}
                                            >
                                                {link.text}
                                            </Link>
                                        </li>
                                    )
                                }
                            })}
                        </ul>

                        <Button
                            text='Kontakt'
                            link='/#kontakt'
                            variant={'1sm'}
                            id='navigation'
                            className='px-1 md:px-6'
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
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navigation
