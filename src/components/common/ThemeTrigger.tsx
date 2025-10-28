import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef, type HTMLAttributes } from 'react'

type ThemeTriggerProps = {
    children: React.ReactNode,
    startDesktop: string,
    endDesktop: string,
    bgColor?: string,
    bgOriginal?: string,
    startMobile?: string,
    endMobile?: string,
    contentRef?: React.RefObject<HTMLDivElement | null>,
} & React.HtmlHTMLAttributes<HTMLDivElement>

const ThemeTrigger = ({ children, startDesktop, endDesktop, bgColor, bgOriginal, startMobile = startDesktop, endMobile = endDesktop, ...props }: ThemeTriggerProps) => {

    gsap.registerPlugin(ScrollTrigger)
    const triggerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!triggerRef.current) return;

        const mainEl = document.getElementById('main');
        if (!mainEl) return;


        const mm = gsap.matchMedia();
        mm.add("(min-width:500px)", () => {
            ScrollTrigger.create({
                trigger: triggerRef.current,
                start: startDesktop,
                end: endDesktop,
                onEnter: () => mainEl.style.setProperty("--theme-background", `${bgColor}`),
                onLeave: () => mainEl.style.setProperty("--theme-background", `${bgOriginal}`),
                onEnterBack: () => mainEl.style.setProperty("--theme-background", `${bgColor}`),
                onLeaveBack: () => mainEl.style.setProperty("--theme-background", `${bgOriginal}`),
                // markers: true,
            });
        }
        )
        mm.add("(max-width:500px)", () => {
            ScrollTrigger.create({
                trigger: triggerRef.current,
                start: startMobile,
                end: endMobile,
                onEnter: () => mainEl.style.setProperty("--theme-background", `var(${bgColor})`),
                onLeave: () => mainEl.style.setProperty("--theme-background", `var(${bgOriginal})`),
                onEnterBack: () => mainEl.style.setProperty("--theme-background", `var(${bgColor})`),
                onLeaveBack: () => mainEl.style.setProperty("--theme-background", `var(${bgOriginal})`),
                // markers: true,
            });
        }
        )

        return () => {
            mm.revert();
        }
    }, [])

    return (
        <div ref={triggerRef} {...props}>
            {children}
        </div>
    )
}

export default ThemeTrigger