'use client'
import React from 'react'
import Image from 'next/image'
import Tag from '../../_components/ui/Tag'

import Budova from '@/../public/images/galerie/Budova.webp'
import Vstup from '@/../public/images/galerie/Vstup.webp'
import Predsin from '@/../public/images/galerie/Předsíň.webp'
import PohledNaPredsin from '@/../public/images/galerie/Pohled na předsíň.webp'
import Recepce from '@/../public/images/galerie/Recepce.webp'
import Recepce2 from '@/../public/images/galerie/Recpce 2.webp'
import PohledNaZahradku from '@/../public/images/galerie/Pohled na zahrádku z předsíně.webp'
import VenkovniZahradka from '@/../public/images/galerie/Venkovní zahrádka.webp'
import VenkovniZahradka2 from '@/../public/images/galerie/Venkovní zahrádka 2.webp'
import Chodba from '@/../public/images/galerie/Chodba.webp'
import Chodba2 from '@/../public/images/galerie/Chodba 2.webp'
import PohledZChodby from '@/../public/images/galerie/Pohled z chodby.webp'
import Kabina1 from '@/../public/images/galerie/Kabinka 1.webp'
import Kabina4 from '@/../public/images/galerie/Kabinka 4.webp'
import Kabina5 from '@/../public/images/galerie/Kabinka 5.webp'
import Kabina6 from '@/../public/images/galerie/Kabinka 6.webp'
import Kabina6_2 from '@/../public/images/galerie/Kabinka 6 2.webp'
// import CrossIcon from '@/app/_components/icons/CrossIcon'
// import ChevronDownIcon from '@/app/_components/icons/ChevronDownIcon'

const images = [
    {
        img: Budova,
        alt: 'Budova z venku',
    },
    {
        img: Vstup,
        alt: 'Vstup',
    },
    {
        img: PohledNaPredsin,
        alt: 'Pohled na předsíň',
    },
    {
        img: Predsin,
        alt: 'Předsíň',
    },
    {
        img: Recepce2,
        alt: 'Recepce',
    },
    {
        img: Recepce,
        alt: 'Recepce',
    },
    {
        img: PohledNaZahradku,
        alt: 'Pohled na zahrádku z předsíně',
    },
    {
        img: VenkovniZahradka,
        alt: 'Venkovní zahrádka',
    },
    {
        img: VenkovniZahradka2,
        alt: 'Venkovní zahrádka 2',
    },
    {
        img: Chodba,
        alt: 'Chodba',
    },
    {
        img: Chodba2,
        alt: 'Chodba',
    },
    {
        img: PohledZChodby,
        alt: 'Pohled z chodby',
    },
    {
        img: Kabina1,
        alt: 'Kabinka 1',
    },
    {
        img: Kabina4,
        alt: 'Kabinka 4',
    },
    {
        img: Kabina5,
        alt: 'Kabinka 5',
    },
    {
        img: Kabina6,
        alt: 'Kabinka 6',
    },
    {
        img: Kabina6_2,
        alt: 'Kabinka 6',
    },
]

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
        <>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 relative'>
                {/* {detailOpened !== undefined && (
                    <ImageDetail
                        handleClose={closeImage}
                        images={images}
                        index={detailOpened}
                    ></ImageDetail>
                )} */}
                {images.map((img, i) => (
                    <div
                        // onClick={() => {
                        //     console.log(window.screen.width)

                        //     if (window.screen.width > 640) {
                        //         openImage(i)
                        //     }
                        // }}
                        key={img.alt + i}
                        className='rounded-2xl aspect-[4/5] overflow-hidden relative group/galleryImage'
                    >
                        <Image
                            src={img.img}
                            alt={img.alt}
                            className='w-full h-full object-cover group-hover/galleryImage:scale-105 duration-200 select-none'
                        ></Image>
                        <figure className='group-hover/galleryImage:bg-black/20 duration-200 absolute top-0 left-0 w-full h-full'></figure>
                        <Tag
                            className='absolute top-4 left-4 bg-white group-hover/galleryImage:bg-orange group-hover/galleryImage:text-white pointer-events-none'
                            text={img.alt}
                        ></Tag>
                    </div>
                ))}
            </div>
        </>
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
//         <figure className='fixed top-0 left-0 w-full h-screen pt-20  flex items-center justify-center backdrop-blur-sm z-50'>
//             <div className='w-full md:w-[70vw] h-fit flex gap-5 sm:gap-20 justify-center relative'>
//                 <button
//                     className='absolute top-0 right-0 group/button'
//                     onClick={handleClose}
//                 >
//                     <CrossIcon className='w-10 text-orange hvoer transition-all group-hover/button:text-red-500 duration-200'></CrossIcon>
//                 </button>
//                 <div className='flex items-center'>
//                     <button className='group/button' onClick={prevImg}>
//                         <ChevronDownIcon className='rotate-90 w-10 stroke-white group-hover/button:stroke-orange group-hover/button:-translate-x-1 duration-200'></ChevronDownIcon>
//                     </button>
//                 </div>
//                 <div className='w-2/3 md:w-screen lg:w-2/5 aspect-[4/5] rounded-2xl overflow-hidden'>
//                     <Image
//                         src={images[selectedImage].img}
//                         alt={`image-${selectedImage}-detail`}
//                         width={1000}
//                         height={1000}
//                         className='w-full h-full object-cover'
//                     ></Image>
//                 </div>
//                 <div className='flex items-center'>
//                     <button className='group/button' onClick={nextImg}>
//                         <ChevronDownIcon className='-rotate-90 w-10 stroke-white group-hover/button:stroke-orange group-hover/button:translate-x-1 duration-200'></ChevronDownIcon>
//                     </button>
//                 </div>
//             </div>
//         </figure>
//     )
// }
