import ExpandingCard from "@/components/common/ExpandingCard"
import Footer from "@/components/layouts/Footer"
import Header from "@/components/navigation/Header"
import { MainCardWrapper } from "@/constants/expandingCardProps"
import { Outlet } from "react-router-dom"

function Layout() {

    return (
        // <PageWrapper>
        <div className='grid z-1 items-start w-full bg-white'>
            <Header />
            <ExpandingCard settings={MainCardWrapper} id="main" className="relative z-10 col-1 row-1">
                <Outlet />
            </ExpandingCard>
            <Footer />
        </div>
        // </PageWrapper>
    )
}

export default Layout