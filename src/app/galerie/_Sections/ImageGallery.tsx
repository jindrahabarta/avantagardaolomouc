'use client'
import React from 'react'
import Image from 'next/image'
// import CrossIcon from '../icons/CrossIcon'
// import ChevronDownIcon from '../icons/ChevronDownIcon'
import img1 from '@/../public/images/galerie/001.jpg'
import img2 from '@/../public/images/galerie/004.jpg'
import img3 from '@/../public/images/galerie/006.jpg'
import img5 from '@/../public/images/galerie/008.jpg'
import img6 from '@/../public/images/galerie/010.jpg'
import img7 from '@/../public/images/galerie/019.jpg'
import Tag from '../../_components/ui/Tag'

// const images = [
//     {
//         img: img1,
//         alt: 'img1',
//     },
//     {
//         img: img2,
//         alt: 'img2',
//     },
//     {
//         img: img3,
//         alt: 'img3',
//     },
//     {
//         img: img4,
//         alt: 'img3',
//     },
//     {
//         img: img5,
//         alt: 'img4',
//     },
//     {
//         img: img6,
//         alt: 'img5',
//     },
//     {
//         img: img7,
//         alt: 'img6',
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
        // <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mt-4'>
        //     {detailOpened !== undefined && (
        //         <ImageDetail
        //             handleClose={closeImage}
        //             images={images}
        //             index={detailOpened}
        //         ></ImageDetail>
        //     )}

        //     {images.map((img, i) => (
        //         <div
        //             key={i}
        //             className='w-full aspect-square rounded-2xl overflow-hidden cursor-pointer'
        //             onClick={() => openImage(i)}
        //         >
        //             <Image
        //                 src={img.img}
        //                 width={250}
        //                 height={250}
        //                 alt={i.toString()}
        //                 className='w-full h-full object-cover hover:scale-105 duration-200 transition-all'
        //             ></Image>
        //         </div>
        //     ))}
        // </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
            <div className='rounded-2xl aspect-[4/5] overflow-hidden relative group/galleryImage'>
                <Image
                    src={img5}
                    alt='image'
                    className='w-full h-full object-cover group-hover/galleryImage:scale-105 duration-200 select-none'
                ></Image>
                <figure className='group-hover/galleryImage:bg-black/20 duration-200 absolute top-0 left-0 w-full h-full'></figure>
                <Tag
                    className='absolute top-4 left-4 bg-white group-hover/galleryImage:bg-orange group-hover/galleryImage:text-white pointer-events-none'
                    text='Recepce'
                ></Tag>
            </div>

            <div className='rounded-2xl aspect-[4/5] overflow-hidden relative group/galleryImage'>
                <Image
                    src={img3}
                    alt='image'
                    className='w-full h-full object-cover group-hover/galleryImage:scale-105 duration-200 select-none'
                ></Image>
                <figure className='group-hover/galleryImage:bg-black/20 duration-200 absolute top-0 left-0 w-full h-full'></figure>
                <Tag
                    className='absolute top-4 left-4 bg-white group-hover/galleryImage:bg-orange group-hover/galleryImage:text-white pointer-events-none'
                    text={'Předsíň'}
                ></Tag>
            </div>
            <div className='rounded-2xl aspect-[4/5] overflow-hidden relative group/galleryImage'>
                <Image
                    src={img1}
                    alt='image'
                    className='w-full h-full object-cover group-hover/galleryImage:scale-105 duration-200 select-none'
                ></Image>
                <figure className='group-hover/galleryImage:bg-black/20 duration-200 absolute top-0 left-0 w-full h-full'></figure>
                <Tag
                    className='absolute top-4 left-4 bg-white group-hover/galleryImage:bg-orange group-hover/galleryImage:text-white pointer-events-none'
                    text='Zahrádka'
                ></Tag>
            </div>
            <div className='rounded-2xl aspect-[4/5] overflow-hidden relative group/galleryImage'>
                <Image
                    src={img2}
                    alt='image'
                    className='w-full h-full object-cover group-hover/galleryImage:scale-105 duration-200 select-none'
                ></Image>
                <figure className='group-hover/galleryImage:bg-black/20 duration-200 absolute top-0 left-0 w-full h-full'></figure>
                <Tag
                    className='absolute top-4 left-4 bg-white group-hover/galleryImage:bg-orange group-hover/galleryImage:text-white pointer-events-none'
                    text='Recepce'
                ></Tag>
            </div>
            <div className='rounded-2xl aspect-[4/5] overflow-hidden relative group/galleryImage'>
                <Image
                    src={img6}
                    alt='image'
                    className='w-full h-full object-cover group-hover/galleryImage:scale-105 duration-200 select-none'
                ></Image>
                <figure className='group-hover/galleryImage:bg-black/20 duration-200 absolute top-0 left-0 w-full h-full'></figure>
                <Tag
                    className='absolute top-4 left-4 bg-white group-hover/galleryImage:bg-orange group-hover/galleryImage:text-white pointer-events-none'
                    text={'Předsíň'}
                ></Tag>
            </div>
            <div className='rounded-2xl aspect-[4/5] overflow-hidden relative group/galleryImage'>
                <Image
                    src={img7}
                    alt='image'
                    className='w-full h-full object-cover group-hover/galleryImage:scale-105 duration-200 select-none'
                ></Image>
                <figure className='group-hover/galleryImage:bg-black/20 duration-200 absolute top-0 left-0 w-full h-full'></figure>
                <Tag
                    className='absolute top-4 left-4 bg-white group-hover/galleryImage:bg-orange group-hover/galleryImage:text-white pointer-events-none'
                    text={'Předsíň'}
                ></Tag>
            </div>
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
//     images: { img: StaticImageData; alt: string }[]
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
//                         src={images[selectedImage].img}
//                         alt={`image-${selectedImage}-detail`}
//                         width={600}
//                         height={600}
//                         className='w-full h-full object-cover'
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
