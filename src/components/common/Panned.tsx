import { cn } from '@/lib/utils';
import gsap from 'gsap'
import React, { useLayoutEffect, useMemo, useRef } from 'react'

type PannedProps = {
    variant: "horizontal" | "vertical" | "both",
    yOffset?: number,
    xOffset?: number,
    direction?: 'left' | 'right' | 'up' | 'down',
    durationOffset?: number,
    opacityOffset?: number,
    children: React.ReactNode,
    from?: gsap.TweenVars,
    triggerClass?: string,
    delay?: number
} & React.HTMLAttributes<HTMLDivElement>

const Panned = ({ variant, xOffset = 0, yOffset = 0, direction, durationOffset = 0, opacityOffset = 0, children, triggerClass, delay, ...props }: PannedProps) => {

    const triggerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const axis = useMemo<gsap.TweenVars>(() => {
        switch (variant) {
            case 'vertical':
                return { xPercent: 0, yPercent: 50 + yOffset, }
            case 'horizontal':
                return {
                    xPercent: direction === 'left' ? 100 : -100 + xOffset,
                    yPercent: 0
                }
            case 'both':
                return {
                    xPercent: 100 + xOffset,
                    yPercent: 50 + yOffset
                }
        }
    }, [variant, direction, xOffset, yOffset])

    useLayoutEffect(() => {
        if (!triggerRef.current || !contentRef.current) return;

        const ctx = gsap.context(() => {

            gsap.from(contentRef.current, {
                ...axis,
                delay,
                opacity: 0 + (opacityOffset),
                duration: 1 + (durationOffset),
                ease: "expo.out",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                }
            })
        })
        // }, triggerRef)
        return () => { ctx.revert() }
    }, [variant, direction, delay, opacityOffset, durationOffset])

    return (
        <div ref={triggerRef} className={cn('', props.className)} {...props}>
            <div ref={contentRef} className='w-full h-full'>
                {children}
            </div>
        </div>
    )
}

export default Panned