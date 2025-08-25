import React from 'react'
import { cn } from '../../lib/utils'

type CardProps = {
    title?: string,
    children: React.ReactNode,
} & React.HTMLAttributes<HTMLDivElement>

const Card = ({ title, children, ...props }: CardProps) => {
    return (
        <div className={cn('relative rounded-4xl overflow-hidden w-full', props.className)}>
            {children}
            {title && (
                <h1 className='absolute bottom-0 left-0 text-white text-lg lg:text-2xl px-5 py-2.5 lg:px-10 lg:py-5 font-semibold'>
                    {title}
                </h1>
            )}
        </div>
    )
}

type VideoCardProps = {
    src: string,
} & React.HTMLAttributes<HTMLDivElement>

const VideoCard = ({ src, ...props }: VideoCardProps) => {
    return (
        <video autoPlay muted loop className={cn('w-full h-full object-cover', props.className)}>
            <source src={src} type='video/mp4' />
            Tu navegador no soporta el video
        </video>
    )
}

type ImageCardProps = {
    src: string,
    alt?: string,
} & React.HTMLAttributes<HTMLDivElement>

const ImageCard = ({ src, alt, ...props }: ImageCardProps) => {
    return <img src={src} alt={alt} className={cn('w-full h-full object-contain', props.className)} />
}

export {
    Card,
    VideoCard,
    ImageCard
}