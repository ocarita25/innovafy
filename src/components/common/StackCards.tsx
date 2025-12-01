import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

type StackCardProps = {
    children: React.ReactNode;
    triggerStyle: any;
    prevLast: boolean;
    last: boolean;
} & React.HTMLAttributes<HTMLDivElement>


const StackCards = ({ children, prevLast, last, triggerStyle, ...props }: StackCardProps) => {

    const targetRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!targetRef || !triggerRef || last) return

        gsap.from(targetRef.current, {
            scale: 1,
        })

        gsap.to(targetRef.current, {
            scale: 0.95,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "+=500",
                scrub: true,
            }
        })

        if (prevLast) return;

        gsap.from(targetRef.current, {
            scale: 0.925,
        })

        gsap.to(targetRef.current, {
            scale: 0.85,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top+=900 top",
                end: "+=300",
                scrub: true,
            }
        })
    }, [])


    return (
        <div ref={triggerRef} className={`grid-full relative`} style={triggerStyle}>
            <div ref={targetRef} style={props.style} className={cn("origin-top sticky p-10 max-[991px]:min-h-[60vh] min-[992px]:min-h-[70dvh] rounded-[4rem] z-10 flex items-center justify-center", props.className)}>
                {children}
            </div>
        </div>
    )
}

export default StackCards