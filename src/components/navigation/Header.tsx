import { HeaderFace, Logo } from "../../assets"
import NavMenu from "./NavMenu"
import 'animate.css';

function Header() {
    return (
        <div className="flex justify-between items-center p-fluid h-20">
            <Logo />
            <NavMenu />
            <span className="text-theme-primary block">
                <HeaderFace />
            </span>
        </div>
    )
}

export default Header
