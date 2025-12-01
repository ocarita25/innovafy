import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavGroup, NavLink, NavSubLink, NavSubMenu, NavTrigger } from './NavLink';
import { navItems } from '@/constants/navigation';

const Nav = () => {

    const location = useLocation();

    const isActive = (path: string) =>
        location.pathname === path ? "text-white py-2 bg-black" : "hover:bg-gray-200 ";

    const [triggered, setTriggered] = useState<boolean>(false)

    return (
        <ul className='relative bg-[#fff8] backdrop-blur-sm grid grid-cols-[repeat(6,auto)] items-center p-2 rounded-full lg:gap-1' >
            <NavLink url='/' className={`${isActive("/")}`}>Inicio</NavLink>
            <NavLink url={"/acerca-de"} className={`${isActive("/acerca-de")}`}>Acerca</NavLink>
            <NavLink url={"/trabajo"} className={`${isActive("/trabajo")}`}>Trabajo</NavLink>
            <NavTrigger label='Servicios' className={`${isActive("/servicios")}`} click={() => { setTriggered(!triggered) }}>
                <NavSubMenu triggered={triggered}>
                    {navItems.map((nv, i) => (
                        <NavGroup key={i} group={nv.group} className={`${triggered ? "opacity-100" : "opacity-0"}`}>
                            {nv.links.map((link, j) => (
                                <NavSubLink key={j} className={link.class} url={link.url}>{link.text}</NavSubLink>
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