import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocation } from 'react-router-dom'
import type { ExpandingCardProps } from '@/types/ExpandingCardProps.types'
import { cn } from '@/lib/utils'

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

        const handleLoad = () => ScrollTrigger.refresh();
        // requestAnimationFrame(() => { ScrollTrigger.refresh() })

        if (location.pathname === "/contacto") return;

        if (!targetRef.current || !triggerRef.current) return;

        gsap.set(targetRef.current, { ...original })

        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    invalidateOnRefresh: true,
                    ...sTrigger,
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

        console.log("Actualizado");
        return () => {
            window.removeEventListener("load", handleLoad)
            mm.revert(); // 🔑 revierte TODO al desmontar
        }


    }, [location.pathname])

    return (
        <div ref={triggerRef} {...props}>
            <div ref={targetRef} className={cn("transition-colors duration-300 ease-in", cardClass)}>
                {children}
            </div>
        </div>
    )
}

export default ExpandingCard