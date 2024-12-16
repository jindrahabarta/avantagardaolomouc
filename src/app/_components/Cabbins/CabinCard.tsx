'use client'
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
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
    text,
    tag,
    price,
}: {
    img: StaticImageData
    title: string
    text: string
    tag: string
    price: number
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
            className='w-full relative flex items-end p-4 text-white group/cabbinCard aspect-[7/8] cursor-pointer relative'
        >
            {showDetail && (
                <figure
                    onClick={() => setShowDetail(false)}
                    className='cardDetailMain opacity-0 bg-black/50 backdrop-blur-sm top-0 left-0 w-full h-full fixed z-30 flex justify-center items-end px-4'
                ></figure>
            )}
            {showDetail && (
                <CabbinDetail
                    handleClose={() => setShowDetail(false)}
                    title={tag}
                    text={text}
                    subtitle={title}
                    img={img}
                    price={price}
                ></CabbinDetail>
            )}
            <figure className=' absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden'>
                <div className='bg-black/60 z-10 group-hover/cabbinCard:bg-black/40 absolute top-0 left-0 w-full h-full duration-200'></div>

                <Image
                    src={img}
                    alt={'Obrázek' + title}
                    width={400}
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

                <div className='flex  justify-between items-end mb-2'>
                    <div>
                        <p className='text-sm'>Základní cena</p>
                        <p className='font-bold text-lg'> {price} Kč/min</p>
                    </div>
                    <div>
                        <p className='text-sm text-right'>
                            Cena s permanentkou
                        </p>
                        <p className='font-bold text-lg text-right'>
                            {price / 2} Kč/min
                        </p>
                    </div>
                </div>
                <ButtonWithoutLink
                    text='Zjistit více'
                    variant='1sm'
                    className='w-full'
                    id={tag.replaceAll(' ', '-') + 'btn'}
                ></ButtonWithoutLink>
            </div>
        </div>
    )
}

export default CabinCard

const CabbinDetail = ({
    handleClose,
    title,
    text,
    subtitle,
    img,
    price,
}: {
    handleClose: () => void
    title: string
    text: string
    subtitle: string
    img: StaticImageData
    price: number
}) => {
    useEffect(() => {
        const openTl = gsap.timeline({ defaults: { duration: 0.2 } })

        openTl
            .to('.cardDetailMain', {
                opacity: 1,
            })
            .to('.cardDetailWrapper', {
                translateY: 0,
            })
    }, [])

    return (
        <div className='cardDetailWrapper translate-y-full max-w-[1392px] text-black bg-white w-full sm:w-4/5 lg:w-2/3 h-[80vh] rounded-t-2xl p-8 pb-0 pr-0 overflow-y-auto fixed bottom-0 left-1/2 -translate-x-1/2 z-40 '>
            <div className='h-full overflow-y-auto pr-4 pb-8'>
                <div className='flex justify-between gap-2 fixed left-0 top-0 w-full pr-2 pl-8 pt-8 pb-2 bg-white z-10'>
                    <h2>{title}</h2>

                    <span
                        onClick={handleClose}
                        className=' bg-orange hover:bg-darkOrange rounded-xl p-1 h-fit shadow-md hover:shadow-none duration-200'
                    >
                        <CrossIcon className='w-10 stroke-white'></CrossIcon>
                    </span>
                </div>
                <p className='font-semibold mt-20'>{subtitle}</p>
                <div className='flex flex-col gap-4 lg:flex-row justify-between mt-2'>
                    <div>
                        <p>{text}</p>
                        <h3 className='mt-4'>Ceník</h3>
                        <p>
                            Základní cena:{' '}
                            <span className='font-semibold'>
                                {price} Kč/min
                            </span>
                        </p>
                        <p>
                            S permanentkou:{' '}
                            <span className='font-semibold'>
                                {price / 2} Kč/min
                            </span>
                        </p>

                        <h3 className='mt-4'>Otevírací doba</h3>

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
                                    href='mailto:&#105;&#110;&#102;&#111;&#64;&#115;&#111;&#108;&#97;&#114;&#105;&#117;&#109;&#111;&#108;&#111;&#109;&#111;&#117;&#99;&#46;&#99;&#122;'
                                    className='flex items-center gap-2 w-fit text-black duration-200 h-fit'
                                >
                                    <EmailIcon className='w-6 h-auto fill-orange' />
                                    <span>
                                        &#105;&#110;&#102;&#111;&#64;&#115;&#111;&#108;&#97;&#114;&#105;&#117;&#109;&#111;&#108;&#111;&#109;&#111;&#117;&#99;&#46;&#99;&#122;
                                    </span>
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
                    </div>

                    <div className='rounded-2xl overflow-hidden h-fit'>
                        <Image
                            className='object-contain rounded-2xl md:max-w-[400px]'
                            src={img}
                            width={500}
                            height={500}
                            alt={'Detailní obrázek kabinky' + title}
                        ></Image>
                    </div>
                </div>

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
    )
}
