import React, { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { getThemeColors } from '@/utils/theme'
import { cn } from '@/lib/utils'
import { useMainRef } from '@/context/MainRefContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MAIN_CARD_CONFIG } from '@/config/expandingCard.config'
import type { ExpandingCardProps } from '@/types/ExpandingCardProps.types'

type Props = {
    children: React.ReactNode
    settings?: ExpandingCardProps
} & React.HTMLAttributes<HTMLDivElement>

gsap.registerPlugin(ScrollTrigger)

const ExpandingCard = ({ children, settings = MAIN_CARD_CONFIG, ...props }: Props) => {

    const location = useLocation();
    const targetRef = useRef<HTMLDivElement>(null)
    const { original, target, sTrigger } = settings
    const { mainRef, changeThemeColors } = useMainRef();

    useLayoutEffect(() => {

        const urlPath = location.pathname
        const theme = getThemeColors(location.pathname)
        changeThemeColors(theme)

        if (!mainRef.current || targetRef.current) return;


        //Reinicio inicial
        gsap.set(targetRef.current, { ...original })


        //Dejar limpio en la pagina /contacto
        if (urlPath === "/contacto") {
            gsap.set(mainRef.current, {
                borderRadius: 0,
                scaleX: 1,
                scaleY: 1
            })
            ScrollTrigger.refresh();
            return;
        }


        const mm = gsap.matchMedia();

        //Desktop
        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: mainRef.current,
                    scrub: true,
                    invalidateOnRefresh: true,
                    ...sTrigger,
                }
            })

            tl.to(mainRef.current, { ...target })

            return () => tl.kill()
        })

        //Mobile
        mm.add("(max-width: 767px)", () => {
            gsap.set(mainRef.current, {
                clearProps: "scale", // limpia transform, scale, etc.
                scale: 1,
                borderRadius: "0 0 2rem 2rem",
            });
        });

        return () => {
            mm.revert(); // revertir al desmontar
        }

    }, [location.pathname, original, target, sTrigger])

    return (
        <div
            ref={mainRef}
            id="main"
            className={cn("rounded-b-[64px] transition-colors duration-300 ease-in origin-bottom pt-20", props.className)}
        >
            {children}
        </div>
    )
}

export default ExpandingCard