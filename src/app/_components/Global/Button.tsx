import React from 'react'
import gsap from 'gsap'

interface props {
    variant: number
    text: string
    link: string
    className?: string
}

const Button = ({ text, variant, link, className }: props) => {
    const v1Hover: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const buttonRect = e.currentTarget.getBoundingClientRect()
        const offsetX = e.clientX - buttonRect.left
        const offsetY = e.clientY - buttonRect.top

        gsap.set('#buttonBg', {
            top: offsetY,
            left: offsetX,
        })
        gsap.to('#buttonBg', {
            width: 500,
            duration: 0.2,
        })
    }

    const v1NotHover: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const buttonRect = e.currentTarget.getBoundingClientRect()
        const offsetX = e.clientX - buttonRect.left
        const offsetY = e.clientY - buttonRect.top

        gsap.set('#buttonBg', {
            top: offsetY,
            left: offsetX,
        })
        gsap.to('#buttonBg', {
            width: 0,
            duration: 0.3,
        })
    }

    if (variant === 1)
        return (
            <button
                onMouseEnter={v1Hover}
                onMouseLeave={v1NotHover}
                type='button'
                aria-label={text + link}
                className={` border-2 border-orange hover:border-black duration-200 bg-orange rounded-2xl shadow-lg ${className} relative overflow-hidden group/button`}
            >
                <figure
                    id='buttonBg'
                    className='absolute aspect-square rounded-full bg-white/90 -translate-x-1/2 -translate-y-1/2'
                ></figure>
                <div className='py-2 px-10 text-xl font-semibold  text-white group-hover/button:text-black duration-200 text-nowrap relative'>
                    {text}
                </div>
            </button>
        )
}

export default Button
