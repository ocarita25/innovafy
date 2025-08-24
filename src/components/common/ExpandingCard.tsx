import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

type ExpandingCardProps = {
    children: React.ReactNode,
} & React.HtmlHTMLAttributes<HTMLDivElement>

const ExpandingCard = ({ children, ...props }: ExpandingCardProps) => {

    gsap.registerPlugin(ScrollTrigger)
    const cardRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!cardRef.current) return;
        if (!containerRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top top",       // cuando el card toca arriba
                end: "bottom top",
                scrub: true,
            },
        });


        tl.fromTo(
            cardRef.current,
            { scale: 0.9, borderRadius: "2rem" },
            { scale: 1, borderRadius: "0rem", duration: 1, ease: "expo.out" }
        );


        tl.to(cardRef.current, {
            scale: 1,
            borderRadius: "0rem",
            duration: 1,
        });


        tl.to(cardRef.current, {
            scale: 0.9,
            borderRadius: "2rem",
            duration: 1,
            ease: "power2.inOut",
        });

    }, [])

    return (
        <div ref={containerRef} className={cn('relative aspect-square', props.className)}>
            <div ref={cardRef} className='sticky top-0 overflow-hidden h-dvh w-dvw'>
                {children}
            </div>
        </div>
    )
}

export default ExpandingCard