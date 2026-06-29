type SlideProps = {
    imgTitle: string,
    imgSrc: string,
    date: string,
    title: string,
    description: string
}

const Slide = ({ imgTitle, imgSrc, title, description }: SlideProps) => {
    return (
        <article>
            <div className='relative rounded-3xl'>
                <img src={imgSrc} className="w-full h-full rounded-4xl aspect-[3/4] object-cover" />
                <div className='absolute bottom-0 ml-5 mb-4'>
                    <span className='text-[0.9rem] bg-transparent px-2 py-2 rounded-full backdrop-blur-3xl text-white'>
                        {imgTitle}
                    </span>
                </div>
            </div>
            <div className='text-color-primary'>
                {/* <div className="py-5">
                    <span>{date}</span>
                </div> */}
                <div className="mt-5 pb-10 text-[clamp(1.125rem,1.19vw,1.35rem)] leading-[1.5]">
                    <span className="font-black">{title}: <span className='opacity-60 font-medium'>{description}</span></span>
                </div>
                {/* <div className="underline opacity-60 text-[clamp(1rem,1vw,1.2rem)]">
                    <span>{"Explore"}</span>
                </div> */}
            </div>
        </article>
    )
}

export default Slide