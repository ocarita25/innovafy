import type { Media, WorkThumbnail } from '@/data/work/types'
import { cn } from '@/lib/utils'
import React from 'react'

type PreviewCardProps = {
    title: string,
    thumbnail: WorkThumbnail
} & React.HTMLAttributes<HTMLDivElement>

const Media = ({ src, mediaType, ...props }: { src: string, mediaType: string } & React.HTMLAttributes<HTMLImageElement | HTMLVideoElement>) => {
    return (
        mediaType === "image" ?
            <img src={src} alt={""} draggable={false} className={cn("rounded-xl min-[992px]:rounded-4xl", props.className)} loading='lazy' />
            :
            <video autoPlay muted loop {...props} className={cn("rounded-xl min-[992px]:rounded-4xl object-cover", props.className)} preload='none'>
                <source src={src} />
            </video>
    )
}

const PreviewCard = ({ title, thumbnail, ...props }: PreviewCardProps) => {

    const { background, foreground, aspectRatio } = thumbnail

    return (
        <div {...props} className={cn("relative grid h-full w-full rounded-xl min-[992px]:rounded-4xl overflow-hidden cursor-pointer", props.className)} >
            <span className='absolute bottom-0 left-0 text-white text-lg lg:text-2xl px-5 py-2.5 lg:px-10 lg:py-5 font-semibold'>{title}</span>
            <Media mediaType={background.type} src={background.src} className={"grid-full w-full h-full object-cover"} />
            {foreground &&
                <Media
                    mediaType={foreground.type}
                    src={foreground.src}
                    className={`absolute place-self-center bg-blue-200] ${aspectRatio} h-full scale-75`}
                />
            }
        </div>
    )
}

export default PreviewCard