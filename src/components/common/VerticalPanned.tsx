import { cn } from '@/lib/utils';
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

type VerticalPannedProps = {
    children: React.ReactNode,
    from: gsap.TweenVars,
    triggerClass?: string,
} & React.HTMLAttributes<HTMLDivElement>

const VerticalPanned = ({ from, children, triggerClass, ...props }: VerticalPannedProps) => {

    const triggerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!triggerRef.current || !contentRef.current) return;

        const ctx = gsap.context(() => {

            gsap.from(contentRef.current, {
                ...from,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                }
            })
        }, triggerRef)
        return () => { ctx.revert(); }
    }, [])
    return (
        <div ref={triggerRef} className={cn('', triggerClass)}>
            <div ref={contentRef} className={cn('', props.className)}>
                {children}
            </div>
        </div>
    )
}

export default VerticalPanned