import React from 'react'

const TypeCard = ({
    title,
    text,
    dot,
}: {
    title: string
    text: string
    dot?: string
}) => {
    return (
        <div className='group relative rounded-2xl p-5 pt-10 sm:p-8 border border-gray-400 shadow-md hover:shadow-sm duration-200'>
            <div
                className={`absolute top-4 left-4 h-4 w-4 rounded-full ${dot} duration-200`}
            ></div>
            <h2>{title}</h2>

            <p className='mt-4'>{text}</p>
        </div>
    )
}

export default TypeCard
