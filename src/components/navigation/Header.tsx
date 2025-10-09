import { HeaderFace, Logo } from "../../assets"
import NavMenu from "./NavMenu"
import 'animate.css';

function Header() {
    return (
        <header className="absolute top-0 z-20 w-full flex justify-between items-center p-fluid h-20">
            <Logo />
            <nav className="flex justify-center items-center">
                <NavMenu />
            </nav>
            <span className="text-theme-primary block">
                <HeaderFace />
            </span>
        </header>
    )
}

export default Header
