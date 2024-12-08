'use client'
import React from 'react'
import gsap from 'gsap'

interface props {
    variant: string
    text: string
    className?: string
    id: string
}

const ButtonWithoutLink = ({ text, variant, className, id }: props) => {
    const v1Hover: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const buttonRect = e.currentTarget.getBoundingClientRect()
        const offsetX = e.clientX - buttonRect.left
        const offsetY = e.clientY - buttonRect.top

        gsap.set('#buttonBg-' + id, {
            top: offsetY,
            left: offsetX,
        })
        gsap.to('#buttonBg-' + id, {
            width: 500,
            duration: 0.2,
        })
    }

    const v1NotHover: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const buttonRect = e.currentTarget.getBoundingClientRect()
        const offsetX = e.clientX - buttonRect.left
        const offsetY = e.clientY - buttonRect.top

        gsap.set('#buttonBg-' + id, {
            top: offsetY,
            left: offsetX,
        })
        gsap.to('#buttonBg-' + id, {
            width: 0,
            duration: 0.3,
        })
    }

    if (variant === '1sm')
        return (
            <button
                onMouseEnter={v1Hover}
                onMouseLeave={v1NotHover}
                type='button'
                aria-label={text}
                className={`${className} py-2 px-6 text-xl border-2 border-orange sm:hover:border-black duration-200 bg-orange rounded-2xl shadow-lg relative overflow-hidden group/button`}
            >
                <figure
                    id={`buttonBg-${id}`}
                    className='absolute aspect-square rounded-full bg-white/90 hidden sm:block  -translate-x-1/2 -translate-y-1/2'
                ></figure>
                <div className='font-semibold text-white sm:group-hover/button:text-black duration-200 text-nowrap relative'>
                    {text}
                </div>
            </button>
        )

    if (variant === '1lg')
        return (
            <button
                onMouseEnter={v1Hover}
                onMouseLeave={v1NotHover}
                type='button'
                aria-label={text}
                className={`${className} py-3 px-8 text-xl border-2 border-orange sm:hover:border-black duration-200 bg-orange rounded-2xl shadow-lg relative overflow-hidden group/button`}
            >
                <figure
                    id={`buttonBg-${id}`}
                    className='absolute aspect-square rounded-full bg-white/90 hidden sm:block  -translate-x-1/2 -translate-y-1/2'
                ></figure>
                <div className='font-semibold text-white sm:group-hover/button:text-black duration-200 text-nowrap relative'>
                    {text}
                </div>
            </button>
        )

    if (variant === '2lg')
        return (
            <button
                onMouseEnter={v1Hover}
                onMouseLeave={v1NotHover}
                type='button'
                aria-label={text}
                className={`${className} py-3 px-8 text-xl border-2 border-white sm:hover:border-black duration-200 bg-white/20 rounded-2xl shadow-lg relative overflow-hidden group/button`}
            >
                <figure
                    id={`buttonBg-${id}`}
                    className='absolute aspect-square rounded-full bg-white/90 hidden sm:block  -translate-x-1/2 -translate-y-1/2'
                ></figure>
                <div className='font-semibold text-white sm:group-hover/button:text-black duration-200 text-nowrap relative'>
                    {text}
                </div>
            </button>
        )
}

export default ButtonWithoutLink
