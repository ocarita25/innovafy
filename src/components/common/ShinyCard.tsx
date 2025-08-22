
import React from 'react'

type ShinyCardProps = {
    src: string
};

const ShinyCard = ({ src }: ShinyCardProps) => {
    return (
        <div className='relative aspect-square flex items-center justify-center rounded-4xl bg-yellow-50 overflow-hidden'>
            <img src={src} alt={"imageShiny"} className='w-full h-full object-contain p-5' />
        </div>
    )
}

export default ShinyCard