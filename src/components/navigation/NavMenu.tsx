import { Link, useLocation } from "react-router-dom"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "../ui/menubar"
import { navItems } from "@/constants/navigation";

function NavMenu() {
    const location = useLocation();

    const isActive = (path: string) =>
        location.pathname === path ? "text-white py-2 bg-black" : "hover:bg-[#FD34F4] ";

    return (
        // <Menubar className="border-none fixed backdrop-blur-sm bottom-[1rem] lg:top-[1rem] -translate-x-1/2 left-1/2">
        <Menubar className="border-none rounded-full backdrop-blur-sm p-2">
            <MenubarMenu >
                <Link to="/">
                    <MenubarTrigger className={`${isActive("/")}`}>
                        Inicio
                    </MenubarTrigger>
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <Link to="/acerca-de">
                    <MenubarTrigger className={`${isActive("/acerca-de")}`}>
                        Acerca
                    </MenubarTrigger>
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <Link to="/trabajo">
                    <MenubarTrigger className={`${isActive("/trabajo")}`}>Trabajo</MenubarTrigger>
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-gray-200 ">Servicios</MenubarTrigger>
                <MenubarContent className="flex px-9 rounded-[2.5rem] space-x-5" align="center">
                    {navItems.map((nav, i) => (
                        <div key={i} className="mb-5 mt-14">
                            <h3 className="nav-subtitle mb-4">{nav.group}</h3>
                            {nav.links.map((link, j) => (
                                <Link key={j} to={link.url}>
                                    <MenubarItem className={link.class}>{link.text}</MenubarItem>
                                </Link>
                            ))}
                        </div>

                    ))}
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <Link to="/thinking">
                    <MenubarTrigger className={`${isActive("/thinking")}`}>Ideas</MenubarTrigger>
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <Link to="/contacto">
                    <MenubarTrigger className={`${isActive("/contacto")}`}>Contacto</MenubarTrigger>
                </Link>
            </MenubarMenu>
        </Menubar >
    )
}

export default NavMenu
