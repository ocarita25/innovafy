import { useEffect, useRef, useState } from 'react'
import { useLocation, useMatch } from 'react-router-dom'
import { NavGroup, NavLink, NavSubLink, NavSubMenu, NavTrigger } from './NavLink';
import { navItems } from '@/constants/navigation';
import IconoInicio from '@/assets/icons/navpill/inicio.svg?react'
import IconoNosotros from '@/assets/icons/navpill/nosotros.svg?react'
import IconoProyectos from '@/assets/icons/navpill/proyectos.svg?react'
import IconoServicios from '@/assets/icons/navpill/servicios.svg?react'
import IconoIdeas from '@/assets/icons/navpill/ideas.svg?react'
import IconoContacto from '@/assets/icons/navpill/contacto.svg?react'
import IconoPlanes from '@/assets/icons/navpill/planes.svg?react'

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
        pathname === path ? "text-white py-2 bg-[#4700ff]" : "hover:bg-[#c6b0ff] ";

    const isTrabajoActive = () =>
        pathname.split('/')[1] === 'trabajo' ? "text-white py-2 bg-[#4700ff]" : "hover:bg-[#c6b0ff] ";

    const isServiceSelected = (path: string) =>
        pathname === path ? "text-[var(--theme-accent)] py-2 bg-[#4700ff]" : "hover:bg-[#c6b0ff] ";

    const handleCloseMenu = () => { setTriggered(false) }

    return (
        <ul ref={navRef} className='relative bg-[#fff8] backdrop-blur-sm grid grid-cols-[repeat(7,auto)] items-center p-1.5 rounded-full sm:gap-2 md:gap-0' >
            <NavLink url='/' text='Inicio' icon={IconoInicio} className={`${isActive("/")}`} />
            <NavLink url={"/acerca-de"} text='Acerca' icon={IconoNosotros} className={`${isActive("/acerca-de")}`} />
            <NavLink url={"/trabajo"} text='Trabajo' icon={IconoProyectos} className={`${isTrabajoActive()}`} />
            <NavTrigger label='Servicios' icon={<IconoServicios className='sm:w-4.5' />} className={`${isServiceSelected("/servicios")} duration-150 ${triggered ? 'bg-[#c6b0ff]' : ''}`} click={() => { setTriggered(!triggered) }}>
                <NavSubMenu triggered={triggered} release={handleCloseMenu}>
                    {navItems.map((nv, i) => (
                        <NavGroup key={i} group={nv.group} className={`${triggered ? "opacity-100" : "opacity-0"}`}>
                            {nv.links.map((link, j) => (
                                <NavSubLink
                                    key={j}
                                    className={link.class}
                                    variant={link.variant}
                                    url={link.url}
                                    text={link.text}
                                    icon={link.icon}
                                    closeMenu={handleCloseMenu}>
                                </NavSubLink>
                            ))}
                        </NavGroup>
                    ))}
                </NavSubMenu>
            </NavTrigger>
            <NavLink url={"/thinking"} text='Ideas' icon={IconoIdeas} className={`${isActive("/thinking")}`} />
            <NavLink url={"/contacto"} text='Contacto' icon={IconoContacto} className={`${isActive("/contacto")}`} />
            <NavLink url={"/planes"} text='Planes' icon={IconoPlanes} className={`${isActive("/planes")}`} />
        </ul >
    )
}

export default Nav