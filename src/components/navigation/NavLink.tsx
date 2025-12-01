import React, { useLayoutEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

type NavItemsProps = {
    children: React.ReactNode,
} & React.HTMLAttributes<HTMLLinkElement>

interface NavLinkProps extends NavItemsProps {
    url: string
}

interface NavGroupProps extends NavItemsProps {
    group: string
}

interface NavTriggerProps extends NavItemsProps {
    click: () => void;
    label: string;
}

interface NavSubMenuProps extends NavItemsProps {
    triggered: boolean
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
            'flex items-center text-[0.75rem] rounded-full md:text-[0.85rem] lg:text-[0.9rem] font-medium outline-hidden hover:cursor-pointer',
            props.className)}>
            <button onClick={click} className='p-2 rounded-full cursor-pointer'>{label}</button>
            {children}
        </li>
    )
}

export const NavSubMenu = ({ children, triggered }: NavSubMenuProps) => {

    const targetRef = useRef<HTMLUListElement>(null)

    useLayoutEffect(() => {
        const el = targetRef.current
        if (!el) return;


        const mm = gsap.matchMedia()

        mm.add("(max-width: 767px)", () => {
            const fullWidth = el.scrollWidth
            const fullHeigth = el.scrollHeight
            gsap.set(el, {
                xPercent: -50,
                maxWidth: "100%",
                maxHeight: "100%",
                width: "100%",
                opacity: 0,
                transformOrigin: "bottom"
            })

            el.dataset.fullWidth = String(fullWidth)
            el.dataset.fullHeight = String(fullHeigth * 2.1)
        })

        mm.add("(min-width: 768px)", () => {
            const fullWidth = el.scrollWidth
            const fullHeigth = el.scrollHeight
            gsap.set(el, {
                xPercent: -50,
                maxWidth: "100%",
                maxHeight: "100%",
                width: "100%",
                opacity: 0,
                transformOrigin: "top"
            })

            el.dataset.fullWidth = String(fullWidth * 1.35)
            el.dataset.fullHeight = String(fullHeigth * 2)
        })
        return () => mm.kill()
    }, [])

    useLayoutEffect(() => {
        const el = targetRef.current
        if (!el) return;

        const fullWidth = Number(el.dataset.fullWidth)
        const fullHeight = Number(el.dataset.fullHeight)

        gsap.to(el, {
            maxWidth: triggered ? fullWidth : "100%",
            maxHeight: triggered ? fullHeight : "100%",
            width: triggered ? fullWidth : "100%",
            duration: 0.35,
            onStart: () => {
                if (triggered)
                    gsap.to(el, { opacity: 1 })
            },
            onComplete: () => {
                if (!triggered)
                    gsap.to(el, { opacity: 0 })
            }
        })

    }, [triggered])

    return (
        <ul ref={targetRef} className={`overflow-hidden absolute bg-[#fff] -z-1 rounded-3xl min-[768px]:rounded-4xl max-[767px]:bottom-0 min-[768px]:top-0 left-1/2 cursor-default shadow-[0px_0px_10px_5px_#2a2a2a55] min-[992px]:shadow-2xl`}>
            <li className='grid grid-cols-2 min-[768px]:grid-cols-[repeat(4,1fr)] justify-center gap-2 min-[768px]:gap-4 px-4 py-8 min-[768px]:p-8 max-[767px]:pb-20 min-[768px]:pt-20'>
                {children}
            </li>
        </ul>
    )
}

export const NavGroup = ({ group, children, ...props }: NavGroupProps) => {
    return (
        <ul className={cn("w-max max-[767px]:w-full nth-[1]:max-[767px]:mb-5 nth-[2]:max-[767px]:mb-5", props.className)}>
            <li>
                <h3 className='text-[1rem] mb-3 cursor-text px-2 min-[768px]:px-4'>{group}</h3>
                <ul>
                    {children}
                </ul>
            </li>
        </ul>
    )
}

export const NavSubLink = ({ children, url, ...props }: NavLinkProps) => {
    return (
        <li>
            <Link
                to={url}
                className={cn(
                    "flex items-center rounded-sm py-3 px-2 min-[768px]:p-4 text-[0.85rem] min-[768px]:text-[0.9rem] opacity-80 font-medium hover:cursor-pointer border border-transparent max-[767px]:whitespace-break-spaces",
                    props.className)}>
                {children}
            </Link>
        </li>
    )
}