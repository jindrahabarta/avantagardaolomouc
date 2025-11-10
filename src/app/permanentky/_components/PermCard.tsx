import Button from '@/app/_components/Global/Button'
import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'

const PermCard = ({
    title,
    text,
    img,
}: {
    title: string
    text: string
    img: StaticImageData
}) => {
    return (
        <div className='group rounded-2xl p-5 pt-10 sm:p-8 border border-gray-400 shadow-md hover:shadow-sm duration-200 mt-4 w-full group'>
            <div className='flex gap-5 flex-col-reverse sm:flex-row justify-between'>
                <div className='w-full'>
                    <h2 className='text-2xl sm:text-3xl'>
                        Permanentka - {title}
                    </h2>
                    <p className='mt-4'>{text}</p>

                    <div className='flex justify-end sm:justify-start '>
                        <Button
                            variant='1sm'
                            text='Objednat'
                            link='tel:737331132'
                            id={'permanentka-' + title.replaceAll(' ', '-')}
                            className='mt-4'
                        ></Button>
                    </div>
                    <p className='text-sm text-end sm:text-left mt-2'>
                        *Objednat lze na tel.č.: 737 331 132
                    </p>
                </div>
                <div className='flex items-center self-center w-44 sm:w-32 sm:group-hover:pb-3 duration-200'>
                    <Image
                        src={img}
                        width={300}
                        height={300}
                        alt={title}
                        className=' sm:opacity-70 sm:group-hover:opacity-90 duration-200'
                    ></Image>
                </div>
            </div>
        </div>
    )
}

export default PermCard
