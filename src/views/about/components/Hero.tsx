import Panned from '@/components/common/Panned'
import PannedText from '@/components/common/PannedText'
import { imgCLOUD } from '@/constants/resources'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const fadedRef = useRef<HTMLDivElement>(null)
    const backgroundRef = useRef<HTMLDivElement>(null)
    const frontRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (!fadedRef.current || !containerRef.current || !backgroundRef.current || !frontRef.current) return;

        const mm = gsap.matchMedia()

        mm.add("(max-width: 991px)", () => {
            gsap.set(fadedRef.current, { opacity: 1 })
        })

        mm.add("(min-width: 992px)", () => {
            gsap.set(fadedRef.current, { opacity: 0 })
            gsap.set(backgroundRef.current, { yPercent: 0 })
            gsap.set(frontRef.current, { yPercent: 0 })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=300",
                    scrub: true,
                    // markers: true,
                }
            })

            tl.to(fadedRef.current, {
                duration: 1,
                opacity: 1,
                ease: "power1.in",
            })

            tl.to([backgroundRef.current, frontRef.current], {
                yPercent: 25,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: frontRef.current,
                    start: "top top",
                    end: "+=800",
                    scrub: true,
                }
            })

            return () => { tl.kill() }
        })

        return () => mm.revert()

    }, [])

    return (
        <div className="grid z-10 bg-[#97c2bb] [mask-image:linear-gradient(to_top,transparent,black_10%)] min-[992px]:pb-[clamp(4rem,7vw,15rem)]">
            <h1 ref={containerRef} className="about-hero-heading playfair tracking-tighter">
                <div aria-label="Digital Products." className='text-white playfair  tracking-tight'>
                    <PannedText className='!overflow-visible flex-wrap leading-[0.85]'>
                        <span>Productos Digitales</span>
                    </PannedText>
                </div>
                <div ref={fadedRef} aria-label="Experiencias Innovadoras.">
                    <Panned variant='vertical'>
                        <span>Experiencias</span>
                        <br />
                        <span>Innovadoras</span>
                    </Panned>
                </div>
            </h1 >
            <picture ref={backgroundRef} className="grid-full mt-[max(13.22vw,30vh)] [mask-image:linear-gradient(to_bottom,transparent,black_10%)]">
                <img
                    src={`${imgCLOUD}/about/abouthero_mask.png`}
                    alt="Actores"
                    className="w-full h-full object-cover aspect-[auto_450/454] "
                />
            </picture>
            <picture ref={frontRef} className="grid-full mt-[max(13.22vw,30vh)] z-10 about-hero-image-mask">
                <img
                    src={`${imgCLOUD}/about/digital_products.jpg`}
                    alt="Actores"
                    className="w-full h-full object-cover aspect-[auto_450/454] "
                />
            </picture>
        </div >
    )
}

export default Hero