import React from 'react'
import Image, { StaticImageData } from 'next/image'

const ProductCard = ({
    title,
    description,
    img,
}: {
    title: string
    description: string
    img: StaticImageData
}) => {
    return (
        <div>
            <Image
                src={img}
                width={500}
                height={500}
                alt={title}
                className='rounded-2xl'
            ></Image>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ProductCard
