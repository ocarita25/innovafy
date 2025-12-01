import { cn } from '@/lib/utils';
import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'

type PannedProps = {
    variant: "horizontal" | "vertical" | "both",
    yOffset?: number,
    xOffset?: number,
    durationOffset?: number,
    opacityOffset?: number,
    children: React.ReactNode,
    from?: gsap.TweenVars,
    triggerClass?: string,
    delay?: number
} & React.HTMLAttributes<HTMLDivElement>

const Panned = ({ variant, xOffset = 0, yOffset = 0, durationOffset = 0, opacityOffset = 0, children, triggerClass, delay, ...props }: PannedProps) => {

    const axis: gsap.TweenVars = {
        ...{
            vertical: { xPercent: 0, yPercent: 50 + yOffset, },
            horizontal: { xPercent: -100 + xOffset, yPercent: 0, },
            both: { xPercent: 100 + xOffset, yPercent: 50 + yOffset },
        }[variant]
    }

    const triggerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!triggerRef.current || !contentRef.current) return;

        const ctx = gsap.context(() => {

            gsap.from(contentRef.current, {
                ...axis,
                delay,
                opacity: -1 + (opacityOffset),
                duration: 1 + (durationOffset),
                ease: "expo.out",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                }
            })
        }, triggerRef)
        return () => { ctx.revert() }
    }, [])

    return (
        <div ref={triggerRef} className={cn('', triggerClass)}>
            <div ref={contentRef} className={cn('', props.className)}>
                {children}
            </div>
        </div>
    )
}

export default Panned