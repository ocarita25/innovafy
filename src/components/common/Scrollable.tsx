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
    markers?: boolean
}

const Scrollable = ({ children, yOriginal, yTarget, xOriginal, xTarget, start, end, markers = false }: ScrollableProps) => {

    gsap.registerPlugin(ScrollTrigger)
    const triggerRef = useRef<HTMLDivElement>(null)
    const targetRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!triggerRef.current || !targetRef) return;
        // gsap.set(targetRef.current, { y: -250 });
        gsap.set(targetRef.current, { yPercent: yOriginal });

        const tween = gsap.to(targetRef.current, {
            // y: 0,
            yPercent: yTarget,
            ease: "power1.inOut",
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