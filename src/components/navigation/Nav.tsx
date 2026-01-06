import { useEffect, useRef, useState } from 'react'
import { useLocation, useMatch } from 'react-router-dom'
import { NavGroup, NavLink, NavSubLink, NavSubMenu, NavTrigger } from './NavLink';
import { navItems } from '@/constants/navigation';

const Nav = () => {

    const navRef = useRef<HTMLUListElement>(null)
    const [triggered, setTriggered] = useState<boolean>(false)
    const location = useLocation();
    const match = useMatch("/servicios/:slug");
    const pathname = match ? "/servicios" : location.pathname

    useEffect(() => {
        setTriggered(false);
    }, [location.pathname])

    useEffect(() => {
        if (!triggered) return;

        const handleClickOutside = (e: MouseEvent) => {
            if (!navRef.current) return;

            if (!navRef.current.contains(e.target as Node)) {
                setTriggered(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [triggered])



    const isActive = (path: string) =>
        pathname === path ? "text-[var(--theme-accent)] py-2 bg-[var(--text-color-primary)]" : "hover:bg-gray-200 ";


    const handleCloseMenu = () => { setTriggered(false) }

    return (
        <ul ref={navRef} className='relative bg-[#fff8] backdrop-blur-sm grid grid-cols-[repeat(6,auto)] items-center p-2 rounded-full lg:gap-1' >
            <NavLink url='/' className={`${isActive("/")}`}>Inicio</NavLink>
            <NavLink url={"/acerca-de"} className={`${isActive("/acerca-de")}`}>Acerca</NavLink>
            <NavLink url={"/trabajo"} className={`${isActive("/trabajo")}`}>Trabajo</NavLink>
            <NavTrigger label='Servicios' className={`${isActive("/servicios")}`} click={() => { setTriggered(!triggered) }}>
                <NavSubMenu triggered={triggered} release={handleCloseMenu}>
                    {navItems.map((nv, i) => (
                        <NavGroup key={i} group={nv.group} className={`${triggered ? "opacity-100" : "opacity-0"}`}>
                            {nv.links.map((link, j) => (
                                <NavSubLink key={j} className={link.class} variant={link.variant} url={link.url} icon={link.icon} closeMenu={handleCloseMenu}>{link.text}</NavSubLink>
                            ))}
                        </NavGroup>
                    ))}
                </NavSubMenu>
            </NavTrigger>
            <NavLink url={"/thinking"} className={`${isActive("/thinking")}`}>Ideas</NavLink>
            <NavLink url={"/contacto"} className={`${isActive("/contacto")}`}>Contacto</NavLink>
        </ul >
    )
}

export default Nav