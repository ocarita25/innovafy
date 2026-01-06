import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

type ScrollableProps = {
    children: React.ReactNode
    yOriginal?: number,
    yTarget?: number,
    xOriginal?: number,
    xTarget?: number,
    start?: string,
    end?: string,
    initScale?: number,
    scale?: number,
    markers?: boolean
}

const Scrollable = ({ children, yOriginal, yTarget, start, end, initScale = 1, scale, markers = false }: ScrollableProps) => {

    gsap.registerPlugin(ScrollTrigger)
    const triggerRef = useRef<HTMLDivElement>(null)
    const targetRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!triggerRef.current || !targetRef) return;
        gsap.set(targetRef.current, { yPercent: yOriginal, scale: initScale });

        const tween = gsap.to(targetRef.current, {
            yPercent: yTarget,
            scale,
            ease: "power1.out",
            scrollTrigger: {
                trigger: triggerRef.current,
                start,
                end,
                scrub: true,
                markers
            }
        })

        return () => {
            tween.scrollTrigger?.kill(); // 🔑 destruye el ScrollTrigger
            tween.kill();
        };

    }, [location.pathname])

    return (
        <div ref={triggerRef} >
            <div ref={targetRef}>
                {children}
            </div>
        </div>
    )
}

export default Scrollable