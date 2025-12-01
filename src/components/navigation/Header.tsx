import { HeaderFace, Logo } from "../../assets"
import Panned from "../common/Panned";
import Nav from "./Nav";

function Header() {
    return (
        <header className="z-20 relative self-start max-w-full grid col-1 row-1 h-20">
            <div className="h-20 max-w-full p-fluid grid grid-cols-[auto_1fr_auto] gap-15 items-center mb-20">
                <a className="z-10">
                    <Logo />
                </a>
                <nav className="fixed md:top-4 bottom-8 md:bottom-auto z-100 rounded-[100vh] left-1/2 -translate-x-1/2 grid shadow-[0px_3px_5px_1px_#2a2a2a55]">
                    <Nav />
                </nav>
                <div className="relative text-theme-primary pointer-none touch-none h-[25px] w-[25px] min-[992px]:w-[50px] min-[992px]:h-[50px] col-3 z-10">
                    <Panned variant="vertical">
                        <HeaderFace />
                    </Panned>
                </div>
            </div>
        </header>
    )
}

export default Header
