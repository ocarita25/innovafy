import ArticleModal from "@/components/common/ArticleModal"
import ExpandingCard from "@/components/common/ExpandingCard"
import Footer from "@/components/layouts/Footer"
import Header from "@/components/navigation/Header"
import { MainCardWrapper } from "@/constants/expandingCardProps"
import { MainRefProvider } from "@/context/MainRefContext"
import { ModalProvider } from "@/context/ModalContext"
import { Outlet } from "react-router-dom"

function LayoutContent() {

    return (
        <div className='grid z-1 items-start w-full bg-[#343c46]'>
            <Header />
            <ExpandingCard settings={MainCardWrapper} className="relative col-1 row-1 z-10 bg-theme-background">
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