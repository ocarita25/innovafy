import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocation } from 'react-router-dom'
import type { ExpandingCardProps } from '@/types/ExpandingCardProps.types'

type Props = {
    children: React.ReactNode
    resizeInitial?: boolean
    settings: ExpandingCardProps
} & React.HtmlHTMLAttributes<HTMLDivElement>

const ExpandingCard = ({ children, resizeInitial, settings, ...props }: Props) => {

    gsap.registerPlugin(ScrollTrigger)
    const location = useLocation();
    const targetRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const { original, target, sTrigger, cardClass } = settings

    useLayoutEffect(() => {
        gsap.set(targetRef.current, { ...original })

        if (!targetRef.current || !triggerRef.current) return;

        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    ...sTrigger,
                    onUpdate: (self) => {
                        console.log("Progreso: ", self.progress);

                    }
                }
            })

            //Fase 1:
            tl.to(targetRef.current, { ...target })

            //Fase 2:
            if (resizeInitial) {
                tl.to(targetRef.current, { ...original })
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

        requestAnimationFrame(() => {
            ScrollTrigger.refresh()
        })

        return () => mm.revert(); // 🔑 revierte TODO al desmontar

    }, [location.pathname])

    return (
        <div ref={triggerRef}  {...props}>
            <div ref={targetRef} className={cardClass}>
                {children}
            </div>
        </div>
    )
}

export default ExpandingCard