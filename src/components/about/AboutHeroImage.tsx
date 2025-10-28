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
        <div ref={triggerRef} className="about-hero-image-wrapper">
            <picture ref={contentRef} className="about-hero-image">
                <img
                    src="/images/about/digital_products.jpg"
                    alt="Actores"
                    className="w-full h-auto object-cover "
                />
            </picture>
            <picture ref={contentRef} className="about-hero-image about-hero-image-mask">
                <img
                    src="/images/about/digital_products.jpg"
                    alt="Actores"
                    className="w-full h-auto object-cover "
                />
            </picture>
        </div>
    )
}

export default AboutHeroImage