import React from 'react'
import Image from 'next/image'
import CrossIcon from '../icons/CrossIcon'

const ImageDetail = ({
    handleClose,
    src,
}: {
    handleClose: () => void
    src: string
}) => {
    return (
        <figure
            onClick={handleClose}
            className='fixed top-0 left-0 w-screen h-screen bg-black/20 z-40 flex items-center justify-center backdrop-blur-sm p-4'
        >
            <div className='w-full md:w-[70vw] h-fit flex gap-5 sm:gap-20 justify-center relative'>
                <button
                    className='absolute top-4 right-4 group/button'
                    onClick={handleClose}
                >
                    <CrossIcon className='w-10  transition-all stroke-violet dark:stroke-white group-hover/button:stroke-pink duration-100'></CrossIcon>
                </button>

                <div className='w-full md:w-full rounded-2xl overflow-hidden h-fit'>
                    <Image
                        src={src}
                        alt={`image-${src}-detail`}
                        width={1200}
                        height={1200}
                        className='w-full h-full object-cover'
                    ></Image>
                </div>
                {/* <div className='absolute top-0 left-0 w-full h-full bg-black/50'></div> */}
            </div>
        </figure>
    )
}

export default ImageDetail
