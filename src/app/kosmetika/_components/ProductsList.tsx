import React from 'react'
import ProductCard from './ProductCard'
import img from '@/../public/images/cabbins/2.webp'

const Products = [
    {
        name: 'prod1',
        description: 'xd',
        img: img,
    },
    {
        name: 'prod1',
        description: 'xd',
        img: img,
    },
    {
        name: 'prod1',
        description: 'xd',
        img: img,
    },
    {
        name: 'prod1',
        description: 'xd',
        img: img,
    },
]

const ProductsList = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4'>
            {Products.map((product, i) => (
                <React.Fragment key={i}>
                    <ProductCard
                        title={product.name}
                        description={product.description}
                        img={product.img}
                    ></ProductCard>
                </React.Fragment>
            ))}
        </div>
    )
}

export default ProductsList
