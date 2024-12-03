'use client'
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import image from '@/../public/images/img1.jpg'
import Tag from '../ui/Tag'
import ButtonWithoutLink from '../Global/Button copy'
import CrossIcon from '../icons/CrossIcon'
import gsap from 'gsap'
import Button from '../Global/Button'

const CabinCard = ({
    img,
    title,
    tag,
    price,
}: {
    img?: string
    title: string
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
            className='w-full relative flex items-end p-4 text-white group/cabbinCard  aspect-[7/8] select-none cursor-pointer'
        >
            {showDetail && (
                <CabbinDetail
                    handleClose={() => setShowDetail(false)}
                    title={title}
                    text={title}
                    img={image}
                    price={price}
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
                        <p className='font-bold text-lg'> {price} Kč/min. </p>
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
    img,
    title,
    text,
    price,
}: {
    handleClose: () => void
    img: StaticImageData
    title: string
    text: string
    price: number
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
        <aside className='cardDetailMain opacity-0 bg-black/50 top-0 left-0 w-full h-full fixed z-40 flex justify-center items-end px-4'>
            <div className='cardDetailWrapper translate-y-full text-black bg-white w-full sm:w-4/5 lg:w-2/3 h-[80vh] rounded-t-2xl p-4 relative'>
                <span
                    onClick={handleClose}
                    className='absolute top-4 right-4 bg-orange rounded-xl p-1 shadow-md hover:shadow-none duration-200'
                >
                    <CrossIcon className='w-10 stroke-white'></CrossIcon>
                </span>
                <h2>{title}</h2>
                <p>{text}</p>
                <p>{price} Kč/min</p>
                <Image src={img} alt='Obrázek kabinky'></Image>
                <div>
                    <Button
                        variant='1sm'
                        text='Objednat se'
                        link='tel:333333333'
                        id='order'
                    ></Button>
                </div>
            </div>
        </aside>
    )
}
