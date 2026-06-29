import { useLocation } from "react-router-dom";
import Panned from "../common/Panned";
import Nav from "./Nav";
import Isotipo from '@/assets/logos/isotipo.svg?react'

function Header() {

    const location = useLocation()


    const clase = (path: string) => (
        path === "/planes" ? 'bg-[#4300FF]' : ''
    )

    const logoClass = (path: string) => (
        path === "/planes" ? 'text-white' : 'text-[#4700ff]'
    )

    return (
        <header className={`z-20 relative self-start max-w-full grid col-1 row-1 h-20 ${clase(location.pathname)}`}>
            <div className="h-20 max-w-full p-fluid grid grid-cols-[auto_1fr_auto] gap-15 items-center mb-20">
                <a className="z-10">
                    {/* <img src="/isotipo.svg" className="h-8 min-[992px]:h-11 mt-2" /> */}
                    <Isotipo className={`h-8 min-[992px]:h-11 mt-2 ${logoClass(location.pathname)}`} />
                </a>
                <nav className="fixed min-[900px]:top-4 bottom-8 min-[900px]:bottom-auto z-100 rounded-[100vh] left-1/2 -translate-x-1/2 grid shadow-[0px_2px_2px_1px_#2a2a2a11]">
                    <Nav />
                </nav>
                <div className="relative text-theme-primary pointer-none touch-none col-3 z-10 flex align-center justify-center">
                    <Panned variant="vertical" className="flex items-center h-full">
                        <img src="/logo.svg" className="w-12 min-[992px]:w-15 h-15" />
                    </Panned>
                </div>
            </div>
        </header>
    )
}

export default Header
