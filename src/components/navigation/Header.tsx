import { HeaderFace, Logo } from "../../assets"
import NavMenu from "./NavMenu"
import 'animate.css';

function Header() {
    return (
        <header className="absolute top-0 z-50 w-full grid grid-cols-[auto_1fr_auto] gap-15 p-fluid items-center h-20">
            <Logo />
            <nav className="flex items-center justify-center w-full">
                <NavMenu />
            </nav>
            <span className="text-theme-primary block">
                <HeaderFace />
            </span>
        </header>
    )
}

export default Header
