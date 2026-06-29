import React, { useCallback, useLayoutEffect } from 'react'
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
    // old -> const targetRef = useRef<HTMLDivElement>(null)
    const { original, target, sTrigger } = settings
    const { mainRef, changeThemeColors } = useMainRef();

    // FIX: Sincronizamos el ref local con el context
    const callbackRef = useCallback((node: HTMLDivElement | null) => {
        (mainRef as React.RefObject<HTMLDivElement | null>).current = node;
    }, [mainRef])

    useLayoutEffect(() => {

        const urlPath = location.pathname
        const theme = getThemeColors(location.pathname)
        changeThemeColors(theme)

        // FIX: Condicifion de guarda corregida
        if (!mainRef.current) return;
        // old -> if (!mainRef.current || !targetRef.current) return;

        //Reinicio inicial
        gsap.set(mainRef.current, { ...original })
        // old -> gsap.set(targetRef.current, { ...original })

        //Dejar limpio en la pagina /contacto
        if (urlPath === "/contacto") {
            // Se guarda la instancia para poder limpiarla en cleanup
            gsap.set(mainRef.current, {
                borderRadius: 0,
                scaleX: 1,
                scaleY: 1
            })
            // ScrollTrigger innecesario
            // old -> ScrollTrigger.refresh();
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

            // FIX: ResizeObserver detecta cuando el contenido cambia de altura y refresca 
            // SCROLLTRIGGER.
            let firstCall = true;
            const ro = new ResizeObserver(() => {
                // Ignorar llamada inicial - ScrollTrigger ya se creó con la medida anterior
                if (firstCall) { firstCall = false; return; }
                ScrollTrigger.refresh()
            })

            if (mainRef.current) ro.observe(mainRef.current)

            return () => {
                ro.disconnect;
                tl.kill();
            }
        })

        //Mobile
        mm.add("(max-width: 767px)", () => {
            // FIX: Reseteamos GSAP y luego seteamos valores concretos
            gsap.set(mainRef.current, {
                clearProps: "all",
            });
            // Seteo de valores
            gsap.set(mainRef.current, {
                scale: 1,
                borderRadius: "0 0 2rem 2rem",
            });
        });

        return () => {
            mm.revert(); // revertir al desmontar
        }
    }, [location.pathname, original, target, sTrigger, mainRef, changeThemeColors])

    return (
        <div
            // FIX: CallbackRef en lugar de mainRef del context directamente
            ref={callbackRef}
            id="main"
            className={cn("rounded-b-[64px] transition-colors duration-300 ease-in origin-bottom pt-20", props.className)}
        >
            {children}
        </div>
    )
}

export default ExpandingCard