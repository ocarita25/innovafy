import React from 'react'

type HeroProps = {
    title: string
}

const Hero = ({ title }: HeroProps) => {
    return (
        <div className='min-h-[80dvh] flex items-center px-15'>
            <h1 className='text-[5rem] leading-none lg:text-[7.5rem]'>{title}</h1>
        </div>
    )
}

export default Hero