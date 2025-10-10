import { Link, useLocation } from "react-router-dom"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "../ui/menubar"

function NavMenu() {
    const location = useLocation();

    const isActive = (path: string) =>
        location.pathname === path ? "bg-theme-secondary text-theme-primary font-semibold" : "hover:bg-transparent ";

    return (
        <Menubar className="border-none fixed backdrop-blur-sm">
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
                        Acerca de
                    </MenubarTrigger>
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <Link to="/trabajo">
                    <MenubarTrigger className={`${isActive("/trabajo")}`}>Trabajo</MenubarTrigger>
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Servicios</MenubarTrigger>
                <MenubarContent className="flex px-9 rounded-[2.5rem] space-x-10" align="center">
                    <div className="mb-5 mt-14">
                        <h3 className="nav-subtitle">¿Qué hacemos?</h3>
                        <MenubarItem className="mt-4">Sitios web</MenubarItem>
                        <MenubarItem>Aplicaciones web</MenubarItem>
                        <MenubarItem>Aplicaciones móviles</MenubarItem>
                        <MenubarItem>Comercio electrónico</MenubarItem>
                        <MenubarItem>Visibilidad de datos</MenubarItem>
                    </div>
                    <div className="mb-5 mt-14">
                        <h3 className="nav-subtitle">Diseño y UX</h3>
                        <MenubarItem className="mt-4">Investigacion de usuarios</MenubarItem>
                        <MenubarItem>Diseño UX</MenubarItem>
                        <MenubarItem>Diseño de interfaz de usuario</MenubarItem>
                        <MenubarItem>Prototipado</MenubarItem>
                        <MenubarItem>Sistemas de diseño</MenubarItem>
                    </div>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <Link to="/thinking">
                    <MenubarTrigger className={`${isActive("/thinking")}`}>Pensamiento</MenubarTrigger>
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
