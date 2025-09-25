import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'

type ExpandingCardProps = {
    children: React.ReactNode,
    cardClass?: string
    start?: string,
    end?: string,
    initialScaleX: number,
    initialScaleY: number,
    finalScaleX: number,
    finalScaleY: number,
    resizeInitial?: boolean,
    markers?: boolean,
} & React.HtmlHTMLAttributes<HTMLDivElement>

const ExpandingCard = ({ children, cardClass, start, end, initialScaleX, finalScaleX, initialScaleY, finalScaleY, resizeInitial, markers = false, ...props }: ExpandingCardProps) => {

    gsap.registerPlugin(ScrollTrigger)
    const targetRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        gsap.set(targetRef.current, {
            scaleX: initialScaleX,
            scaleY: initialScaleY,
            borderRadius: "2rem"
        })

        if (!targetRef.current) return;
        if (!triggerRef.current) return;

        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start,
                    end,
                    scrub: true,
                    markers,
                }
            })

            //Fase 1:
            tl.to(targetRef.current, {
                scaleX: finalScaleX,
                scaleY: finalScaleY,
                borderRadius: "0rem",
                ease: "expo.out"
            })
            //Fase 2:
            if (resizeInitial) {
                tl.to(targetRef.current, {
                    scaleX: initialScaleX,
                    scaleY: initialScaleY,
                    borderRadius: "2rem",
                    ease: "expo.inOut"
                })
            }
            return () => tl.kill()
        })

        mm.add("(max-width: 767px)", () => {
            gsap.set(targetRef.current, {
                clearProps: "all", // 🔑 limpia transform, scale, etc.
                scale: 1,
                borderRadius: "2rem", // o lo que necesites en móvil
            });
        });

        return () => mm.revert(); // 🔑 revierte TODO al desmontar

    }, [])

    return (
        <div ref={triggerRef} className={cn('', props.className)}>
            <div ref={targetRef} className={cn('', cardClass)}>
                {children}
            </div>
        </div>
    )
}

export default ExpandingCard