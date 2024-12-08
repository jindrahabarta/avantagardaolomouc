import React from 'react'
import ImageGallery from './_Sections/ImageGallery'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Galerie',
    description:
        'Navštivte Solárium Avantgarda v centru Olomouce a dopřejte si profesionální opalování v moderním prostředí. Užijte si chvíle pro sebe plné relaxu!',
}

const Gallery = () => {
    return (
        <section id='galerie' className='pt-32 opacity-0'>
            <h1 className='text-center'>Galerie</h1>
            <ImageGallery></ImageGallery>
        </section>
    )
}

export default Gallery
