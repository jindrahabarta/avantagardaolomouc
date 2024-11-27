'use client'
// import React, { useState } from 'react'
// import Image from 'next/image'
// import CrossIcon from '../icons/CrossIcon'
// import ChevronDownIcon from '../icons/ChevronDownIcon'

// const images = [
//     {
//         img: 'xd',
//         alt: 'xd',
//     },
// ]

const ImageGallery = () => {
    // const [detailOpened, setDetailOpened] = useState<number | undefined>()

    // const openImage = (index: number) => {
    //     setDetailOpened(index)
    //     document.body.classList.add('noScroll')
    // }

    // const closeImage = () => {
    //     setDetailOpened(undefined)
    //     document.body.classList.remove('noScroll')
    // }

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
            {/* {detailOpened !== undefined && (
                <ImageDetail
                    handleClose={closeImage}
                    images={images}
                    index={detailOpened}
                ></ImageDetail>
            )}
            {images.map((img, i) => (
                <div
                    key={i}
                    className='w-full aspect-square rounded-2xl overflow-hidden cursor-pointer'
                    onClick={() => openImage(i)}
                >
                    <Image
                        src={img}
                        width={250}
                        height={250}
                        alt={i.toString()}
                        className='w-full hover:scale-105 duration-200 transition-all'
                    ></Image>
                </div>
            ))} */}
        </div>
    )
}

export default ImageGallery

// const ImageDetail = ({
//     handleClose,
//     images,
//     index,
// }: {
//     handleClose: () => void
//     images: string[]
//     index: number
// }) => {
//     const [selectedImage, setSelectedImage] = useState(index)

//     const nextImg = () => {
//         if (selectedImage === images.length - 1) {
//             setSelectedImage(0)
//         } else {
//             setSelectedImage((prev) => prev + 1)
//         }
//     }

//     const prevImg = () => {
//         if (selectedImage === 0) {
//             setSelectedImage(images.length - 1)
//         } else {
//             setSelectedImage((prev) => prev - 1)
//         }
//     }

//     return (
//         <figure className='fixed top-0 left-0 w-screen h-screen bg-black/20 z-40 flex items-center justify-center backdrop-blur-sm'>
//             <div className='w-full md:w-[70vw] h-fit flex gap-5 sm:gap-20 justify-center relative'>
//                 <button
//                     className='absolute top-0 right-0 group/button'
//                     onClick={handleClose}
//                 >
//                     <CrossIcon className='w-10  transition-all stroke-violet dark:stroke-white group-hover/button:stroke-pink duration-100'></CrossIcon>
//                 </button>
//                 <div className='flex items-center'>
//                     <button className='group/button' onClick={prevImg}>
//                         <ChevronDownIcon className='rotate-90 w-10 stroke-violet dark:stroke-white group-hover/button:stroke-pink duration-200'></ChevronDownIcon>
//                     </button>
//                 </div>
//                 <div className='w-2/3 md:w-1/2 aspect-square rounded-2xl overflow-hidden'>
//                     <Image
//                         src={images[selectedImage]}
//                         alt={`image-${selectedImage}-detail`}
//                         width={600}
//                         height={600}
//                         className='w-full'
//                     ></Image>
//                 </div>
//                 <div className='flex items-center'>
//                     <button className='group/button' onClick={nextImg}>
//                         <ChevronDownIcon className='-rotate-90 w-10 stroke-violet dark:stroke-white group-hover/button:stroke-pink duration-200'></ChevronDownIcon>
//                     </button>
//                 </div>
//             </div>
//         </figure>
//     )
// }
