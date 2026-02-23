import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type NavItemsProps = {
    children: React.ReactNode,
} & React.HTMLAttributes<HTMLLinkElement>

interface NavLinkProps extends NavItemsProps {
    icon?: React.ElementType;
    url: string;
}

interface NavSubLinkProps extends NavLinkProps {
    variant: string;
    closeMenu: () => void
}

interface NavGroupProps extends NavItemsProps {
    group: string
}

interface NavTriggerProps extends NavItemsProps {
    click: () => void;
    label: string;
}

interface NavSubMenuProps extends NavItemsProps {
    triggered: boolean;
    release: () => void;
}

export const NavLink = ({ children, url, ...props }: NavLinkProps) => {
    return (
        <li>
            <Link
                to={url}
                className={cn(
                    "flex items-center rounded-[2.5rem] px-2 lg:px-2.5 py-2 text-[0.75rem] md:text-[0.85rem] lg:text-[0.9rem] font-medium outline-hidden hover:cursor-pointer",
                    props.className)}>
                {children}
            </Link>
        </li>
    )
}



export const NavTrigger = ({ children, label, click, ...props }: NavTriggerProps) => {
    return (
        <li className={cn(
            'flex items-center text-[0.75rem] rounded-full md:text-[0.85rem] lg:text-[0.9rem] font-medium outline-hidden hover:cursor-pointer',)}>
            <button onClick={click} className={cn('p-2 rounded-full cursor-pointer', props.className)}>{label}</button>
            {children}
        </li>
    )
}

export const NavSubMenu = ({ children, triggered, release }: NavSubMenuProps) => {

    const targetRef = useRef<HTMLUListElement>(null)
    const [isDesktop, setIsDesktop] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        const mq = window.matchMedia("(min-width:768px)")
        const handler = () => setIsDesktop(mq.matches)

        mq.addEventListener("change", handler)
        return () => mq.removeEventListener("change", handler)
    }, [])

    // useEffect(() => {
    //     gsap.set(targetRef.current, {
    //         maxHeight: 0,
    //         maxWidth: 0,
    //         overflow: 'hidden'
    //     })
    // }, [])

    useLayoutEffect(() => {
        const el = targetRef.current
        if (!el) return;


        const mm = gsap.matchMedia()

        const measure = ({ width, height }: { width?: string, height?: string }) => {

            gsap.set(el, {
                clearProps: "all",
                opacity: 0,
                width: "auto",
                height: "auto",
                maxWidth: "none",
                maxHeight: "none",
                xPercent: 0
            })

            const fullWidth = el.scrollWidth;
            const fullHeight = el.scrollHeight;

            el.dataset.fullWidth = width ?? `${String(fullWidth)}px`
            el.dataset.fullHeight = height ?? `${String(fullHeight)}px`
        }

        mm.add("(max-width: 767px) ", () => {

            release()
            measure({ height: "75vh" });

            gsap.set(el, {
                xPercent: -50,
                maxWidth: "100%",
                minWidth: "100%",
                opacity: 0,
                transformOrigin: "bottom"
            })
        })

        mm.add("(min-width: 768px) and (max-width: 1199px)", () => {
            release()
            measure({});

            gsap.set(el, {
                xPercent: -50,
                maxWidth: "100%",
                maxHeight: "100%",
                opacity: 0,
                transformOrigin: "top"
            })
        })

        mm.add("(min-width: 1200px)", () => {
            release()
            measure({});

            gsap.set(el, {
                xPercent: -50,
                maxWidth: "100%",
                maxHeight: "100%",
                opacity: 0,
                transformOrigin: "top"
            })
        })

        ScrollTrigger.refresh();

        return () => mm.revert()
    }, [])

    useEffect(() => {
        const el = targetRef.current
        if (!el) return;

        if (!triggered) {
            gsap.set(el, {
                display: "none",
                opacity: 0
            })
        }

        const fullWidth = el.dataset.fullWidth
        const fullHeight = el.dataset.fullHeight

        gsap.to(el, {
            maxWidth: triggered ? fullWidth : "100%",
            maxHeight: triggered ? fullHeight : "100%",
            duration: 0.35,
            onStart: () => {
                if (triggered)
                    gsap.to(el, { opacity: 1, display: "grid" })
            },
            onComplete: () => {
                if (!triggered)
                    gsap.to(el, { opacity: 0, display: "none" })
            }
        })
    }, [triggered, isDesktop])

    return (
        <ul
            ref={targetRef}
            onClick={(e) => e.stopPropagation()}
            className={`overflow-hidden justify-center absolute -z-1 cursor-default px-4 pt-4 rounded-3xl min-[768px]:rounded-4xl max-[767px]:bottom-0 min-[768px]:top-0 left-1/2 bg-[#fff] shadow-[0px_0px_10px_5px_#2a2a2a55] min-[992px]:shadow-2xl grid max-[767px]:grid-rows-[1fr_50px] grid-flow-col min-[1200px]:pb-7`}
        >
            <li className={`pt-5 min-[768px]:pt-10 min-[1200px]:pt-12
                max-[767px]:overflow-y-scroll max-[767px]:row-1 
                grid grid-cols-2 min-[768px]:grid-cols-[repeat(3,1fr)] min-[1200px]:grid-cols-[repeat(6,1fr)] 
                [scrollbar-width:none]`}>
                {children}
            </li>
            <li className='row-2 bg-white min-[768px]:hidden'></li>
        </ul>
    )
}

export const NavGroup = ({ group, children, ...props }: NavGroupProps) => {
    return (
        <ul className={cn("min-w-max max-[767px]:w-full max-[1199px]:mb-5", props.className)}>
            <li>
                <h3 className='min-[768px]:text-[0.85rem] min-[1200px]:text-[1rem] mb-3 cursor-text px-2 min-[768px]:px-4'>{group}</h3>
                <ul>
                    {children}
                </ul>
            </li>
        </ul>
    )
}

export const NavSubLink = ({ children, variant, url, icon: Icon, closeMenu, ...props }: NavSubLinkProps) => {

    return (
        <li>
            <Link
                to={url}
                className={cn(`flex gap-2 items-center rounded-[0.7rem] opacity-60 font-medium hover:cursor-pointer border border-transparent w-full 
                    py-3 px-2 min-[768px]:py-2.5 min-[768px]:px-4 min-[1200px]:p-3 
                    text-[0.75rem] min-[768px]:text-[0.85rem] min-[1200px]:text-[0.9rem] 
                    max-[767px]:whitespace-break-spaces`,
                    props.className)}
                onClick={closeMenu}
            >
                <div className={`${variant}`}>
                    {Icon && <Icon />}
                </div>
                {children}
            </Link>
        </li>
    )
}