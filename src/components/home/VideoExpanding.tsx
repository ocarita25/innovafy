import React, { useEffect, useRef } from 'react'
import { VideoCard } from '../common/Card'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const VideoExpanding = () => {

    gsap.registerPlugin(ScrollTrigger)

    const expandRef = useRef<HTMLDivElement>(null)
    const shrinkRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        gsap.set(triggerRef.current, { borderRadius: "2rem", ease: "power1.inOut", scale: "1", left: "0", right: "0" })

        if (!triggerRef.current || !shrinkRef.current || !expandRef.current) return;

        // Fase de expansión
        const expandTrigger = ScrollTrigger.create({
            trigger: expandRef.current,
            start: "top 40%",
            end: "bottom bottom",
            onUpdate: (self) => {
                const p = self.progress
                gsap.set(triggerRef.current, {
                    borderRadius: `${2 - p * 2}rem`,
                    left: `calc((1 - ${p}) * var(--container-gutter) - var(--container-gutter))`,
                    right: `calc((1 - ${p}) * var(--container-gutter) - var(--container-gutter))`,
                })
            },
        })

        // Fase de contracción
        const shrinkTrigger = ScrollTrigger.create({
            trigger: shrinkRef.current,
            start: "top top",
            end: "bottom center",
            onUpdate: (self) => {
                const p = 1 - self.progress
                gsap.set(triggerRef.current, {
                    borderRadius: `${2 - p * 2}rem`,
                    left: `calc((1 - ${p}) * var(--container-gutter) - var(--container-gutter))`,
                    right: `calc((1 - ${p}) * var(--container-gutter) - var(--container-gutter))`,
                })
            },
        })

        return () => {
            expandTrigger.kill();
            shrinkTrigger.kill();
        }
    }, [])

    return (
        <div className='relative grid grid-rows-2 h-[200dvh] px-[var(--container-gutter)]'>
            <div ref={expandRef} className='h-dvh col-1 row-1'></div>
            <div ref={shrinkRef} className='h-dvh col-1 row-2'></div>
            <div className={`grid-full sticky top-0 h-dvh grid z-1`}>
                <div ref={triggerRef} className='grid absolute h-full overflow-hidden object-center'>
                    <VideoCard src="/videos/home-video.mp4" className='rounded-none' />
                </div>
            </div>
        </div>
    )
}

export default VideoExpanding