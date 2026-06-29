import type React from "react"
import Headings from "../common/Headings"
import PannedText from "../common/PannedText"
import Panned from "../common/Panned"

type ZigZagSectionProps = {
    children: React.ReactNode,
    media?: string,
    mediaType?: 'image' | 'video'
}

type ContentProps = {
    title?: string,
    text?: string,
    reverse: boolean,
    children?: React.ReactNode
}

export const ZigZagContent = ({ title, text, reverse, children }: ContentProps) => {
    const alignClass = reverse ? "mr-auto col-start-1" : "ml-auto col-start-2"

    return (
        <div className={`row-1 flex flex-col justify-center min-[992px]:max-w-[clamp(28.75rem,30.43vw,38.24rem)] col-start-1 ${alignClass}`}>
            {
                children ??
                <>
                    <div className='max-[992px]:mb-5'>
                        <Headings as='h2' variant='eyebrow' className='mt-0 mb-0'>
                            <PannedText>
                                {title}
                            </PannedText>
                        </Headings>
                    </div>
                    <Panned variant='vertical'>
                        <p className='text-[clamp(1.25rem,1.33vw,2.25rem)] leading-[1.5]'>{text}</p>
                    </Panned>
                </>
            }
        </div>
    )
}

export const ZigZagMedia = ({ src, type }: { src: string, type: 'image' | 'video' }) => {

    return (

        // <Panned variant='vertical' className='col-start-2'>
        <div className='aspect-[754/531] overflow-hidden rounded-4xl'>
            {
                type === "image" ?
                    <img src={src} className='object-cover w-full h-full' />
                    :
                    <video autoPlay loop muted>
                        <source src={src} className='object-cover w-full' />
                    </video>
            }
        </div>
        // </Panned>
    )
}

export const ZigZagSection = ({ children }: ZigZagSectionProps) => {
    return (
        <div className="flex flex-col min-[992px]:grid min-[992px]:grid-cols-2 gap-8">
            {children}
            {/* <Media src={media} type={mediaType} /> */}
        </div>
    )
}

export const ZigZagSectionContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col gap-20 min-[992px]:gap-30 mt-15'>
            {children}
        </div>
    )
}