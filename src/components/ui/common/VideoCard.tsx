import React from 'react'

type VideoCardProps = {
    title: string;
    src: string;
} & React.HTMLAttributes<HTMLDivElement>

const VideoCard = ({ title, src, ...props }: VideoCardProps) => {
    return (
        <div className={`relative rounded-4xl overflow-hidden w-full ${props.className ?? ""}`}>
            <h1 className='absolute bottom-0 left-0 text-white text-2xl px-10 py-5 font-black '>
                {title}
            </h1>
            <video autoPlay={true} muted loop className='w-full h-full object-cover'>
                <source src={src} type='video/mp4' />
                Tu navegador no soporta el video
            </video>
        </div>
    )
}

export default VideoCard