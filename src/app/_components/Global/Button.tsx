import React from 'react'
import gsap from 'gsap'
import Link from 'next/link'

interface props {
    variant: string
    text: string
    link: string
    className?: string
    id: string
}

const Button = ({ text, variant, link, className, id }: props) => {
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
            <Link href={link}>
                <button
                    onMouseEnter={v1Hover}
                    onMouseLeave={v1NotHover}
                    type='button'
                    aria-label={text + link}
                    className={`${className} py-2 px-6 text-xl border-2 border-orange hover:border-black duration-200 bg-orange rounded-2xl shadow-lg relative overflow-hidden group/button`}
                >
                    <figure
                        id={`buttonBg-${id}`}
                        className='absolute aspect-square rounded-full bg-white/90 -translate-x-1/2 -translate-y-1/2'
                    ></figure>
                    <div className='font-semibold text-white group-hover/button:text-black duration-200 text-nowrap relative'>
                        {text}
                    </div>
                </button>
            </Link>
        )

    if (variant === '1lg')
        return (
            <Link href={link}>
                <button
                    onMouseEnter={v1Hover}
                    onMouseLeave={v1NotHover}
                    type='button'
                    aria-label={text + link}
                    className={`${className} py-3 px-8 text-xl border-2 border-orange hover:border-black duration-200 bg-orange rounded-2xl shadow-lg relative overflow-hidden group/button`}
                >
                    <figure
                        id={`buttonBg-${id}`}
                        className='absolute aspect-square rounded-full bg-white/90 -translate-x-1/2 -translate-y-1/2'
                    ></figure>
                    <div className='font-semibold text-white group-hover/button:text-black duration-200 text-nowrap relative'>
                        {text}
                    </div>
                </button>
            </Link>
        )

    if (variant === '2lg')
        return (
            <Link href={link}>
                <button
                    onMouseEnter={v1Hover}
                    onMouseLeave={v1NotHover}
                    type='button'
                    aria-label={text + link}
                    className={`${className} py-3 px-8 text-xl border-2 border-white hover:border-black duration-200 bg-white/20 rounded-2xl shadow-lg relative overflow-hidden group/button`}
                >
                    <figure
                        id={`buttonBg-${id}`}
                        className='absolute aspect-square rounded-full bg-white/90 -translate-x-1/2 -translate-y-1/2'
                    ></figure>
                    <div className='font-semibold text-white group-hover/button:text-black duration-200 text-nowrap relative'>
                        {text}
                    </div>
                </button>
            </Link>
        )
}

export default Button
