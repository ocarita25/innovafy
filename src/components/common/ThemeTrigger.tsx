import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useMainRef } from '@/context/MainRefContext'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
    const { changeBackground } = useMainRef();

    useLayoutEffect(() => {
        if (!triggerRef.current) return;

        const mm = gsap.matchMedia();
        mm.add("(min-width:992px)", () => {
            ScrollTrigger.create({
                trigger: triggerRef.current,
                start: startDesktop,
                end: endDesktop,
                // markers: true,
                onEnter: () => changeBackground(bgColor),
                onLeave: () => changeBackground(bgOriginal),
                onEnterBack: () => changeBackground(bgColor),
                onLeaveBack: () => changeBackground(bgOriginal),
            });
        })
        mm.add("(max-width:991px)", () => {
            ScrollTrigger.create({
                trigger: triggerRef.current,
                start: startMobile,
                end: endMobile,
                // markers: true,
                onEnter: () => changeBackground(bgColor),
                onLeave: () => changeBackground(bgOriginal),
                onEnterBack: () => changeBackground(bgColor),
                onLeaveBack: () => changeBackground(bgOriginal),
            });
        })

        return () => {
            changeBackground(bgOriginal);
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