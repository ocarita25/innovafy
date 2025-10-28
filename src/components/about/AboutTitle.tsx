import React, { useEffect, useRef } from 'react'
import PannedText from '../common/PannedText'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AboutTitle = () => {

    gsap.registerPlugin(ScrollTrigger)

    const fadedRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!fadedRef.current || !containerRef.current) return;

        gsap.set(fadedRef.current, { opacity: 0 })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 50%",
                end: "bottom 30%",
                scrub: true,
                // markers: true,
            }
        })

        tl.to(fadedRef.current, {
            duration: 1,
            opacity: 1,
            ease: "power1.in",
        })
    }, [])

    return (
        <h1 className="about-hero-heading">
            <div ref={containerRef} aria-label="Digital Products.">
                <span className="panned-text">Digital</span>
                <span className="panned-text">Products.</span>
            </div>
            <div ref={fadedRef} aria-label="Human Experiences.">
                <span className="panned-text">Human</span>
                <span className="panned-text">Experiences</span>
            </div>
        </h1>
    )
}

export default AboutTitle