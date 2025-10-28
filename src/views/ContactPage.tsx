import { VideoCard } from '@/components/common/Card'
import PannedText from '@/components/common/PannedText'
import React, { useEffect, useRef } from 'react'

const ContactPage = () => {

    const mainRef = useRef<HTMLDivElement>(null)

    const bgOriginal = "#BFB7CC"
    const bgColor = "#3799EA"

    useEffect(() => {
        if (!mainRef.current) return
        mainRef.current.style.setProperty("--theme-background", `${bgOriginal}`)
    }, [])

    return (
        <div ref={mainRef} id="main" className='min-h-dvh mt-[calc(var(--header-height)*-1)] relative overflow-hidden bg-theme-background'>
            {/* Desktop */}
            <div className="contact-bg-desktop hidden min-[991px]:grid absolute top-0 left-0 w-full h-full">
                <picture className='block leading-0 max-w-full opacity-100 absolute top-0 left-0 w-full h-full'>
                    <img
                        src='https://a-us.storyblok.com/f/1017006/3024x2000/8c579e2bc5/contact-video-frame.jpg/m/1512x1000/filters:quality(80)'
                        className='h-full w-full object-cover max-w-full m-0'
                    />
                </picture>
                <VideoCard src='/videos/contact-video-big.mp4' className='absolute top-0 left-0 h-full w-full object-cover object-[60%_center] block' />
            </div>

            {/* Mobile */}
            <div className="grid grid-full pt-[var(--header-height)] z-0 w-full px-[var(--container-gutter)] items-center grid-rows-[auto_auto] gap-[clamp(2.25rem,2.38vw,2.99rem)]">
                <div className='py-[8vw] px-0'>
                    <h1 className='text-white leading-[1] m-[0_0_0.3em] max-[991px]:max-w-[clamp(31.25rem,65.10vw,41.56rem)] max-w-[clamp(38.9375rem,41.20vw,51.78rem)] max-[991px]:text-[clamp(3.75rem,7.8125vw,4.9875rem)] text-[clamp(6.25rem,6.6137566138vw,8.3125rem)]'>
                        <PannedText>
                            <span className='overflow-hidden'>We've got a great feeling about this</span>
                        </PannedText>
                    </h1>
                    <div className="contact-bg-mobile mx-[calc(var(--container-gutter)*-1)] my-[-10%] relative -z-1">
                        <picture className='w-full h-full grid-full'>
                            <img
                                src='https://a-us.storyblok.com/f/1017006/900x900/9298fb8569/contact-video-frame-square-mobile.jpg/m/1800x1800/filters:quality(80)'
                                className='h-full w-full object-cover max-w-full m-0'
                            />
                        </picture>
                        <VideoCard src='/videos/contact-video.mp4' className='h-full w-full grid-full' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactPage