import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocation } from 'react-router-dom'
import type { ExpandingCardProps } from '@/types/ExpandingCardProps.types'
import { getThemeBackground } from '@/utils/theme'
import { useMainRef } from '@/context/MainRefContext'
import { cn } from '@/lib/utils'

type Props = {
    children: React.ReactNode
    resizeInitial?: boolean
    settings: ExpandingCardProps
} & React.HTMLAttributes<HTMLDivElement>

gsap.registerPlugin(ScrollTrigger)

const ExpandingCard = ({ children, resizeInitial, settings, ...props }: Props) => {

    const { mainRef } = useMainRef()
    const location = useLocation();
    const targetRef = useRef<HTMLDivElement>(null)
    const { original, target, sTrigger } = settings
    const { changeTheme } = useMainRef();

    useLayoutEffect(() => {
        if (!mainRef.current) return;

        const handleLoad = () => ScrollTrigger.refresh();

        const urlPath = location.pathname
        const color = getThemeBackground(location.pathname)
        changeTheme(color)

        gsap.set(targetRef.current, { ...original })
        if (urlPath === "/contacto") {
            gsap.set(mainRef.current, { borderRadius: 0, scaleX: 1, scaleY: 1 })
        }
        else {

            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: mainRef.current,
                        scrub: true,
                        invalidateOnRefresh: true,
                        ...sTrigger,
                    }
                })

                //Fase 1:
                tl.to(mainRef.current, { ...target })

                //Fase 2:
                if (resizeInitial) {
                    tl.to(mainRef.current, { ...original })
                }
                return () => tl.kill()
            })

            mm.add("(max-width: 767px)", () => {
                gsap.set(mainRef.current, {
                    clearProps: "scale", // limpia transform, scale, etc.
                    scale: 1,
                    borderRadius: "0 0 2rem 2rem",
                });
            });

            return () => {
                window.removeEventListener("load", handleLoad)
                mm.revert(); // revierte TODO al desmontar
            }
        }

    }, [location.pathname])

    return (
        <div
            ref={mainRef}
            id="main"
            className={cn("relative col-1 row-1 z-10 rounded-b-[64px] transition-colors duration-300 ease-in origin-bottom pt-20", props.className)}
        >
            {children}
        </div>
    )
}

export default ExpandingCard