import { cn } from '@/lib/utils'
import type { MediaTypes } from '@/types/MediaTypes.types'
import React from 'react'

const Media = ({ src, mediaType, ...props }: { src: string, mediaType: string } & React.HTMLAttributes<HTMLImageElement | HTMLVideoElement>) => {
    return (
        mediaType === "image" ?
            <img src={src} alt={""} className={cn("rounded-xl min-[992px]:rounded-4xl", props.className)} />
            :
            <video autoPlay muted loop {...props} className={cn("rounded-xl min-[992px]:rounded-4xl object-cover", props.className)}>
                <source src={src} />
            </video>
    )
}

const PreviewCard = ({ data, ...props }: { data: MediaTypes } & React.HTMLAttributes<HTMLDivElement>) => {

    const { name, src, mediaType, childSrc, childType, childRatio } = data

    return (
        <div className={cn("relative grid h-full w-full rounded-xl min-[992px]:rounded-4xl overflow-hidden", props.className)}>
            <span className='absolute bottom-0 left-0 text-white text-lg lg:text-2xl px-5 py-2.5 lg:px-10 lg:py-5 font-semibold'>{name}</span>
            <Media mediaType={mediaType} src={src} className={"grid-full w-full h-full object-cover"} />
            {childSrc &&
                <Media
                    mediaType={childType}
                    src={childSrc}
                    className={`absolute place-self-center bg-blue-200] ${childRatio} h-full scale-75`}
                />
            }
        </div>
    )
}

export default PreviewCard