import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollIndicator } from './ScrollDownIndicator'

gsap.registerPlugin(ScrollTrigger)

type NavItemsProps = {
    children?: React.ReactNode,
} & React.HTMLAttributes<HTMLLinkElement>

interface NavLinkProps extends NavItemsProps {
    text: string;
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
    icon?: React.ReactNode;
    label: string;
}

interface NavSubMenuProps extends NavItemsProps {
    triggered: boolean;
    release: () => void;
}

export const NavLink = ({ url, text, icon: Icon, ...props }: NavLinkProps) => {
    return (
        <li>
            <Link to={url}
                className={cn(`flex items-center rounded-full 
                    px-3 sm:px-4 min-[900px]:px-2.5 py-2 
                    text-[0.75rem] min-[900px]::text-[0.85rem] lg:text-[0.9rem] font-medium 
                    outline-hidden hover:cursor-pointer 
                    duration-150 max-md:h-12 justify-center`,
                    props.className)}>
                <div className='hidden min-[900px]:block'>{text}</div>
                <span className='min-[900px]:hidden flex flex-col items-center'>
                    {/* <IconoProyectos className='sm:w-4.5' /> */}
                    {Icon &&
                        <div className='sm:w-4.5 flex'>
                            <Icon />
                        </div>
                    }
                    <span className='hidden sm:inline text-[0.65rem] font-light'>{text}</span>
                </span>
            </Link>
        </li>
    )
}


export const NavTrigger = ({ children, label, icon, click, ...props }: NavTriggerProps) => {
    return (
        <li className={cn(``,)}>
            {/* <button onClick={click} className={cn(`rounded-full cursor-pointer`, props.className)}> */}
            <button onClick={click} className={cn(`
                flex items-center rounded-full px-3 sm:px-4 lg:px-2.5 py-2 text-[0.75rem] min-[900px]:text-[0.85rem] lg:text-[0.9rem] font-medium outline-hidden hover:cursor-pointer duration-150 max-min-[900px]:h-12 justify-center
                `, props.className)}>
                <span className='hidden min-[900px]:block'>{label}</span>
                <div className='min-[900px]:hidden flex flex-col justify-center items-center'>
                    {icon}
                    <span className='hidden sm:inline text-[0.65rem] font-light'>{label}</span>
                </div>
            </button>
            {children}
        </li>
    )
}

export const NavSubMenu = ({ children, triggered, release }: NavSubMenuProps) => {

    const [showTop, setShowTop] = useState(false);
    const [showBottom, setShowBottom] = useState(false);
    const scrollRef = useRef<HTMLLIElement>(null);

    const targetRef = useRef<HTMLUListElement>(null)
    const [isDesktop, setIsDesktop] = useState(
        window.matchMedia("(min-width: 900px)").matches
    )

    const updateIndicators = useCallback(() => {
        const el = scrollRef.current
        if (!el) return

        const { scrollTop, scrollHeight, clientHeight } = el

        setShowTop(scrollTop > 5)
        setShowBottom(scrollTop + clientHeight < scrollHeight - 5)
    }, [])

    useEffect(() => {
        const mq = window.matchMedia("(min-width:900px)")
        const handler = () => setIsDesktop(mq.matches)

        mq.addEventListener("change", handler)
        return () => mq.removeEventListener("change", handler)
    }, [])

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        updateIndicators()

        el.addEventListener("scroll", updateIndicators)

        return () => el.removeEventListener("scroll", updateIndicators)
    }, [])

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

        mm.add("(max-width: 899px) ", () => {

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

        mm.add("(min-width: 900px) and (max-width: 1199px)", () => {
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
                if (triggered) {
                    updateIndicators()
                }
                if (!triggered)
                    gsap.to(el, { opacity: 0, display: "none" })
            }
        })
    }, [triggered, isDesktop])

    return (
        <ul
            ref={targetRef}
            onClick={(e) => e.stopPropagation()}
            className={`
                overflow-hidden absolute -z-1 cursor-default 
                px-4 pt-4 rounded-3xl min-[900px]:rounded-4xl 
                max-[899px]:bottom-0 min-[900px]:top-0 left-1/2 bg-[#fff] 
                shadow-[0px_0px_10px_5px_#2a2a2a55] min-[992px]:shadow-2xl 
                grid max-[899px]:grid-rows-[1fr_50px] grid-flow-col min-[1200px]:pb-7`}
        >
            {showTop && (<ScrollIndicator direction='up' className='absolute top-3 left-1/2 -translate-x-1/2' />)}

            <li ref={scrollRef} className={`pt-5 min-[900px]:pt-10 min-[1200px]:pt-12
                max-[899px]:overflow-y-scroll max-[899px]:row-1 
                grid grid-cols-2 min-[900px]:grid-cols-[repeat(3,1fr)] min-[1200px]:grid-cols-[repeat(6,1fr)] 
                [scrollbar-width:none]`}>
                {children}
            </li>

            {showBottom && (<ScrollIndicator direction='down' className='absolute bottom-15 z-10 left-1/2 -translate-x-1/2' />)}
        </ul>
    )
}

export const NavGroup = ({ group, children, ...props }: NavGroupProps) => {
    return (
        <ul className={cn("max-[899px]:w-full md:min-w-max max-[1199px]:mb-5", props.className)}>
            <li>
                <h3 className='min-[900px]:text-[0.85rem] min-[1200px]:text-[1rem] mb-3 cursor-text px-2 min-[900px]:px-4'>{group}</h3>
                <ul>
                    {children}
                </ul>
            </li>
        </ul>
    )
}

export const NavSubLink = ({ children, variant, url, text, icon: Icon, closeMenu, ...props }: NavSubLinkProps) => {

    return (
        <li>
            <Link
                to={url}
                className={cn(`grid grid-cols-[auto_1fr] gap-2 items-center rounded-[0.7rem] opacity-60 font-medium hover:cursor-pointer border border-transparent w-full 
                    py-3 px-2 min-[768px]:py-2.5 min-[768px]:px-4 min-[1200px]:p-3 
                    text-[0.75rem] min-[768px]:text-[0.85rem] min-[1200px]:text-[0.9rem] 
                    max-[767px]:whitespace-break-spaces`,
                    props.className)}
                onClick={closeMenu}
            >
                <div className={`${variant}`}>
                    {Icon && <Icon />}
                </div>
                <div className='w-'>{text}</div>
            </Link>
        </li>
    )
}