import React from 'react'
import Image from 'next/image'
import E404Img from '@/../public/images/e404-IMG.png'
import Button from './_components/Global/Button'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Stránka nebyla nalezena | Solárium Avantgarda Olomouc',
    description:
        'Navštivte Solárium Avantgarda v centru Olomouce a dopřejte si profesionální opalování v moderním prostředí. Užijte si chvíle pro sebe plné relaxu!',
}

const NotFound = () => {
    return (
        <section className='h-screen flex gap-10 items-center justify-center'>
            <Image
                className=' z-10 opacity-30 absolute w-1/2 select-none'
                src={E404Img}
                alt='Error 404 Image'
            ></Image>
            <div className='z-20 flex flex-col items-center'>
                <h1 className='text-center'>Tato stránka neexistuje</h1>
                <Button
                    id='page-not-found'
                    variant='1lg'
                    text='Jít domů'
                    link='/'
                ></Button>
            </div>
        </section>
    )
}

export default NotFound
