import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

const AboutHeroImage = () => {

    gsap.registerPlugin(ScrollTrigger)

    const triggerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!triggerRef.current) return;

        gsap.set(triggerRef.current, {})

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top 20%",
                end: "bottom top",
                scrub: true,
                // markers: true,
            }
        })

        tl.to(triggerRef.current?.childNodes, {
            translateY: 350,
            ease: "power1.out"
        })

        return () => { tl.kill() };

    }, [])

    return (
        // <div ref={triggerRef} className="about-hero-image-wrapper">
        <div ref={triggerRef} className="grid grid-full relative w-full min-h-dvw mt-57 mb-30">
            {/* <picture ref={contentRef} className="about-hero-image"> */}
            <picture ref={contentRef} className="grid-full">
                <img
                    src="/images/about/digital_products.jpg"
                    alt="Actores"
                    className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] "
                />
            </picture>
            {/* <picture ref={contentRef} className="about-hero-image about-hero-image-mask"> */}
            <picture ref={contentRef} className="grid-full about-hero-image-mask">
                <img
                    src="/images/about/digital_products.jpg"
                    alt="Actores"
                    className="w-full h-full object-cover [mask-image:linear-gradient(to_top,transparent,black_20%)]"
                />
            </picture>
        </div>
    )
}

export default AboutHeroImage