import ExpandingCard from "@/components/common/ExpandingCard"
import Footer from "@/components/layouts/Footer"
import Header from "@/components/navigation/Header"
import { MainCardWrapper } from "@/constants/expandingCardProps"
import { Outlet } from "react-router-dom"

function Layout() {

    return (
        <div className="grid z-1 items-start w-full">
            <Header />
            <ExpandingCard id="main" settings={MainCardWrapper} className="relative z-0 col-1 row-1">
                <main className="block m-0 h-full w-full bg-theme-background min-h-[100dvh] rounded-b-[3.5rem] transition-colors duration-400 max-w-dvw pt-20">
                    <Outlet />
                </main>
            </ExpandingCard>
            <Footer />
        </div>
    )
}

export default Layout