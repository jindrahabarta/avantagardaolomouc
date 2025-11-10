import React from 'react'

const Tag = ({ text, className }: { text: string; className?: string }) => {
    return (
        <div
            className={` text-black font-bold px-2 py-1 rounded-2xl duration-200 ${className}`}
        >
            {text}
        </div>
    )
}

export default Tag
