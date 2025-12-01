import React from 'react'

type SlideProps = {
    imgTitle: string,
    imgSrc: string,
    date: string,
    title: string,
    description: string
}

const Slide = ({ imgTitle, imgSrc, date, title, description }: SlideProps) => {
    return (
        <article className=''>
            <div className='relative overflow-hidden rounded-3xl'>
                <img src={imgSrc} className="w-full h-full" />
                <div className='absolute bottom-0 ml-5 mb-4'>
                    <span className='text-xs bg-transparent px-3 py-2 rounded-full backdrop-blur-3xl text-white'>
                        {imgTitle}
                    </span>
                </div>
            </div>
            <div className='text-[var(--color-theme-secondary)]'>
                <div className="py-5">
                    <span>{date}</span>
                </div>
                <div className="pb-10 text-[clamp(1.125rem,1.19vw,1.496rem)]">
                    <span>{title}: <span className='opacity-60'>{description}</span></span>
                </div>
                <div className="underline opacity-60">
                    <span>{"Explore"}</span>
                </div>
            </div>
        </article>
    )
}

export default Slide