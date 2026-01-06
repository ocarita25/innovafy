import { useState } from "react";

function NavMenuPill() {

    const [pillCol, setPillCol] = useState<string>("col-1");

    const handlePill = () => {
        setPillCol("col-5")
        console.log("Funcion")
    }

    return (
        // <Menubar className="border-none fixed backdrop-blur-sm bottom-[1rem] lg:top-[1rem] -translate-x-1/2 left-1/2">
        <div className="relative grid grid-flow-col grid-col-[repeat(6,1fr)] lg:gap-1 p-2 items-center text-[0.75rem] md:text-[0.85rem] lg:text-[0.9rem]">
            <span className="flex items-center justify-center py-2 bg-red-50">Inicio</span>
            <span className="flex items-center justify-center py-2 bg-red-50">Acerca</span>
            <span className="flex items-center justify-center py-2 bg-red-50">Trabajo</span>
            <span className="flex items-center justify-center py-2 bg-red-50">Servicios</span>
            <span className="flex items-center justify-center py-2 bg-red-50">Ideas</span>
            <span className="flex items-center justify-center py-2 bg-red-50">Contacto</span>
            <div id='pill' className={`-order-1 z-2 bg-black py-2 transition-transform duration-500 ${pillCol}`} onClick={handlePill}>
            </div>
        </div>
        // <Menubar className="p-2 text-transparent">
        //     <MenubarMenu >
        //         <Link to="/">
        //             <MenubarTrigger>
        //                 Inicio
        //             </MenubarTrigger>
        //         </Link>
        //     </MenubarMenu>
        //     <MenubarMenu>
        //         <Link to="/acerca-de">
        //             <MenubarTrigger>
        //                 Acerca
        //             </MenubarTrigger>
        //         </Link>
        //     </MenubarMenu>
        //     <MenubarMenu>
        //         <Link to="/trabajo">
        //             <MenubarTrigger>Trabajo</MenubarTrigger>
        //         </Link>
        //     </MenubarMenu>
        //     <MenubarMenu>
        //         <MenubarTrigger>Servicios</MenubarTrigger>
        //         <MenubarContent className="flex px-9 rounded-[2.5rem] space-x-10" align="center">
        //             <div className="mb-5 mt-14">
        //                 <h3 className="nav-subtitle">¿Qué hacemos?</h3>
        //                 <MenubarItem className="mt-4">Sitios web</MenubarItem>
        //                 <MenubarItem>Aplicaciones web</MenubarItem>
        //                 <MenubarItem>Aplicaciones móviles</MenubarItem>
        //                 <MenubarItem>Comercio electrónico</MenubarItem>
        //                 <MenubarItem>Visibilidad de datos</MenubarItem>
        //             </div>
        //             <div className="mb-5 mt-14">
        //                 <h3 className="nav-subtitle">Diseño y UX</h3>
        //                 <MenubarItem className="mt-4">Investigacion de usuarios</MenubarItem>
        //                 <MenubarItem>Diseño UX</MenubarItem>
        //                 <MenubarItem>Diseño de interfaz de usuario</MenubarItem>
        //                 <MenubarItem>Prototipado</MenubarItem>
        //                 <MenubarItem>Sistemas de diseño</MenubarItem>
        //             </div>
        //         </MenubarContent>
        //     </MenubarMenu>
        //     <MenubarMenu>
        //         <Link to="/thinking">
        //             <MenubarTrigger>Ideas</MenubarTrigger>
        //         </Link>
        //     </MenubarMenu>
        //     <MenubarMenu>
        //         <Link to="/contacto">
        //             <MenubarTrigger>Contacto</MenubarTrigger>
        //         </Link>
        //     </MenubarMenu>
        // </Menubar >
    )
}

export default NavMenuPill
