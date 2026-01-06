import { useEffect, useRef } from 'react'
import { VideoCard } from '../../../components/common/Card'
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

        const mm = gsap.matchMedia();

        mm.add("(min-width: 992px", () => {
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
        })

    }, [])

    return (
        <div className='relative grid min-[992px]:grid-rows-2 min-[992px]:h-[200dvh] px-[var(--container-gutter)]'>
            <div ref={expandRef} className='max-[991px]:hidden h-dvh col-1 row-1'></div>
            <div ref={shrinkRef} className='max-[991px]:hidden h-dvh col-1 row-2'></div>
            <div className={`grid-full min-[992px]:sticky top-0 min-[992px]:h-dvh grid z-1`}>
                <div ref={triggerRef} className='grid min-[992px]:absolute h-full overflow-hidden object-center'>
                    <VideoCard src="/videos/home-video.mp4" className='rounded-none max-[991px]:aspect-square' />
                </div>
            </div>
        </div>
    )
}

export default VideoExpanding