import { useMainRef } from '@/context/MainRefContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'

type ThemeTriggerProps = {
    children: React.ReactNode,
    startDesktop: string,
    endDesktop: string,
    bgColor: string,
    bgOriginal: string,
    startMobile?: string,
    endMobile?: string,
    contentRef?: React.RefObject<HTMLDivElement | null>,
} & React.HTMLAttributes<HTMLDivElement>

gsap.registerPlugin(ScrollTrigger)

const ThemeTrigger = ({ children, startDesktop, endDesktop, bgColor, bgOriginal, startMobile = startDesktop, endMobile = endDesktop, ...props }: ThemeTriggerProps) => {

    const triggerRef = useRef<HTMLDivElement>(null)
    const { changeTheme } = useMainRef();

    useLayoutEffect(() => {
        if (!triggerRef.current) return;

        const mm = gsap.matchMedia();
        mm.add("(min-width:768px)", () => {
            ScrollTrigger.create({
                trigger: triggerRef.current,
                start: startDesktop,
                end: endDesktop,
                // markers: true,
                onEnter: () => changeTheme(bgColor),
                onLeave: () => changeTheme(bgOriginal),
                onEnterBack: () => changeTheme(bgColor),
                onLeaveBack: () => changeTheme(bgOriginal),
            });
        })
        mm.add("(max-width:768px)", () => {
            ScrollTrigger.create({
                trigger: triggerRef.current,
                start: startMobile,
                end: endMobile,
                // markers: true,
                onEnter: () => changeTheme(bgColor),
                onLeave: () => changeTheme(bgOriginal),
                onEnterBack: () => changeTheme(bgColor),
                onLeaveBack: () => changeTheme(bgOriginal),
            });
        })

        return () => {
            mm.revert();
        }
    }, [])

    return (
        <div id={"ThemeTrigger"} ref={triggerRef} {...props}>
            {children}
        </div>
    )
}

export default ThemeTrigger