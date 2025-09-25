import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

type ThemeTriggerProps = {
    children: React.ReactNode,
    startDesktop: string,
    endDesktop: string,
    startMobile?: string,
    endMobile?: string,
}

const ThemeTrigger = ({ children, startDesktop, endDesktop, startMobile = startDesktop, endMobile = endDesktop }: ThemeTriggerProps) => {

    gsap.registerPlugin(ScrollTrigger)
    const triggerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!triggerRef.current) return;

        const mainEl = document.getElementById("main")
        if (!mainEl) return;

        const mm = gsap.matchMedia();
        mm.add("(min-width:500px)", () => {
            ScrollTrigger.create({
                trigger: triggerRef.current,
                start: startDesktop,
                end: endDesktop,
                onEnter: () => mainEl.classList.replace("bg-theme-background", "bg-[var(--purple-primary)]"),
                onLeave: () => mainEl.classList.replace("bg-[var(--purple-primary)]", "bg-theme-background"),
                onEnterBack: () => mainEl.classList.replace("bg-theme-background", "bg-[var(--purple-primary)]"),
                onLeaveBack: () => mainEl.classList.replace("bg-[var(--purple-primary)]", "bg-theme-background"),
                // markers: true,
            });
        }
        )
        mm.add("(max-width:500px)", () => {
            ScrollTrigger.create({
                trigger: triggerRef.current,
                start: startMobile,
                end: endMobile,
                onEnter: () => mainEl.classList.replace("bg-theme-background", "bg-[var(--purple-primary)]"),
                onLeave: () => mainEl.classList.replace("bg-[var(--purple-primary)]", "bg-theme-background"),
                onEnterBack: () => mainEl.classList.replace("bg-theme-background", "bg-[var(--purple-primary)]"),
                onLeaveBack: () => mainEl.classList.replace("bg-[var(--purple-primary)]", "bg-theme-background"),
                // markers: true,
            });
        }
        )
    }, [])

    return (
        <div ref={triggerRef}>
            {children}
        </div>
    )
}

export default ThemeTrigger