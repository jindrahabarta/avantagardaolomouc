'use client'
import React from 'react'
import Image from 'next/image'
import image from '@/../public/images/img1.jpg'
import Button from '../Global/Button'
import Tag from '../ui/Tag'

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
    return (
        <div className='w-full relative flex items-end p-4 text-white group/cabbinCard  aspect-[7/8]'>
            <figure className='bg-black absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden '>
                <Image
                    src={image}
                    alt={title + img}
                    width={350}
                    height={400}
                    className='object-cover w-full h-full opacity-75 group-hover/cabbinCard:opacity-60 group-hover/cabbinCard:scale-105 duration-200'
                ></Image>
            </figure>
            <Tag
                className='absolute top-4 left-4 bg-white group-hover/cabbinCard:bg-orange group-hover/cabbinCard:text-white'
                text={tag}
            ></Tag>

            <div className='relative w-full'>
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
                    <Button
                        text='Zjistit více'
                        link='xd'
                        variant={'1sm'}
                        className='self-end'
                        id={title.replaceAll(' ', '-') + 'btn'}
                    ></Button>
                </div>
            </div>
        </div>
    )
}

export default CabinCard
