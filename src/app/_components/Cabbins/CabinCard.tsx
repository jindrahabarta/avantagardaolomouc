'use client'
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import image from '@/../public/images/img1.jpg'
import Tag from '../ui/Tag'
import ButtonWithoutLink from '../Global/ButtonWithoutLink'
import CrossIcon from '../icons/CrossIcon'
import gsap from 'gsap'
import Button from '../Global/Button'
import Link from 'next/link'
import PhoneIcon from '../icons/PhoneIcon'
import EmailIcon from '../icons/EmailIcon'
import MapPinIcon from '../icons/MapPinIcon'

const CabinCard = ({
    img,
    title,
    tag,
    price1,
    price2,
}: {
    img?: string
    title: string
    tag: string
    price1: number
    price2: number
}) => {
    const [showDetail, setShowDetail] = useState(false)

    const openDetail = () => {
        if (showDetail) {
        } else {
            setShowDetail(true)
        }
    }

    return (
        <div
            onClick={openDetail}
            className='w-full relative flex items-end p-4 text-white group/cabbinCard  aspect-[7/8] select-none cursor-pointer'
        >
            {showDetail && (
                <CabbinDetail
                    handleClose={() => setShowDetail(false)}
                    title={tag}
                    subtitle={title}
                    img={image}
                    price1={price1}
                    price2={price2}
                ></CabbinDetail>
            )}
            <figure className=' absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden'>
                <div className='bg-black/30 z-10 group-hover/cabbinCard:bg-black/40 absolute top-0 left-0 w-full h-full duration-200'></div>

                <Image
                    src={image}
                    alt={title + img}
                    width={350}
                    height={400}
                    className='object-cover w-full h-full group-hover/cabbinCard:scale-105 duration-200'
                ></Image>
            </figure>
            <Tag
                className='absolute z-20 top-4 left-4 bg-white group-hover/cabbinCard:bg-orange group-hover/cabbinCard:text-white'
                text={tag}
            ></Tag>

            <div className='relative w-full z-20'>
                <h2 className='text-xl pb-2 duration-200'>{title}</h2>

                <div className='flex  justify-between items-end'>
                    <div>
                        <p>Cena</p>
                        <p className='font-bold text-lg'> {price1} Kč/min. </p>
                    </div>
                    {/* <div className='text-right'>
                        <p>S permanentkou</p>
                        <p className='font-bold text-lg'> {price} Kč/min. </p>
                    </div> */}
                    <ButtonWithoutLink
                        text='Zjistit více'
                        variant={'1sm'}
                        className='self-end'
                        id={title.replaceAll(' ', '-') + 'btn'}
                    ></ButtonWithoutLink>
                </div>
            </div>
        </div>
    )
}

export default CabinCard

const CabbinDetail = ({
    handleClose,
    title,
    subtitle,
    price1,
    price2,
}: {
    handleClose: () => void
    img: StaticImageData
    title: string
    subtitle: string
    price1: number
    price2: number
}) => {
    useEffect(() => {
        const openTl = gsap.timeline({ defaults: { duration: 0.2 } })

        openTl
            .to('.cardDetailMain', {
                opacity: 1,
            })
            .to('.cardDetailWrapper', {
                y: 0,
            })
    }, [])

    return (
        <aside className='cardDetailMain opacity-0 bg-black/50 backdrop-blur-sm top-0 left-0 w-full h-full fixed z-40 flex justify-center items-end px-4'>
            <div className='cardDetailWrapper translate-y-full text-black bg-white w-full sm:w-4/5 lg:w-2/3 h-[80vh] rounded-t-2xl p-8 pb-0 pr-0 overflow-y-auto relative'>
                <div className='h-full overflow-y-auto pr-4 pb-8'>
                    <div className='flex justify-between gap-2'>
                        <h2>{title}</h2>

                        <span
                            onClick={handleClose}
                            className=' bg-orange hover:bg-darkOrange rounded-xl p-1 h-fit shadow-md hover:shadow-none duration-200'
                        >
                            <CrossIcon className='w-10 stroke-white'></CrossIcon>
                        </span>
                    </div>
                    <p className='font-semibold'>{subtitle}</p>
                    {/* <p>{text}</p> */}

                    <h3 className='mt-4'>Ceník</h3>
                    <p>
                        Běžná cena:{' '}
                        <span className='font-semibold'>{price1} Kč/min</span>
                    </p>
                    <p>
                        S permanentkou:{' '}
                        <span className='font-semibold'>{price2} Kč/min</span>
                    </p>

                    <h3 className='mt-4'>Otevírací doba</h3>

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
                    <h3 className='mt-4'>Kontakt</h3>

                    <ul>
                        <li className='mt-2'>
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
                        <li className='mt-2'>
                            <Link
                                href={'mailto:info@solariumolomouc.cz'}
                                className='flex items-center gap-2 w-fit text-black duration-200 h-fit'
                            >
                                <EmailIcon className='w-6 h-auto fill-orange' />
                                <span>info@solariumolomouc.cz</span>
                            </Link>
                        </li>
                        <li className='mt-2'>
                            <Link
                                href={'tel:737331132'}
                                className='flex items-center gap-2 w-fit text-black duration-200 h-fit'
                            >
                                <PhoneIcon className='w-6 h-auto fill-orange' />
                                <span>+420 737 331 132</span>
                            </Link>
                        </li>
                    </ul>

                    <Button
                        variant='1sm'
                        text='Objednat se'
                        link='tel:737331132'
                        id='order'
                        className='mt-4'
                    ></Button>

                    <div className=' h-fit rounded-2xl overflow-hidden shadow-lg mt-4'>
                        <iframe
                            title='Mapa Solárium Avantagarda Olomouc'
                            width='100%'
                            height='300'
                            src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sokolsk%C3%A1%20536/22,%20779%2000%20Olomouc%209+(Sol%C3%A1rn%C3%AD%20studio%20avantgarda%20olomouc%20-%20mapa)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                        ></iframe>
                    </div>
                </div>
            </div>
        </aside>
    )
}
