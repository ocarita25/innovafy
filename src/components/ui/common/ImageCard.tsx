import React from 'react'

type ImageCardProps = {
    title: string;
    src: string;
} & React.HTMLAttributes<HTMLDivElement>

const ImageCard = ({ title, src, ...props }: ImageCardProps) => {
    return (
        <div className={`flex relative overflow-hidden ${props.className ?? ""}`}>
            <img src={src} alt={"imagen"} className='w-full h-full object-contain' />
            <h1 className='absolute bottom-0 left-0 text-white text-2xl px-10 py-5 font-black '>
                {title}
            </h1>
        </div>
    )
}

export default ImageCard