import React from 'react'
import Image from 'next/image';

type ImageCardProps = {
    title: string;
    src: string;
} & React.HTMLAttributes<HTMLDivElement>

const ImageCard = ({ title, src, ...props }: ImageCardProps) => {
    return (
        <div className={`relative rounded-4xl overflow-hidden w-full ${props.className ?? ""}`}>
            <Image src={src} alt={"imagen"} fill className='object-cover' />
            <h1 className='absolute bottom-0 left-0 text-white text-2xl px-10 py-5 font-black '>
                {title}
            </h1>
        </div>
    )
}

export default ImageCard