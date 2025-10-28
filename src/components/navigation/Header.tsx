import { HeaderFace, Logo } from "../../assets"
import VerticalPanned from "../common/VerticalPanned";
import NavMenu from "./NavMenu"
import 'animate.css';

function Header() {
    return (
        // <header className="col-1 row-1 absolute top-0 z-50 w-full grid grid-cols-[auto_1fr_auto] gap-15 p-fluid items-center h-20">
        <header className="z-1 self-start w-full grid col-1 row-1 h-20 ">
            <div className="h-20 w-full p-fluid grid grid-cols-[auto_1fr_auto] gap-15 items-center mb-20">
                <a className="z-10">
                    <Logo />
                </a>
                <nav className="fixed md:top-5 md:bottom-auto bottom-[1.875rem] z-100 rounded-[100vh] overflow-hidden left-1/2 -translate-x-1/2 grid">
                    <NavMenu />
                </nav>
                <div className="relative text-theme-primary pointer-none touch-none w-[50px] h-[50px] col-3 z-10 ">
                    <VerticalPanned from={{ yPercent: -100, opacity: -2, duration: 1, ease: 'power1.inOut' }}>
                        <HeaderFace />
                    </VerticalPanned>
                </div>
            </div>
        </header>
    )
}

export default Header
