import Footer from "@/components/layouts/Footer"
import Header from "@/components/navigation/Header"
import { Outlet } from "react-router-dom"

function Layout() {

    return (
        <div className="flex flex-col min-h-dvh ">
            <Header />
            <main className="block m-0 h-full w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout