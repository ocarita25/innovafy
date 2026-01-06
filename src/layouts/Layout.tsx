import ArticleModal from "@/components/common/ArticleModal"
import ExpandingCard from "@/components/common/ExpandingCard"
import Footer from "@/components/layouts/Footer"
import Header from "@/components/navigation/Header"
import { MainRefProvider } from "@/context/MainRefContext"
import { ModalProvider } from "@/context/ModalContext"
import { Outlet } from "react-router-dom"

function LayoutContent() {

    return (
        <div id="app-scroll-container" className='grid z-1 items-start w-full max-w-dvw bg-[#1C2430]'>
            <Header />
            <ExpandingCard className="z-10 bg-theme-background w-full relative col-1 row-1">
                <Outlet />
            </ExpandingCard>
            <Footer />
            <ArticleModal />
        </div>
    )
}

export default function Layout() {
    return (
        <ModalProvider>
            <MainRefProvider>
                <LayoutContent />
            </MainRefProvider>
        </ModalProvider>
    )
}